---
title: "I Can't Believe It's Not Valetudo"
---

Homepage: [https://icbinv.video/](https://icbinv.video/)

I can't believe it's not Valetudo (Icbinv) is a companion service for Valetudo that renders ValetudoMap map data to raster graphics.

Incoming ValetudoMap Data is received via MQTT. Rendered map images are published to MQTT and can optionally also be requested via HTTP (if enabled)

Please note that this service is only maintained on a very basic level.

## Usage

Set `icbinv_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file. Set all relevant `icbinv_*` variables to be placed in the config.json file.
