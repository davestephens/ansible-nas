---
title: "Immich"
---

Homepage: [https://immich.app/](https://immich.app/)

Self-hosted photo and video backup solution directly from your mobile phone.

## Usage

Set `immich_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

Set all `immich_*` variables in `inventories/<your_inventory>/group_vars/all.yml`.

The immich web interface can be found at [http://ansible_nas_host_or_ip:2283](http://ansible_nas_host_or_ip:2283).

Refer to [https://immich.app/docs/install/post-install](https://immich.app/docs/install/post-install) for post-install steps (Registering Admin User, adding users, etc.).
