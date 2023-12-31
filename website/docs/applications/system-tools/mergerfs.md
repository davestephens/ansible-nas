---
title: "Mergerfs"
---

Homepage: [https://github.com/trapexit/mergerfs](https://github.com/trapexit/mergerfs)

mergerfs is a union filesystem geared towards simplifying storage and management of files across numerous commodity storage devices. It is similar to mhddfs, unionfs, and aufs.

## Usage

Set `mergerfs_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.
Set `mergerfs_branches` to the list of paths you want to merge and `mergerfs_mount` the the resulting merged mount.

This basic setting will create and enable mergerfs systemd service.

For more advanced usage, if you have Rclone installed and `rclone_mount_enabled`, the role will create a service that will merge `mergerfs_rclone_local_mount` and your `rclone_mount` (so your mounted remote) together. This can be further augumented by cloud_upload (TBD) scripts that would periodically sync your `mergerfs_rclone_local_path` to your rclone remote.
