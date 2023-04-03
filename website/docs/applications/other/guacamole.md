---
title: "Guacamole"
---

Homepage: <https://guacamole.apache.org/>

Apache Guacamole is a clientless remote desktop gateway. It supports standard protocols like VNC, RDP, and SSH.

## Usage

Set `guacamole_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

## Specific Configuration

The default username and password is `guacadmin`. Change it!

## What to connect to?

You can run a virtual desktop from your Ansible-NAS box, check out the [Virtual Desktop docs](virtual_desktop.md).
