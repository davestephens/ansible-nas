---
title: "ESPHome"
---

Homepage: [esphome.io](https://esphome.io/)

ESPHome is a system to control your ESP8266/ESP32 by simple yet powerful configuration files and control them remotely through Home Automation systems

## Usage

Set `esphome_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

You can make esphome externally available, but the program has no security so this is strongly not advised
The EspHome web interface can be found at [http://ansible_nas_host_or_ip:6052](http://ansible_nas_host_or_ip:6052).
