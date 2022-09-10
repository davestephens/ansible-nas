# ZFS Overview

This is a general overview of the ZFS file system for people who are new to it. If you have some experience and are actually looking for specific information about how to configure ZFS for Ansible-NAS, check out the [ZFS example configuration](zfs_configuration.md).

## What is ZFS and why would I want it?

[ZFS](https://en.wikipedia.org/wiki/ZFS) is an advanced filesystem and volume manager originally created by Sun Microsystems starting in 2001. First released in 2005 for OpenSolaris, Oracle later bought Sun and switched to developing ZFS as closed source software. An open source fork took the name [OpenZFS](http://www.open-zfs.org/wiki/Main_Page), but is still called "ZFS" for short. It runs on Linux, FreeBSD, illumos and other platforms.

ZFS aims to be the ["last word in
filesystems"](https://blogs.oracle.com/bonwick/zfs:-the-last-word-in-filesystems), a technology so future-proof that Michael W. Lucas and Allan Jude famously stated that the _Enterprise's_ computer on _Star Trek_ probably runs it. The design was based on [four principles](https://www.youtube.com/watch?v=MsY-BafQgj4):

1. "Pooled" storage to eliminate the notion of volumes. You can add more storage the same way you just add a RAM stick to memory.

1. Make sure data is always consistent on the disks. There is no `fsck` command for ZFS and none is needed.

1. Detect and correct data corruption ("bitrot"). ZFS is one of the few storage systems that checksums everything, including the data itself, and is "self-healing".

1. Make it easy to use. Try to "end the suffering" for the admins involved in managing storage.

ZFS includes a host of other features such as snapshots, transparent compression and encryption. During the early years of ZFS, this all came with hardware requirements only enterprise users could afford. By now, however, computers have become so powerful that ZFS can run (with some effort) on a [Raspberry Pi](https://gist.github.com/mohakshah/b203d33a235307c40065bdc43e287547).

FreeBSD and FreeNAS make extensive use of ZFS. What is holding ZFS back on Linux are [licensing issues](https://en.wikipedia.org/wiki/OpenZFS#History) beyond the scope of this document.

Ansible-NAS doesn't actually specify a filesystem - you can use EXT4, XFS or Btrfs as well. However, ZFS not only provides the benefits listed above, but also lets you use your hard drives with different operating systems. Some people now using Ansible-NAS came from FreeNAS, and were able to `export` their ZFS storage drives there and `import` them to Ubuntu. On the other hand, if you ever decide to switch back to FreeNAS or maybe want to use FreeBSD instead of Linux, you should be able to use the same ZFS pools

## An overview and some actual commands

Storage in ZFS is organized in **pools**. Inside these pools, you create **filesystems** (also known as "datasets") which are like partitions on steroids. For instance, you can keep each user's `/home` directory in a separate filesystem. ZFS systems tend to use lots and lots of specialized filesystems with tailored parameters such as record size and compression. All filesystems share the available storage in their pool.

Pools do not directly consist of hard disks or SSDs. Instead, drives are organized as **virtual devices** (VDEVs). This is where the physical redundancy in ZFS is located. Drives in a VDEV can be "mirrored" or combined as "RaidZ", roughly the equivalent of RAID5. These VDEVs are then combined into a pool by the administrator. The command might look something like this:

```bash
        sudo zpool create tank mirror /dev/sda /dev/sdb
```

This combines `/dev/sba` and `/dev/sdb` to a mirrored VDEV, and then defines a new pool named `tank` consisting of this single VDEV. (Actually, you'd want to use a different ID for the drives, but you get the idea.) You can now create a filesystem in this pool for, say, all of your _Mass Effect_ fan fiction:

```bash
        sudo zfs create tank/mefanfic
```

You can then enable automatic compression on this filesystem with `sudo zfs set compression=lz4 tank/mefanfic`. To take a **snapshot**, use

```bash
        sudo zfs snapshot tank/mefanfic@21540411
```

Now, if evil people were somehow able to encrypt your precious fan fiction files with ransomware, you can simply laugh maniacally and revert to the old version:

```bash
        sudo zfs rollback tank/mefanfic@21540411
```

Of course, you would lose any texts you might have added to the filesystem between that snapshot and now. Usually, you'll have some form of **automatic snapshot administration** configured.

To detect bitrot and other data defects, ZFS periodically runs **scrubs**: The system compares the available copies of each data record with their checksums. If there is a mismatch, the data is repaired.

## Known issues

> At time of writing (April 2019), ZFS on Linux does not offer native encryption, TRIM support or device removal, which are all scheduled to beincluded in the upcoming [0.8 release](https://www.phoronix.com/scan.php?page=news_item&px=ZFS-On-Linux-0.8-RC1-Released) any day now.

ZFS' original design for enterprise systems and redundancy requirements can make some things difficult. You can't just add individual drives to a pool and tell the system to reconfigure automatically. Instead, you have to either add a new VDEV, or replace each of the existing drives with one of higher capacity. In an enterprise environment, of course, you would just _buy_ a bunch of new drives and move the data from the old pool to the new pool. Shrinking a pool is even harder - put simply, ZFS is not built for this, though it is [being worked on](https://www.delphix.com/blog/delphix-engineering/openzfs-device-removal).

 If you absolutely must be able to add or remove single drives, ZFS might not be the filesystem for you

## Myths and misunderstandings

Information on the internet about ZFS can be outdated, conflicting or flat-out wrong. Partially this is because it has been in use for almost 15 years now and things change, partially it is the result of being used on different operating systems which have minor differences under the hood. Also, Google searches tend to first return the Oracle documentation for their closed source ZFS variant, which is increasingly diverging from the open source OpenZFS standard.

To clear up some of the most common misunderstandings:

### No, ZFS does not need at least 8 GB of RAM

This myth is especially common [in FreeNAS circles](https://www.ixsystems.com/community/threads/does-freenas-really-need-8gb-of-ram.38685/). Curiously, FreeBSD, the basis of FreeNAS, will run with [1 GB](https://wiki.freebsd.org/ZFSTuningGuide). The [ZFS on Linux FAQ](https://github.com/zfsonlinux/zfs/wiki/FAQ#hardware-requirements), which is more relevant for Ansible-NAS, states under "suggested hardware":

> 8GB+ of memory for the best performance. It's perfectly possible to run with
> 2GB or less (and people do), but you'll need more if using deduplication.

(Deduplication is only useful in [special cases](http://open-zfs.org/wiki/Performance_tuning#Deduplication). If you are reading this, you probably don't need it.)

Experience shows that 8 GB of RAM is in fact a sensible minimal amount for continuous use. But it's not a requirement. What everybody agrees on is that ZFS _loves_ RAM and works better the more it has, so you should have as much of it as you possibly can. When in doubt, add more RAM, and even more, and them some, until your motherboard's capacity is reached.

### No, ECC RAM is not required for ZFS

This is another case where a recommendation has been taken as a requirement. To quote the [ZFS on Linux FAQ](https://github.com/zfsonlinux/zfs/wiki/FAQ#do-i-have-to-use-ecc-memory-for-zfs) again:

> Using ECC memory for OpenZFS is strongly recommended for enterprise environments where the strongest data integrity guarantees are required. Without ECC memory rare random bit flips caused by cosmic rays or by faulty memory can go undetected. If this were to occur OpenZFS (or any other filesystem) will write the damaged data to disk and be unable to automatically detect the corruption.

ECC corrects [single bit errors](https://en.wikipedia.org/wiki/ECC_memory) in memory. It is _always_ better to have it on _any_ computer if you can afford it, and ZFS is no exception. However, there is absolutely no requirement for ZFS to have ECC RAM. If you just don't care about the danger of random bit flips because, hey, you can always just download [Night of the Living Dead](https://archive.org/details/night_of_the_living_dead) all over again, you're perfectly free to use normal RAM. If you do use ECC RAM, make sure your processor and motherboard support it.

### No, the SLOG is not really a write cache

You'll read the suggestion to add a fast SSD or NVMe as a "SLOG drive" (mistakenly also called "ZIL") for write caching. This isn't what happens, because ZFS already includes [a write cache](https://linuxhint.com/configuring-zfs-cache/) in RAM. Since RAM is always faster, adding a disk as a write cache doesn't even make sense

What the **ZFS Intent Log (ZIL)** does, with or without a dedicated drive, is handle synchronous writes. These occur when the system refuses to signal a successful write until the data is actually stored on a physical disk somewhere. This keeps the data safe, but is slower.

By default, the ZIL initially shoves a copy of the data on a normal VDEV somewhere and then gives the thumbs up. The actual write to the pool is performed later from the write cache in RAM, _not_ the temporary copy. The data there is only ever read if the power fails before the last step. The ZIL is all about protecting data, not making transfers faster.

A **Separate Intent Log (SLOG)** is an additional fast drive for these temporary synchronous writes. It simply allows the ZIL give the thumbs up quicker. This means that a SLOG is never read unless the power has failed before the final write to the pool.

Asynchronous writes just go through the normal write cache, by the way. If the power fails, the data is gone.

In summary, the ZIL prevents data loss during synchronous writes, or at least ensures that the data in storage is consistent. You always have a ZIL. A SLOG will make the ZIL faster. You'll probably need to [do some research](https://www.ixsystems.com/blog/o-slog-not-slog-best-configure-zfs-intent-log/) and some testing to figure out if your system would benefit from a SLOG. NFS for instance uses synchronous writes, SMB usually doesn't. When in doubt, add more RAM instead.

## Further reading and viewing

- In 2012, Aaron Toponce wrote a now slightly dated, but still very good [introduction](https://pthree.org/2012/04/17/install-zfs-on-debian-gnulinux/) to ZFS on Linux. If you only read one part, make it the [explanation of the ARC](https://pthree.org/2012/12/07/zfs-administration-part-iv-the-adjustable-replacement-cache/), ZFS' read cache.
- One of the best books on ZFS around is _FreeBSD Mastery: ZFS_ by Michael W. Lucas and Allan Jude. Though it is written for FreeBSD, the general guidelines apply for all variants. There is a second volume for advanced use.

- Jeff Bonwick, one of the original creators of ZFS, tells the story of how ZFS came to be [on YouTube](https://www.youtube.com/watch?v=dcV2PaMTAJ4).
