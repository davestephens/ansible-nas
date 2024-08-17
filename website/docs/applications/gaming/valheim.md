---
title: "Valheim Server"
---

Homepage: [https://github.com/mbround18/valheim-docker](https://github.com/mbround18/valheim-docker)

Valheim Docker powered by Odin. The Valheim dedicated gameserver manager which is designed with resiliency in mind by providing automatic updates, world backup support, and a user friendly cli interface.

## Usage

Set `valheim_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

Set `valheim_optional_env` to a list of environment variables you need for the server. You can use many `valheim_*` variables alredy defined as defaults.

Valheim server will be available at [http://ansible_nas_host_or_ip:2456](http://ansible_nas_host_or_ip:2456) address.

Refer to [Valheim-docker documentation](https://github.com/mbround18/valheim-docker) for further details on how to manage the Valheim servers.
