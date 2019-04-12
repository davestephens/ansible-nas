This is a general overview of the ZFS file system for people who are new to it.
If you have some experience and are looking for specific information about how
to configure ZFS for Ansible-NAS, check out the [ZFS example
configuration](zfs_configuration.md) instead.  

## What is ZFS and why would I want it?

[ZFS](https://en.wikipedia.org/wiki/ZFS) is an advanced filesystem and volume
manager originally created by Sun Microsystems from 2001 onwards. First released
in 2005 for OpenSolaris, Oracle later bought Sun and started developing ZFS as
closed source software. An open source fork took the name
[OpenZFS](http://www.open-zfs.org/wiki/Main_Page), but is still called "ZFS" for
short. It runs on Linux, FreeBSD, illumos and other platforms.  

ZFS aims to be the ["last word in
filesystems"](https://blogs.oracle.com/bonwick/zfs:-the-last-word-in-filesystems)
- a system so future-proof that Michael W. Lucas and Allan Jude famously stated
that the _Enterprise's_ computer on _Star Trek_ probably runs it. The design
was based on [four principles](https://www.youtube.com/watch?v=MsY-BafQgj4):

1. "Pooled" storage to completely eliminate the notion of volumes. You can
   add more storage the same way you just add a RAM stick to memory.

1. Make sure data is always consistant on the disks. There is no `fsck` command
   for ZFS.

1. Detect and correct data corruption ("bitrot"). ZFS is one of the few storage
   systems that checksums everything and is "self-healing".

1. Make it easy to use. Try to "end the suffering" for the admins involved in
   managing storage.

ZFS includes a host of other features such as snapshots, transparent
compression, and encryption. During the early years of ZFS, this all came with
hardware requirements which only enterprise users could afford. By now, however,
computers have become so powerful that ZFS can run (with some effort) on a
[Raspberry
Pi](https://gist.github.com/mohakshah/b203d33a235307c40065bdc43e287547). FreeBSD
and FreeNAS make extensive use of ZFS. What is holding ZFS back on Linux are
[licensing conflicts](https://en.wikipedia.org/wiki/OpenZFS#History) beyond the
scope of this document. 

Ansible-NAS doesn't actually specify a filesystem - you can use EXT4, XFS, Btrfs
or pretty much anything you like. However, ZFS not only provides the benefits
listed above, but also lets you use your hard drives with different operating
systems. Some people now using Ansible-NAS originally came from FreeNAS, and
were able to `export` their ZFS pools there and `import` them to Ubuntu. On the
other hand, if you ever decide to switch back to FreeNAS or maybe try FreeBSD
instead of Linux, you should be able to do so using the same ZFS pools. 

## A small taste of ZFS 

Storage in ZFS is organized in **pools**. Inside these pools, you create
**filesystems** (also known as "datasets") which are like partitions on
steroids. For instance, you can keep each user's `/home/` files in a separate
filesystem. ZFS systems tend to use lots and lots of specialized filesystems.
They share the available storage in their pool. 

Pools do not directly consist of hard disks or SSDs. Instead, drives are
organized as **virtual devices** (VDEV). This is where the physical redundancy
in ZFS is located. Drives in a VDEV can be "mirrored" or combined as "RaidZ",
roughly the equivalent of RAID5. These VDEVs are then combined into a pool by the
administrator.  

To give you some idea of how this works, this is how to create a pool:

```
        sudo zpool create tank mirror /dev/sda /dev/sdb
```

This combines `/dev/sba` and `/dev/sdb` to a mirrored VDEV, and then defines a
new pool named `tank` consisting of this single VDEV. We can now create a
filesystem in this pool to hold our books: 

```
        sudo zfs create tank/books
```

You can then enable automatic and transparent compression on this filesystem
with `sudo zfs set compression=lz4 tank/books`. To take a **snapshot**, use

```
        sudo zfs snapshot tank/books@monday
```

Now, if evil people were somehow to encrypt your book files with ransomware on
Wednesday, you can laugh and revert to the old version: 

```
        sudo zfs rollback tank/books@monday
```

Of course, you did lose any work from Tuesday unless you created a snapshot then
as well. Usually, you'll have some form of **automatic snapshot
administration**.  

To detect bitrot and other defects, ZFS periodically runs **scrubs**: The system
compares the available copies of each data record with their checksums. If there
is a mismatch, the data is repaired. 


## Known issues 

Constructing the pools out of virtual devices creates some problems. You can't
just detach a drive (or a VDEV) and have the pool reconfigure itself. To
reorganize the pool, you'd have to create a new, temporary pool out of separate
hard drives, move the data over, destroy and reconfigure the original pool, and
then move the data back. Increasing the size of a pool involves either adding
more VDEVs (_not_ just additional disks) or replacing each disk in a VDEV by a
larger version with the `autoexpand` parameter set. 

> At time of writing (April 2019), ZFS on Linux does not offer native encryption,
> trim support, or device removal, which are all scheduled to be included in the
> [0.8 release](https://www.phoronix.com/scan.php?page=news_item&px=ZFS-On-Linux-0.8-RC1-Released)
> in the near future. 

## Myths and misunderstandings 

There are a bunch of false or simply outdated information about ZFS. To clear up
the worst of them:

### No, ZFS does not need at least 8 GB of RAM

This myth is especially common [in FreeNAS
circles](https://www.ixsystems.com/community/threads/does-freenas-really-need-8gb-of-ram.38685/).
Note that FreeBSD, the basis of FreeNAS, will run with as little [as 1
GB](https://wiki.freebsd.org/ZFSTuningGuide). The [ZFS on Linux
FAQ](https://github.com/zfsonlinux/zfs/wiki/FAQ#hardware-requirements), which is
more relevant here, states under "suggested hardware":

> 8GB+ of memory for the best performance. It's perfectly possible to run with
> 2GB or less (and people do), but you'll need more if using deduplication.

(Deduplication is only useful in [very special
cases](http://open-zfs.org/wiki/Performance_tuning#Deduplication). If you are
reading this, you probably don't need it.)

What everybody agrees on is that ZFS _loves_ RAM, and you should have as much of
it as you possibly can. So 8 GB is in fact a sensible lower limit you shouldn't
go below unless for testing. When in doubt, add more RAM, and even more, and
them some, until your motherboard's capacity is reached.

### No, ECC RAM is not required for ZFS

This again is a case where a recommendation has been taken as a requirement. To
quote the [ZFS on Linux
FAQ](https://github.com/zfsonlinux/zfs/wiki/FAQ#do-i-have-to-use-ecc-memory-for-zfs)
again: 
   
> Using ECC memory for OpenZFS is strongly recommended for enterprise
> environments where the strongest data integrity guarantees are required.
> Without ECC memory rare random bit flips caused by cosmic rays or by faulty
> memory can go undetected. If this were to occur OpenZFS (or any other
> filesystem) will write the damaged data to disk and be unable to automatically
> detect the corruption.

It is _always_ better to have ECC RAM on all computers if you can afford it, and
ZFS is no exception. However, there is absolutely no requirement for ZFS to have
ECC RAM.

### No, the SLOG is not really a write cache

You'll hear the suggestion that you add a fast SSD or NVMe as a "SLOG"
(mistakingly also called "ZIL") drive for write caching. This isn't what would
happen, because ZFS already includes [a write
cache](https://linuxhint.com/configuring-zfs-cache/). It is located in RAM.
Since RAM is always faster than any drive, adding a disk as a write cache
doesn't make sense. 

What the ZFS Intent Log (ZIL) does, with or without a dedicated drive, is handle
synchronous writes. These occur when the system refuses to signal a successful
write until the data is actually on a physical disk somewhere. This keeps it
safe. By default, the ZIL initially shoves a copy of the data on a normal VDEV
somewhere and then gives the thumbs up. The actual write to the pool is
performed later from the normal write cache, _not_ the temporary copy. The data
there is only ever read if the power fails before the last step. 

A Separate Intent Log (SLOG) is a fast drive for the ZIL's temporary synchronous
writes. It allows the ZIL give the thumbs up quicker. This means that SLOG is
never read unless the power has failed before the final write to the pool.
Asynchronous writes just go through the normal write cache. If the power fails,
the data is gone.

In summary, the ZIL is concerned with preventing data loss for synchronous
writes, not with speed. You always have a ZIL. A SLOG will make the ZIL faster.
You'll need to [do some
research](https://www.ixsystems.com/blog/o-slog-not-slog-best-configure-zfs-intent-log/)
to figure out if your system would benefit from a SLOG. NFS for instance uses
synchonous writes, SMB usually doesn't. If in doubt, add more RAM instead. 


## Further reading and viewing

- One of the best books around is _FreeBSD Mastery: ZFS_ by Michael W.
  Lucas and Allan Jude. Though it is written for FreeBSD, the general guidelines
  apply for all variants. There is a second book for advanced users.

- Jeff Bonwick, one of the original creators of ZFS, tells the story of how ZFS
  came to be [on YouTube](https://www.youtube.com/watch?v=dcV2PaMTAJ4).

