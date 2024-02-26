---
title: "Minecraft Bedrock Server"
---

Homepage: [https://www.minecraft.net/](https://www.minecraft.net/)
Docker Image: [https://github.com/itzg/docker-minecraft-bedrock-server](https://github.com/itzg/docker-minecraft-bedrock-server)

The server version of the game Minecraft (Bedrock edition), running in a container.

"Prepare for an adventure of limitless possibilities as you build, mine, battle mobs, and explore the ever-changing Minecraft landscape."

## Usage

Set `minecraft_bedrock_server_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

The Ansible NAS host or ip address should then be usable as a server within the Minecraft multiplayer game menu.

The image `itzg/minecraft-bedrock-server` has [documentation](https://github.com/itzg/docker-minecraft-bedrock-server) with further details on how to manage the Minecraft server instance.
