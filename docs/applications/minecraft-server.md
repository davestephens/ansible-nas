# Minecraft Server

Homepage: <https://www.minecraft.net/>

The server version of the game Minecraft, running in a container. "Prepare for an adventure of limitless possibilities as you build, mine, battle mobs, and explore the ever-changing Minecraft landscape."

## Usage

Set `minecraft_server_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

The Ansible NAS host or ip address should then be usable as a server within the Minecraft multiplayer game menu.

The image `itzg/minecraft-server` has [documentation](https://github.com/itzg/docker-minecraft-server/blob/master/README.md) with further details on how to manage the Minecraft server instance.
