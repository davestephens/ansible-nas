---
title: "Virtual Desktop"
---

It's possible to run a cut down desktop within a Docker container. We use [RattyDAVE's custom Ubuntu Mate image](https://github.com/RattyDAVE/docker-ubuntu-xrdp-mate-custom).

## Usage

Set `virtual_desktop_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

## Specific Configuration

By default `ansible_nas_user` will be granted access with a password of `topsecret` with sudo rights. To change or add additional users override `vd_users` in your `nas.yml`:

```yaml
vd_users:
  - username: "{{ ansible_nas_user }}"
    password: "topsecret"
    sudo: "Y"
  - username: "larrylaffer"
    password: "kensentme"
    sudo: "Y"
```

## Mounts

`samba_shares_root` is mounted to `/samba`.
`docker_home` is mounted to `/docker`.

## Remote Access

It's possible to access your virtual desktop through a web browser! Check out [Guacamole](guacamole.md).
