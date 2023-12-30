---
title: "Deluge"
---

Homepage: [http://deluge-torrent.org/](http://deluge-torrent.org/)

Deluge is a lightweight, Free Software, cross-platform BitTorrent client.

* Full Encryption
* WebUI
* Plugin System
* Much more...

## Usage

Set `deluge_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

Deluge's web interface can be found at [http://ansible_nas_host_or_ip:8112](http://ansible_nas_host_or_ip:8112)

Upon first viewing you will be prompted for a password. The default is `deluge` It is recommended that you change this password in the preferences menu.

**For more info visit: [https://dev.deluge-torrent.org/](https://dev.deluge-torrent.org/) & [https://github.com/linuxserver/docker-deluge/blob/master/README.md](https://github.com/linuxserver/docker-deluge/blob/master/README.md)
