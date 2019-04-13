Ansible-NAS currently assumes you know your way around a server. This page is an
overview for absolute NAS beginners so they can decide if it is right for them.

## The big picture

To start off _really_ simple: A NAS ([Network Attached
Storage](https://en.wikipedia.org/wiki/Network-attached_storage)) is a server
mostly for home or other small networks that offers file storage. It's usually a
small box that sits in the corner and runs 24/7. These days, a NAS doesn't just
only handle files, but also offers other services, for instance video streaming
with [Plex](https://www.plex.tv/) or [Emby](https://emby.media/index.html). You
can buy consumer NAS boxes from [various
manifacturers](https://en.wikipedia.org/wiki/List_of_NAS_manufacturers) where
you just have to add the hard drives, or you can configure your own hardware and
use open-source software as the operating system. 

One example of the second variant you'll see mentioned here is
[FreeNAS](https://freenas.org/). It is based on
[FreeBSD](https://www.freebsd.org/), which like Linux belongs to the family of
Unix-like operating systems. One strength of FreeBSD/FreeNAS is that it  
includes the powerful ZFS file system
([OpenZFS](http://www.open-zfs.org/wiki/Main_Page), to be exact).  However, it
does not support the [Docker](https://www.docker.com/) containers the way Linux
does. Also, the Linux ecosystem is larger. On the other hand, very few Linux
distributions include ZFS out of the box because of licensing issues.

Ansible-NAS in its default form attempts to have the best of both worlds by
using Docker on Linux with ZFS. This is possible because the
[Ubuntu](https://www.ubuntu.com/server) Linux distribution supports both
technologies. As the name says, Ansible-NAS uses
[Ansible](https://www.ansible.com/) server automation which is usually deployed
on big multi-machine enterprise systems, not small home servers the size of a
breadbox. 

## Before you take the plunge

The commercial NAS vendors try to make setting up and running a NAS as simple
and painless as possible - for a fee, obviously. The open-source NAS software
providers have lots of resources to help you get started with your own hardware.
FreeNAS for instance comes with extensive documentation, good introductions to
ZFS and other topics, and a large community to lean on. 

With Ansible-NAS, at this point at least, you're pretty much on your own. Though
there is a [Gitter](https://gitter.im/Ansible-NAS/Chat) chat room (see
[support](support.md)), you're expected to have some familiarity with the
technologies involved and be able to set up the basic stuff yourself. 

As a to-do list, before you can even install Ansible-NAS, you'll have to:

1. Choose, buy, configure, and test your own **hardware**. Note that ZFS loves
   RAM, and it is [recommended](zfs_overview.md) you use ECC RAM. ZFS also
   prefers to have the hard drives all to itself. If you're paranoid (a good
   mindset when dealing with servers), you'll probably want an uninterruptible
   power supply (UPS) of some sort as well and SMART monitoring for your hard
   drives. See the [FreeNAS hardware
   requirements](https://freenas.org/hardware-requirements/) as a guideline, but
   remember you'll also be running Docker.

1. Install **Ubuntu Server**, preferably a Long Term Support (LTS) edition such
   as 18.04, and keep it updated. You'll probably want to perform other basic
   setup tasks like hardening SSH and including email notifications. There are
   [various guides](https://devanswers.co/ubuntu-18-04-initial-server-setup/)
   for this, but if you're just getting started, you'll probably need a book.

1. Install **ZFS** and set up storage. You can use a different file system and
   volume manager, but Ansible-NAS historically tends towards ZFS. You'll have
   to create datasets for various parts of the system, some form of automatic
   snapshot handling, and possibly automatic backups to another server or an
   external hard drive. If you are completely new to ZFS, expect a brutal
   learning curve. A [brief introduction](zfs_overview.md) is included here, as
   well as a [basic example](zfs_configuration.md) of a very simple ZFS setup.
   
After that, you can continue with the actual [installation](installation.md) of
Ansible-NAS.

## How to experiment

The easiest way to take Ansible-NAS for a spin is in a virtual machine, for
instance in [VirtualBox](https://www.virtualbox.org/). You'll want to create
three virtual hard drives for testing: One of the actual NAS, and the two others
to create a mirrored ZFS pool. A virtual machine will probably not be happy or
fast, but this will let you experiment with installing, configuring, and running
a complete system. 
