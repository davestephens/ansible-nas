# Mylar

Homepage: <https://github.com/evilhero/mylar>

Docker Container: <https://hub.docker.com/r/linuxserver/mylar>

An automated Comic Book downloader (cbr/cbz) for use with SABnzbd, NZBGet and torrents

## Usage

Set `mylar_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

If you want to access Mylar externally, don't forget to set `mylar_available_externally: true` in your `inventories/<your_inventory>/nas.yml` file.

The Mylar web interface can be found at <http://ansible_nas_host_or_ip:5858>.
