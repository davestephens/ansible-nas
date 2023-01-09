---
title: "Plex"
---

Homepage: <https://www.plex.tv/>

Plex is a personal media server that also provides access to several external movie, web show, and podcast services. Allows you to stream music too. Apps for many devices, including e.g. chromecast integration.

## Usage

Set `plex_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

The Plex web interface can be found at <http://ansible_nas_host_or_ip:32400/web/index.html>.

## Specific Configuration

You'll need to log in with a plex account, (or possibly claim your server).
You'll need to set up your local file store - go to settings > Manage > Libraries, and add your libraries. These are mounted in the root directory by default.

### Firewall Settings

Note that you must adjust the firewall settings to access the server.  See [this Plex Support Article](https://support.plex.tv/articles/201543147-what-network-ports-do-i-need-to-allow-through-my-firewall/) for additional information, or [this blog post](https://linuxize.com/post/how-to-install-plex-media-server-on-ubuntu-20-04/#adjusting-the-firewall) for example commands.  
