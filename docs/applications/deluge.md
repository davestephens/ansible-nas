# Deluge

[Deluge](http://deluge-torrent.org/) is a lightweight, Free Software, cross-platform BitTorrent client.
<img align="right" width="200" height="200" src="https://avatars2.githubusercontent.com/u/6733935?v=3&s=200">
* Full Encryption
* WebUI
* Plugin System
* Much more...

## Usage

Set `deluge_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

Deluge's web interface can be found at http://ansible_nas_host_or_ip:8112

Upon first viewing you will be prompted for a password. The default is `deluge` It is recommended that you change this password in the preferences menu.

## Specific Configuration

The admin interface is available at `http://SERVER-IP:32030` with a default user/password of admin/deluge.

**This information was compiled from [https://dev.deluge-torrent.org/] & [https://github.com/linuxserver/docker-deluge/blob/master/README.md]
