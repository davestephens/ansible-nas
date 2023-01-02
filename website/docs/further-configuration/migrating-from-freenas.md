# Migrating from FreeNAS

FreeNAS uses ZFS as it's core storage filesystem. [ZFS on Linux](https://zfsonlinux.org/) is supported natively in Ubuntu, so importing FreeNAS zpools is easy.

Once you have an Ubuntu Server installation up and running:

1. Ensure you have a working backup of your FreeNAS data.
2. Check that the working backup you think you have actually works.
3. Shut down your Ubuntu Server, connect the disks, start it back up.
4. SSH to the server and run `zpool list` to determine available ZFS pools.
5. `zpool import <pool_name>` against each of the pools you want to attach.
6. `chown -R root:root /mnt/<pool_name>` to fix the ownership of the data.
7. Update your Ansible-NAS configuration to reflect the paths of the ZFS zpools. You'll likely want to point `docker_home` at your ZFS zpools.
