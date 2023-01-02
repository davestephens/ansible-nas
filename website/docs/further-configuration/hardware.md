# Hardware

Ansible-NAS will run against any Ubuntu box, a Raspberry Pi 4, or even a VM if you're just testing things out. The hardware you pick for Ansible-NAS depends largely on what you intend to do with your server - and is very much a "how long is a piece of string" type question.

The [homeserver Reddit](https://www.reddit.com/r/HomeServer/) has lots of good information.

## Questions To Think About

1. What will be taxing the CPU(s) on your Ansible-NAS box? Are you intending to transcode video? How many users will be hitting it?

2. How many applications do you intend to run in parallel? How much memory do these applications require?

3. Are you going to run the ZFS file system?

4. What are you intending to store on your Ansible-NAS? Is it data you can download again, or is it important to you that you don't lose it? Do you need mirrored disks?

## HP Microserver

Ansible-NAS development is tested against an HP Microserver N54L, with 16GB of memory, a 120GB SSD for the OS and 5x4TB WD Red NAS drives for storage. It works great :-)

This is obviously not the only solution but a reasonable one if you just want a single box to buy. Many different models are available on eBay at varying prices.
