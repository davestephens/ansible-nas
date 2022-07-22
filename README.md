# Ansible NAS

[![CI](https://github.com/davestephens/ansible-nas/workflows/CI/badge.svg)](https://github.com/davestephens/ansible-nas/actions?query=workflow%3ACI) [![Gitter chat](https://img.shields.io/gitter/room/ansible-nas/chat.svg?logo=gitter&style=flat-square)](https://gitter.im/Ansible-NAS/Chat) [![license](https://img.shields.io/github/license/DAVFoundation/api_doc.svg?style=flat-square)](https://github.com/davestephens/ansible-nas/blob/master/LICENSE) [![Ko-fi](https://img.shields.io/static/v1.svg?label=ko-fi&message=Buy%20Me%20A%20Coffee&color=orange&style=flat-square&logo=buy-me-a-coffee)](https://ko-fi.com/davestephens)

After getting burned by broken FreeNAS updates one too many times, I figured I
could do a much better job myself using just a stock Ubuntu install, some clever
Ansible config and a bunch of Docker containers.

## What Ansible-NAS Does

You can configure Ansible-NAS to set up any (or all!) of the applications listed below on your home server.

If you have a spare domain name you can configure applications to be accessible externally to your home LAN too; they'll be configured with a sensible hostname and DNS gets updated accordingly if your home IP address changes.

### Available Applications

* [Airsonic](https://airsonic.github.io/) - catalog and stream music
* [Bazarr](https://github.com/morpheus65535/bazarr) - companion to Radarr and Sonarr for downloading subtitles
* [Bitwarden_rs](https://github.com/dani-garcia/bitwarden_rs) - Self-Hosting port of password manager
* [Booksonic](https://booksonic.org/) - The selfhosted audiobook server
* [Calibre-web](https://github.com/janeczku/calibre-web) - Provides a clean interface for browsing, reading and downloading eBooks using an existing Calibre database.
* [Cloud Commander](https://cloudcmd.io/) - A dual panel file manager with integrated web console and text editor
* [Cloudflared (Argo tunnel)](https://github.com/cloudflare/cloudflared) - Bypass Carrier Grade NAT (CGNAT) restrictions by serving your services through a direct Cloudflare connection
* [Cloudflare DDNS](https://hub.docker.com/r/joshuaavalon/cloudflare-ddns/) - automatically update Cloudflare with your IP address
* [CouchPotato](https://couchpota.to/) - for downloading and managing movies
* [Deluge](https://dev.deluge-torrent.org/) - A lightweight, Free Software, cross-platform BitTorrent client.
* [Dashy](https://dashy.to/) - A self-hosted startpage for your server. Easy to use visual editor, status checking, widgets, themes and tons more!
* [DokuWiki](https://www.dokuwiki.org/) - A simple to use and highly versatile Open Source wiki software that doesn't require a database.
* [Duplicacy](https://duplicacy.com/) - A web UI for the Duplicacy cloud backup program, which provides lock-free deduplication backups to multiple providers
* [Duplicati](https://www.duplicati.com/) - for backing up your stuff
* [Emby](https://emby.media/) - Media streaming and management
* [ESPHome](https://esphome.io/) - ESP8266/ESP32 programming and management for home automation
* [Firefly III](https://firefly-iii.org/) - Free and open source personal finance manager
* [Fresh RSS](https://freshrss.org/) - Self-hosted RSS feed aggregator like Leed or Kriss Feed
* [get_iplayer](https://github.com/get-iplayer/get_iplayer) - download programmes from BBC iplayer
* [Gitea](https://gitea.io/en-us/) - Simple self-hosted GitHub clone
* [GitLab](https://about.gitlab.com/features/) - Self-hosted GitHub clone of the highest order
* [Glances](https://nicolargo.github.io/glances/) - for seeing the state of your system via a web browser
* [Gotify](https://gotify.net/) Self-hosted server for sending push notifications
* [Grafana](https://github.com/grafana/grafana) - Dashboarding tool
* [Guacamole](https://guacamole.apache.org/) - Web based remote desktop gateway, supports VNC, RDP and SSH
* [Heimdall](https://heimdall.site/) - Home server dashboard
* [Home Assistant](https://www.home-assistant.io) - Open source home automation
* [InfluxDB](https://github.com/influxdata/influxdb) - Time series database used for stats collection
* [Jackett](https://github.com/Jackett/Jackett) - API Support for your favorite torrent trackers
* [Jellyfin](https://jellyfin.github.io) - The Free Software Media System
* [Joomla](https://www.joomla.org/) - Open source content management system
* [Komga](https://komga.org/) - a media server for your comics, mangas, BDs and magazines
* [Krusader](https://krusader.org/) - Twin panel file management for your desktop
* [Lidarr](https://github.com/lidarr/Lidarr) - Music collection manager for Usenet and BitTorrent users
* [Mealie](https://hay-kot.github.io/mealie/) - A self-hosted recipe manager and meal planner
* [Minecraft Server](https://www.minecraft.net/) - Server edition of the popular building and exploring game
* [MiniDLNA](https://sourceforge.net/projects/minidlna/) - simple media server which is fully compliant with DLNA/UPnP-AV clients
* [Miniflux](https://miniflux.app/) - An RSS news reader
* [Mosquitto](https://mosquitto.org) - An open source MQTT broker
* [Mylar](https://github.com/evilhero/mylar) - An automated Comic Book downloader (cbr/cbz) for use with SABnzbd, NZBGet and torrents
* [MyMediaForAlexa](https://www.mymediaalexa.com/) - Lets you stream your music collection to your alexa device
* [n8n](https://n8n.io/) - Nodemation, a node based workflow and automation service like IFTTT.
* [navidrome](https://www.navidrome.org/) - Modern Music Server and Streamer compatible with Subsonic/Airsonic
* [netboot.xyz](https://netboot.xyz/) - a PXE boot server
* [Netdata](https://my-netdata.io/) - An extremely comprehensive system monitoring solution
* [Nextcloud](https://nextcloud.com/) - A self-hosted Dropbox alternative
* [NZBget](https://nzbget.net/) - The most efficient usenet downloader
* [Ombi](https://ombi.io/) - web application that automatically gives your users the ability to request content
* [Organizr](https://organizr.app/) - ORGANIZR aims to be your one stop shop for your Servers Frontend.
* [openHAB](https://www.openhab.org/) - A vendor and technology agnostic open source automation software for your home
* [overseerr](https://docs.overseerr.dev) - open source software application for managing requests for your media library
* [Paperless_ng](https://github.com/jonaswinkler/paperless-ng) - Scan, index and archive all your physical documents
* [Piwigo](https://piwigo.org/) - Photo Gallery Software
* [Plex](https://www.plex.tv/) - Plex Media Server
* [Portainer](https://portainer.io/) - for managing Docker and running custom images
* [Prowlarr](https://github.com/Prowlarr/Prowlarr) - Indexer aggregator for Sonarr, Radarr, Lidarr, etc.
* [pyLoad](https://pyload.net/) - A download manager with a friendly web-interface
* [PyTivo](http://pytivo.org) - An HMO and GoBack server for TiVos.
* [Radarr](https://radarr.video/) - for organising and downloading movies
* [Route53 DDNS](https://crazymax.dev/ddns-route53/) - Automatically update AWS Route53 with your IP address
* [RSS-Bridge](https://rss-bridge.github.io/rss-bridge/) - The RSS feed for websites missing it
* [Sabnzbd](https://sabnzbd.org/) - A powerful usenet downloader that FreeNAS provides
* [Sickchill](https://sickchill.github.io/) - for managing TV episodes
* [Sonarr](https://sonarr.tv/) - for downloading and managing TV episodes
* [Speedtest-Tracker](https://github.com/henrywhitaker3/Speedtest-Tracker) - Continuously track your internet speed
* [Syncthing](https://syncthing.net/) - sync directories with another device
* [Tautulli](http://tautulli.com/) - Monitor Your Plex Media Server
* [Telegraf](https://github.com/influxdata/telegraf) - Metrics collection agent
* [The Lounge](https://thelounge.chat) - Web based always-on IRC client
* [TiddlyWiki](https://tiddlywiki.com) - A unique non-linear notebook/wiki for capturing, organizing, and sharing complex information
* [TimeMachine](https://github.com/awlx/samba-timemachine) - Samba-based mac backup server
* [Traefik](https://traefik.io/) - Web proxy and SSL certificate manager
* [Transmission](https://transmissionbt.com/) - BitTorrent client (with OpenVPN if you have a supported VPN provider)
* [Ubooquity](http://vaemendis.net/ubooquity/) - Book and comic server
* [uTorrent](https://www.utorrent.com/) - The best torrent downloading app for beginners
* [Virtual Desktop](https://github.com/RattyDAVE/docker-ubuntu-xrdp-mate-custom) - A virtual desktop running on your NAS.
* [Wallabag](https://wallabag.org/) - Save and classify articles. Read them later.
* [Watchtower](https://github.com/v2tec/watchtower) - Monitor your Docker containers and update them if a new version is available
* [YouTubeDL-Material](https://github.com/Tzahi12345/YoutubeDL-Material) - Self-hosted YouTube downloader built on Material Design
* [ZNC](https://wiki.znc.in/ZNC) - IRC bouncer to stay connected to favourite IRC networks and channels

## What This Could Do

Ansible-NAS can run anything that's in a Docker image, which is why Portainer is
included. A NAS configuration is a pretty personal thing based on what you
download, what media you view, how many photos you take...so it's difficult to
please everyone.

That said, if specific functionality you want isn't included and you think
others could benefit, add it and raise a PR!

## What This Doesn't Do

Ansible NAS doesn't set up your disk partitions, primarily because getting it wrong can be incredibly destructive.
That aside, configuring partitions is usually a one-time (or very infrequent) event, so there's not much to be
gained by automating it. Check out the [docs](https://davestephens.github.io/ansible-nas) for recommended setups.

## Installation

See [Installation](https://davestephens.github.io/ansible-nas/installation/).

## Upgrading

**The way Ansible-NAS configuration is structured has changed!** See [Upgrading](https://davestephens.github.io/ansible-nas/upgrading/) for more information. See the **Getting Help** section if you get stuck.

## Documentation

You can read the docs [here](https://davestephens.github.io/ansible-nas). PRs
for more documentation always welcome!

## Migrating from FreeNAS

Assuming that your Ubuntu system disk is separate from your storage (it should be!):

1. Ensure you have a working backup of your data.
2. Check that the working backup you think you have actually works.
3. SSH to the server and run `zpool list` to determine available ZFS pools.
4. `zpool import <pool_name>` against each of the pools you want to attach.
5. `chown -R root:root /mnt/<pool_name>` to fix the ownership of the data.
6. Follow the Quick Start instructions above.

## Requirements

* Ansible NAS targets the latest Ubuntu LTS release, which is currently Ubuntu
  Server 20.04 LTS.
* You can run Ansible-NAS on whatever you like, read the docs for more info. I
  use an HP Microserver.

## Getting Help

Getting help is easy! You can:

* Read the [docs](https://davestephens.github.io/ansible-nas)
* Start a [discussion](https://github.com/davestephens/ansible-nas/discussions)
* Raise an [issue](https://github.com/davestephens/ansible-nas/issues) if you think you've found a bug
* Chat on [Gitter](https://gitter.im/Ansible-NAS/Chat)

## Contributing

Contributions are always welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) first.

## Support

If you've enjoyed Ansible-NAS as much as I do working on it, please consider [buying me a coffee](https://ko-fi.com/davestephens) :coffee:

## Thanks

The awesome dudes at [JetBrains](https://www.jetbrains.com/?from=Ansible-NAS) for supplying core contributors with JetBrains Open Source licenses!

All of the awesome contributors to Ansible-NAS: ![All of the awesome contributors to Ansible-NAS](https://contrib.rocks/image?repo=davestephens/ansible-nas)
