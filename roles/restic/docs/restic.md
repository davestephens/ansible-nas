# Restic

Homepage: [https://restic.net/](https://restic.net/)

Restic is a modern backup program that can back up your files.

## Usage

### Basic

Set `restic_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

Set all the restic variables that you need (see `defaults/main.yml` for reference), especially the `restic_repos` and `restic_backups` variable to have your remotes added to restic config.
Consult [arillso.restic](https://github.com/arillso/ansible.restic) role and [Restic documentation](https://restic.readthedocs.io/en/stable/) for details.

### Other info

This role is mostly relying on existing `arillso.restic` role, but actually creates the backup scripts by itself, in order to add support for restic extended options (`options` under `restic_backups`) to play nicely with Rclone remotes.
