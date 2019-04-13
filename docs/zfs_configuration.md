This text deals with specific ZFS configuration questions for Ansible-NAS. If
you are new to ZFS and are looking for the big picture, please read the [ZFS
overview](zfs_overview.md) introduction first.

## Just so there is no misunderstanding

Unlike other NAS variants, Ansible-NAS does not install, configure or manage the
disks or file systems for you. It doesn't care which file system you use - ZFS,
Btrfs, XFS or EXT4, take your pick. Nor does it provides a mechanism for
external backups, snapshots or disk monitoring. As Tony Stark said to Loki in
_Avengers_: It's all on you.

However, Ansible-NAS has traditionally been used with the powerful ZFS
filesystem. Since out of the box support for [ZFS on
Linux](https://zfsonlinux.org/) with Ubuntu is comparatively new, this text
shows how to set up a simple storage configuration. To paraphrase Nick Fury from
_Winter Soldier_: We do share. We're nice like that.

> Using ZFS for Docker containers is currently not covered by this document. See
> [the official Docker ZFS
> documentation](https://docs.docker.com/storage/storagedriver/zfs-driver/)
> instead.

## The obligatory warning

We take no responsibility for any bad thing that might happen if you follow this
guide. We strongly suggest you test these procedures in a virtual machine first.
Always, always, always backup your data.

## The basic setup

For this example, we're assuming two identical spinning rust hard drives for
Ansible-NAS storage. These two drives will be **mirrored** to provide
redundancy. The actual Ubuntu system will be on a different drive and is not our
concern.

> [Root on ZFS](https://github.com/zfsonlinux/zfs/wiki/Ubuntu-18.04-Root-on-ZFS)
> is currently still a hassle for Ubuntu. If that changes, this document might
> be updated accordingly. Until then, don't ask us about it.

The Ubuntu kernel is already ready for ZFS. We only need the utility package
which we install with `sudo apt install zfsutils`.

### Creating a pool

We assume you don't mind totally destroying whatever data might be on your two
storage drives, have used a tool such as `gparted` to remove any existing
partitions, and have installed a new GPT partition table on each drive. To
create our ZFS pool, we will use a command in this form:

```
        sudo zpool create -o ashift=<ASHIFT> <NAME> mirror <DRIVE1> <DRIVE2>
```

The options from simple to complex are:

1. **<NAME>**: ZFS pools traditionally take their names from characters in the
   [The Matrix](https://www.imdb.com/title/tt0133093/fullcredits). The two most
   common are `tank` and `dozer`. Whatever you use, it should be short.

1. **<DRIVES>**: The Linux command `lsblk` will give you a quick overview of the
   hard drives in the system. However, we don't pass the drive specification in
   the format `/dev/sde` because this is not persistant. Instead,
   [use](https://github.com/zfsonlinux/zfs/wiki/FAQ#selecting-dev-names-when-creating-a-pool)
   the output of `ls /dev/disk/by-id/` to find the drives' IDs. 
   
1. **<ASHIFT>**: This is required to pass the [sector
   size](https://github.com/zfsonlinux/zfs/wiki/FAQ#advanced-format-disks) of
   the drive to ZFS for optimal performance. You might have to do this by hand
   because some drives lie: Whereas modern drives have 4k sector sizes (or 8k in
   case of many SSDs), they will report 512 bytes because Windows XP [can't
   handle 4k
   sectors](https://support.microsoft.com/en-us/help/2510009/microsoft-support-policy-for-4k-sector-hard-drives-in-windows).
   ZFS tries to [catch the
   liars](https://github.com/zfsonlinux/zfs/blob/master/cmd/zpool/zpool_vdev.c)
   and use the correct value. However, this sometimes fails, and you have to add
   it by hand. The `ashift` value is a power of two, so we have **9** for 512
   bytes, **12** for 4k, and **13** for 8k. You can create a pool without this
   parameter and then use `zdb -C | grep ashift` to see what ZFS generated
   automatically. If it isn't what you think, destroy the pool again and add it
   manually.

In our pretend case, we use two 3 TB WD Red drives. Listing all drives by ID
gives us something like this, but with real serial numbers:

```
        ata-WDC_WD30EFRX-68EUZN0_WD-WCCFAKESN01
        ata-WDC_WD30EFRX-68EUZN0_WD-WCCFAKESN02
```

WD Reds have a 4k sector size. The actual command to create the pool would then be: 

```
        sudo zpool create -o ashift=12 tank mirror ata-WDC_WD30EFRX-68EUZN0_WD-WCCFAKESN01 ata-WDC_WD30EFRX-68EUZN0_WD-WCCFAKESN02
```

Our new pool is named `tank` and is mirrored. To see information about it, use
`zpool status tank` (no `sudo` necessary). If you screwed up (usually with
`ashift`), use `sudo zpool destroy tank` and start over _now_ before it's too
late.

### Pool default parameters

Setting pool-wide default parameters makes life easier when we create our
filesystems. To see them all, you can use the command `zfs get all tank`. Most
are perfectly sensible, some you'll [want to
change](https://jrs-s.net/2018/08/17/zfs-tuning-cheat-sheet/):

```
        sudo zfs set atime=off tank
        sudo zfs set compression=lz4 tank
        sudo zfs set autoexpand=on tank
```

The `atime` parameter means that your system updates a time stamp every time a
file is accessed, which uses a lot of resources. Usually, you don't care.
Compression is a no-brainer on modern CPUs and should be on by default (we will
discuss exceptions for compressed media files later). The `autoexpand` lets the
pool grow when you add larger hard drives.

## Creating filesystems

To actually store the data, we need filesystems (also known as "datasets"). For
our very simple default Ansible-NAS setup, we will create two: One filesystem
for movies (`movies_root` in `all.yml`) and one for downloads
(`downloads_root`). 

### Movies (and other large, pre-compressed files)

We first create the basic filesystem:

```
        sudo zfs create tank/movies
```

Movie files are usually rather large, already in a compressed format and for
security reasons, the files stored there shouldn't be executable. We change the
properties of the filesystem accordingly:

```
        sudo zfs set recordsize=1M tank/movies
        sudo zfs set compression=off tank/movies
        sudo zfs set exec=off tank/movies
```

The **recordsize** here is set to the currently largest possible value [to
increase performance](https://jrs-s.net/2019/04/03/on-zfs-recordsize/) and save
storage. Recall that we used `ashift` during the creation of the pool to match
the ZFS block size with the drives' sector size. Records are created out of
these blocks. Having larger records reduces the amount of metadata that is
required, because various parts of ZFS such as caching and checksums work on
this level.

**Compression** is unnecessary for movie files because they are usually in a
compressed format anyway. ZFS is good about recognizing this, and so if you
happen to leave compression on as the default for the pool, it won't make much
of a difference. 

[By default](https://zfsonlinux.org/manpages/0.7.13/man8/zfs.8.html#lbAI), ZFS
stores pools directly under the root directory. Also, the filesystems don't have
to be listed in `/etc/fstab` to be mounted. This means that our filesystem will
appear as `/tank/movies` if you don't change anything. We need to change the
line in `all.yml` accordingly: 

```
        movies_root: "/tank/movies"
```

You can also set a traditional mount point if you wish with the `mountpoint`
property. Setting this to `none` prevents the file system from being
automatically mounted at all. 

The filesystems for TV shows, music files and podcasts - all large,
pre-compressed files - should probably take the exact same parameters. 

### Downloads 

For downloads, we can leave most of the default parameters the way they are. 
                
```
        sudo zfs create tank/downloads
        sudo zfs set exec=off tank/downloads
```

The recordsize stays the 128 KB default. In `all.yml`, the new line is

```
        downloads_root: "/tank/downloads"
```

### Other data

Depending on the use case, you might want to create and tune more filesystems.
For example, [Bit
Torrent](http://open-zfs.org/wiki/Performance_tuning#Bit_Torrent),
[MySQL](http://open-zfs.org/wiki/Performance_tuning#MySQL) and [Virtual
Machines](http://open-zfs.org/wiki/Performance_tuning#Virtual_machines) all have
known best configurations. 


## Setting up scrubs

On Ubuntu, scrubs are configurated out of the box to run on the second Sunday of
every month. See `/etc/cron.d/zfsutils-linux` to change this.


## Email notifications

To have the [ZFS
demon](http://manpages.ubuntu.com/manpages/bionic/man8/zed.8.html) `zed` send
you emails when there is trouble, you first have to [install an email
agent](https://www.reddit.com/r/zfs/comments/90prt4/zed_config_on_ubuntu_1804/)
such as postfix. In the file `/etc/zfs/zed.d/zed.rc`, change the three entries:

```
ZED_EMAIL_ADDR=<YOUR_EMAIL_ADDRESS_HERE>
ZED_NOTIFY_INTERVAL_SECS=3600
ZED_NOTIFY_VERBOSE=1
```

If `zed` is not enabled, you might have to run `systemctl enable zed`. You can
test the setup by manually starting a scrub with `sudo zpool scrub tank`. 


## Setting up automatic snapshots

See [sanoid](https://github.com/jimsalterjrs/sanoid/) as a tool for snapshot
management. 



