# Ansible NAS

![Available Applications](https://img.shields.io/github/directory-file-count/davestephens/ansible-nas/roles?label=Available%20Applications&style=flat-square)
[![CI](https://github.com/davestephens/ansible-nas/workflows/CI/badge.svg)](https://github.com/davestephens/ansible-nas/actions?query=workflow%3ACI)
[![Integration](https://github.com/davestephens/ansible-nas/workflows/Integration/badge.svg)](https://github.com/davestephens/ansible-nas/actions?query=workflow%3AIntegration)
[![Gitter chat](https://img.shields.io/gitter/room/ansible-nas/chat.svg?logo=gitter&style=flat-square)](https://gitter.im/Ansible-NAS/Chat)
[![license](https://img.shields.io/github/license/DAVFoundation/api_doc.svg?style=flat-square)](https://github.com/davestephens/ansible-nas/blob/main/LICENSE)
[![Ko-fi](https://img.shields.io/static/v1.svg?label=ko-fi&message=Buy%20Me%20A%20Coffee&color=orange&style=flat-square&logo=buy-me-a-coffee)](https://ko-fi.com/davestephens)

After getting burned by broken FreeNAS updates one too many times, I figured I could do a much better job myself using just a stock Ubuntu install, some clever Ansible config and a bunch of Docker containers.

## What Ansible-NAS Does

You can configure Ansible-NAS to set up any (or all!) of the applications listed below on your home server.

If you have a spare domain name you can configure applications to be accessible externally to your home LAN too; they'll be configured with a sensible hostname and DNS gets updated accordingly if your home IP address changes.

## Available Applications

* [Airsonic](https://airsonic.github.io/) - catalog and stream music
* [Bazarr](https://github.com/morpheus65535/bazarr) - companion to Radarr and Sonarr for downloading subtitles
* [Bitwarden](https://github.com/dani-garcia/vaultwarden) - Password Manger (Technically Vaultwarden, a lightweight implementation in Rust)
* [Booksonic](https://booksonic.org/) - The selfhosted audiobook server
* [Calibre-web](https://github.com/janeczku/calibre-web) - Provides a clean interface for browsing, reading and downloading eBooks using an existing Calibre database.
* [Code Server](https://code.visualstudio.com/) - Powerful IDE from Microsoft accessible through the browser
* [Cloud Commander](https://cloudcmd.io/) - A dual panel file manager with integrated web console and text editor
* [Cloudflare DDNS](https://hub.docker.com/r/joshuaavalon/cloudflare-ddns/) - automatically update Cloudflare with your IP address
* [CouchPotato](https://couchpota.to/) - for downloading and managing movies
* [Dashy](https://dashy.to/) - A self-hosted startpage for your server. Easy to use visual editor, status checking, widgets, themes and tons more!
* [DDNS Updater](https://github.com/qdm12/ddns-updater) - dynamic dns updater for serveral providers
* [Deluge](https://dev.deluge-torrent.org/) - A lightweight, Free Software, cross-platform BitTorrent client.
* [DokuWiki](https://www.dokuwiki.org/) - A simple to use and highly versatile Open Source wiki software that doesn't require a database.
* [Drone CI](https://drone.io) - A self-service Continuous Integration platform for busy development teams.
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
* [Gotify](https://gotify.net/) - Self-hosted server for sending push notifications
* [Grafana](https://grafana.com/) - Query, visualize, alert on, and understand your data no matter where it’s stored (via stats role).
* [Guacamole](https://guacamole.apache.org/) - Web based remote desktop gateway, supports VNC, RDP and SSH
* [healthchecks.io](https://healthchecks.io/) - Ensure your NAS is online and get notified otherwise
* [Heimdall](https://heimdall.site/) - Home server dashboard
* [Home Assistant](https://www.home-assistant.io) - Open source home automation
* [Homebridge](https://github.com/nfarina/homebridge) - Emulate the iOS HomeKit API
* [Jackett](https://github.com/Jackett/Jackett) - API Support for your favorite torrent trackers
* [Jellyfin](https://jellyfin.github.io) - The Free Software Media System
* [Joomla](https://www.joomla.org/) - Open source content management system
* [Komga](https://komga.org/) - a media server for your comics, mangas, BDs and magazines
* [Krusader](https://krusader.org/) - Twin panel file management for your desktop
* [Lidarr](https://github.com/lidarr/Lidarr) - Music collection manager for Usenet and BitTorrent users
* [Loki](https://grafana.com/oss/loki/) - Loki is a horizontally scalable, highly available, multi-tenant log aggregation system inspired by Prometheus.
* [Mealie](https://hay-kot.github.io/mealie/) - A self-hosted recipe manager and meal planner
* [Minecraft Server](https://www.minecraft.net/) - Server edition of the popular building and exploring game
* [MiniDLNA](https://sourceforge.net/projects/minidlna/) - simple media server which is fully compliant with DLNA/UPnP-AV clients
* [Miniflux](https://miniflux.app/) - An RSS news reader
* [Minio](https://min.io/) - MinIO is a high-performance, S3 compatible object store
* [Mosquitto](https://mosquitto.org) - An open source MQTT broker
* [Mumble](https://www.mumble.info) - Open source, low latency, high quality voice chat
* [Mylar](https://github.com/evilhero/mylar) - An automated Comic Book downloader (cbr/cbz) for use with SABnzbd, NZBGet and torrents
* [MyMediaForAlexa](https://www.mymediaalexa.com/) - Lets you stream your music collection to your alexa device
* [n8n](https://n8n.io/) - Nodemation, a node based workflow and automation service like IFTTT.
* [navidrome](https://www.navidrome.org/) - Modern Music Server and Streamer compatible with Subsonic/Airsonic
* [netboot.xyz](https://netboot.xyz/) - a PXE boot server
* [Netdata](https://my-netdata.io/) - An extremely comprehensive system monitoring solution
* [Nextcloud](https://nextcloud.com/) - A self-hosted Dropbox alternative
* [Nomad](https://www.nomadproject.io/) - A simple and flexible scheduler and software orchestrator
* [NZBget](https://nzbget.net/) - The most efficient usenet downloader
* [Octoprint](https://octoprint.org/) - Control and monitor your 3D printer
* [Ombi](https://ombi.io/) - web application that automatically gives your users the ability to request content
* [openHAB](https://www.openhab.org/) - A vendor and technology agnostic open source automation software for your home
* [Organizr](https://organizr.app/) - ORGANIZR aims to be your one stop shop for your Servers Frontend.
* [overseerr](https://docs.overseerr.dev) - open source software application for managing requests for your media library
* [Paperless_ng](https://github.com/jonaswinkler/paperless-ng) - Scan, index and archive all your physical documents
* [Piwigo](https://piwigo.org/) - Photo Gallery Software
* [Plex](https://www.plex.tv/) - Plex Media Server
* [Portainer](https://portainer.io/) - for managing Docker and running custom images
* [Prometheus](https://prometheus.io/) - Time series database and monitoring system (via stats role).
* [Promtail](https://grafana.com/docs/loki/latest/clients/promtail/) - Promtail is an agent which ships the contents of local logs to a private Grafana Loki instance
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
* Stats - Monitor and visualise metrics about your NAS and internet connection using Grafana, Prometheus, Telegraf and more.
* [Syncthing](https://syncthing.net/) - sync directories with another device
* [Tautulli](http://tautulli.com/) - Monitor Your Plex Media Server
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
* [Wireshark](https://www.wireshark.org/) - the world’s foremost and widely-used network protocol analyzer.
* [Woodpecker-CI](https://woodpecker-ci.org) - a simple CI engine with great extensibility, forked from Drone.
* [YouTubeDL-Material](https://github.com/Tzahi12345/YoutubeDL-Material) - Self-hosted YouTube downloader built on Material Design
* [ZNC](https://wiki.znc.in/ZNC) - IRC bouncer to stay connected to favourite IRC networks and channels

## Preconfigured Application Stacks

Ansible-NAS application [stacks](https://ansible-nas.io/docs/category/stacks/) are a number of applications deployed together and preconfigured to perform a common goal.

* [Logging](https://ansible-nas.io/docs/applications/stacks/logging/) - application logging capture and search service based on Grafana Loki.

## What This Could Do

Ansible-NAS can run anything that's in a Docker image, which is why Portainer is included. A NAS configuration is a pretty personal thing based on what you download, what media you view, how many photos you take...so it's difficult to please everyone.

That said, if specific functionality you want isn't included and you think others could benefit, add it and raise a PR!

## What This Doesn't Do

Ansible NAS doesn't set up your disk partitions, primarily because getting it wrong can be incredibly destructive. That aside, configuring partitions is usually a one-time (or very infrequent) event, so there's not much to be gained by automating it. Check out the [docs](https://ansible-nas.io/docs/) for recommended setups.

## Installation

See [Installation](https://ansible-nas.io/docs/getting-started/installation/).

## Documentation

You can read the docs [here](https://ansible-nas.io). PRs for more documentation always welcome!

## Migrating from FreeNAS

Read the [migrating from FreeNAS](https://ansible-nas.io/docs/further-configuration/migrating-from-freenas/) docs.

## Requirements

* Ansible NAS targets the latest Ubuntu LTS release, which is currently Ubuntu Server 22.04 LTS.
* You can run Ansible-NAS on whatever hardware you like, read the docs for more info. I use an HP Microserver.

## Getting Help

Getting help is easy! You can:

* Read the [docs](https://ansible-nas.io/docs/)
* Start a [discussion](https://github.com/davestephens/ansible-nas/discussions)
* Raise an [issue](https://github.com/davestephens/ansible-nas/issues) if you think you've found a bug
* Chat on [Gitter](https://gitter.im/Ansible-NAS/Chat)

## Contributing

Contributions are always welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) first.

## Support

If you've enjoyed Ansible-NAS as much as I do working on it, please consider [buying me a coffee](https://ko-fi.com/davestephens) :coffee:

## Thanks

The awesome dudes at [JetBrains](https://www.jetbrains.com/?from=Ansible-NAS) for supplying core contributors with JetBrains Open Source licenses!

All of the awesome contributors to Ansible-NAS!
