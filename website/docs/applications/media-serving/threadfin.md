---
title: "Ubooquity"
---

Homepage: [https://github.com/Threadfin/Threadfin](https://github.com/Threadfin/Threadfin)

Documentation: [https://github.com/xteve-project/xTeVe-Documentation/blob/master/en/configuration.md](https://github.com/xteve-project/xTeVe-Documentation/blob/master/en/configuration.md)

Docker Image: [https://hub.docker.com/r/fyb3roptik/threadfin](https://hub.docker.com/r/fyb3roptik/threadfin)

Threadfin is a M3U proxy server for Plex, Emby, Jellyfin and any client and provider which supports the .TS and .M3U8 (HLS) streaming formats.

Threadfin emulates a SiliconDust HDHomeRun OTA tuner, which allows it to expose IPTV style channels to software, which would not normally support it. 

## Usage

Set `threadfin_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

Access the webui at [http://ansible_nas_host_or_ip:34400/web](http://ansible_nas_host_or_ip:34400/web) by default. See specific configuration section below for information on setting up external access.
