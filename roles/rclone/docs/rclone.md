# Rclone

Homepage: <https://rclone.org>

Rclone is a command-line program to manage files on cloud storage. It is a feature-rich alternative to cloud vendors' web storage interfaces. Over 40 cloud storage products support rclone including S3 object stores, business & consumer file storage services, as well as standard transfer protocols.

## Usage

Set `rclone_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

Set all the rclone variables that you need (see `defaults/main.yml` for reference), especially the `rclone_configs` variable to have your remotes added to rclone config.

The base version just installs Rclone using [stefangweichinger.ansible_rclone](https://galaxy.ansible.com/stefangweichinger/ansible_rclone) role. Optionally, you can enable `rclone_mount_enabled: true` and then an Rclone service will be created based on you config, which will automatically mount the selected `rclone_remote_to_mount` in `rclone_remote_path_to_mount` location.

Disabling both `rclone_enabled` and `rclone_mount_enabled` and rerunning the playbook will disable and mask the created Rclone service.
