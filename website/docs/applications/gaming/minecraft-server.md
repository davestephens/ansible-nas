---
title: "Minecraft Server"
---

Homepage: [https://www.minecraft.net/](https://www.minecraft.net/)

The server version of the game Minecraft, running in a container. "Prepare for an adventure of limitless possibilities as you build, mine, battle mobs, and explore the ever-changing Minecraft landscape."

## Usage

Set `minecraft_server_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.
Optionally, set `minecraft_server_install_rcon: true` to also install RCON alongside Minecraft Server.

Set `minecraft_server_optional_env` to a list of environment variables you need for the server. You can use many `minecraft_server_*` variables alredy defined as defaults.

The Ansible NAS host or ip address should then be usable as a server within the Minecraft multiplayer game menu.

The image `itzg/minecraft-server` has [documentation](https://github.com/itzg/docker-minecraft-server/blob/master/README.md) with further details on how to manage the Minecraft server instance.
