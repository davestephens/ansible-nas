# Rclone

Homepage: [https://rclone.org](https://rclone.org)

Rclone is a command-line program to manage files on cloud storage. It is a feature-rich alternative to cloud vendors' web storage interfaces. Over 40 cloud storage products support rclone including S3 object stores, business & consumer file storage services, as well as standard transfer protocols.

## Usage

### Basic

Set `rclone_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

Set all the rclone variables that you need (see `defaults/main.yml` for reference), especially the `rclone_configs` variable to have your remotes added to rclone config.

The base version just installs Rclone using [stefangweichinger.ansible_rclone](https://galaxy.ansible.com/stefangweichinger/ansible_rclone) role.

### Rclone mount

Optionally, you can enable `rclone_mount_enabled: true` and then an Rclone service will be created based on you config, which will automatically mount the selected `rclone_remote_to_mount` in `rclone_remote_path_to_mount` location.

### Cloud upload

Optionally, if Rclone mount is enabled and mergerfs is enabled, you can enable `rclone_cloud_upload_enabled: true` and then a script will be created and added as a cron job, that will periodically execute `rclone move` command to move files from your `mergerfs_rclone_local_mount` to your `rclone_remote_to_mount`.

* Only files older than `rclone_cloud_upload_min_age` will be moved.
* Files matching `rclone_cloud_upload_excludes` will be excluded from moving to remote

This is useful when you indeed use mergerfs to merge together some local directory (where you add new stuff) and Rclone remote (backup location). This way your applications can always see full content, but in the background a script will move files from local storage to remote storage, transparently to your applications.

### Disabling

Disabling both `rclone_enabled` and `rclone_mount_enabled` and rerunning the playbook will disable and mask the created Rclone service.
Disabling `rclone_cloud_upload_enbled` will remove the cron job and script files.
