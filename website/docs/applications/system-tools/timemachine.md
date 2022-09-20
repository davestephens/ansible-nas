---
title: "Time Machine"
---

Apple docs: <https://support.apple.com/en-us/HT201250>

Docker image: <https://github.com/awlx/samba-timemachine>

Time Machine is an application that allows you to backup files from your Mac.

Older versions of Time Machine relied on AFP (netatalk) shares. Apple has deprecated Time Machine over AFP in favor of SMB (Samba), and current versions of Ansible-NAS use a Samba-based Time Machine share. If you are upgrading from an older version of Ansible-NAS, you will need to re-select your Time Machine back up disk by opening Time Machine Preferences and Selecting your backup disk via the "Select Disk..." option. Your Mac will find the old backups on the share and use them.

## Usage

Set `timemachine_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

Enabling Time Machine will result in the installation of Avahi on the NAS system (if it is not already installed) and a Time Machine service configuration file for Avahi will be added to the system (at `/etc/avahi/services/timemachine.service`) to allow for Time Machine discovery by Macs on the local network. Avahi runs on the system, rather than in a container, as the same Avahi instance can be used to announce any number of services.

The Samba server included in the Time Machine docker container logs to `STDOUT` and is compatible with [Docker's built-in logging infrastructure.](https://docs.docker.com/config/containers/logging/)

## Specific Configuration

- `timemachine_data_directory`: The absolute path on Ansible NAS where the backup files will be stored
- `timemachine_volume_size_limit`: The maximum amount of space Time Machine can use for the backups in units of MiB.  Set it to 0 for no limit.
- `timemachine_share_name`: The name of the share as it will appear in the Time Machine application. Default is 'Data'
- `timemachine_password`: The password used to access the share.  Default is 'timemachine'

## Upgrading from AFP to SMB-based Time Machine

Older versions of Time Machine included in Ansible-NAS relied on AFP (netatalk) shares. Apple has deprecated Time Machine over AFP in favor of SMB (Samba), and current versions of Ansible-NAS use a Samba-based Time Machine share. If you are upgrading from an older version of Ansible-NAS with the AFP-based Time Machine, you will need to re-select your Time Machine back up disk by opening Time Machine Preferences and Selecting your backup disk via the "Select Disk..." option. Your Mac will find the old backups on the share and use them.
