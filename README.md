# Ansible NAS

[![CI](https://github.com/anarion80/ansible-nas/workflows/CI/badge.svg)](https://github.com/anarion80/ansible-nas/actions?query=workflow%3ACI)
[![Integration](https://github.com/anarion80/ansible-nas/workflows/Integration/badge.svg)](https://github.com/anarion80/ansible-nas/actions?query=workflow%3AIntegration)
[![Gitter chat](https://img.shields.io/gitter/room/ansible-nas/chat.svg?logo=gitter&style=flat-square)](https://gitter.im/Ansible-NAS/Chat)
[![license](https://img.shields.io/github/license/DAVFoundation/api_doc.svg?style=flat-square)](https://github.com/anarion80/ansible-nas/blob/master/LICENSE)
[![Ko-fi](https://img.shields.io/static/v1.svg?label=ko-fi&message=Buy%20Me%20A%20Coffee&color=orange&style=flat-square&logo=buy-me-a-coffee)](https://ko-fi.com/davestephens)

After getting burned by broken FreeNAS updates one too many times, I figured I could do a much better job myself using just a stock Ubuntu install, some clever Ansible config and a bunch of Docker containers.

## What Ansible-NAS Does

You can configure Ansible-NAS to set up any (or all!) of the applications listed below on your home server.

If you have a spare domain name you can configure applications to be accessible externally to your home LAN too; they'll be configured with a sensible hostname and DNS gets updated accordingly if your home IP address changes.

## Available Applications ![Roles](https://img.shields.io/github/directory-file-count/anarion80/ansible-nas/roles?label=Roles)

* [Airsonic](https://airsonic.github.io/) - catalog and stream music
* [Authelia](https://www.authelia.com/) - The Single Sign-On Multi-Factor portal for web apps
* [Authentik](https://goauthentik.io/) - an open-source Identity Provider focused on flexibility and versatility
* [Barcode Buddy](https://github.com/Forceu/barcodebuddy/) - Barcode system for Grocy
* [Bazarr](https://github.com/morpheus65535/bazarr) - companion to Radarr and Sonarr for downloading subtitles
* [Beets](https://beets.io/) - media library management system for obsessive music geeks
* [Booksonic](https://booksonic.org/) - The selfhosted audiobook server
* [Calibre-web](https://github.com/janeczku/calibre-web) - Provides a clean interface for browsing, reading and downloading eBooks using an existing Calibre database.
* [Changedetection.io](https://github.com/dgtlmoon/changedetection.io) - Free open source website change detection, monitor and notification service
* [Chatpad](https://chatpad.ai/) - Not just another ChatGPT user-interface!
* [Claper](https://claper.co/) - The ultimate tool to interact with your audience
* [Code Server](https://code.visualstudio.com/) - Powerful IDE from Microsoft accessible through the browser
* [Cloud Commander](https://cloudcmd.io/) - A dual panel file manager with integrated web console and text editor
* [Cloudflare DDNS](https://hub.docker.com/r/joshuaavalon/cloudflare-ddns/) - automatically update Cloudflare with your IP address
* [CouchPotato](https://couchpota.to/) - for downloading and managing movies
* [Dashy](https://dashy.to/) - A self-hosted startpage for your server. Easy to use visual editor, status checking, widgets, themes and tons more!
* [Deluge](https://dev.deluge-torrent.org/) - A lightweight, Free Software, cross-platform BitTorrent client.
* [DokuWiki](https://www.dokuwiki.org/) - A simple to use and highly versatile Open Source wiki software that doesn't require a database.
* [Drone CI](https://drone.io) - A self-service Continuous Integration platform for busy development teams.
* [Duplicacy](https://duplicacy.com/) - A web UI for the Duplicacy cloud backup program, which provides lock-free deduplication backups to multiple providers
* [Duplicati](https://www.duplicati.com/) - for backing up your stuff
* [Emby](https://emby.media/) - Media streaming and management
* [ESPHome](https://esphome.io/) - ESP8266/ESP32 programming and management for home automation
* [Excalidraw](https://excalidraw.com/) - Virtual whiteboard for sketching hand-drawn like diagrams
* [Firefly III](https://firefly-iii.org/) - Free and open source personal finance manager
* [Flame](https://github.com/pawelmalak/flame/) - Flarum is a delightfully simple discussion platform for your website
* [Flarum](https://flarum.org/) - Self-hosted startpage for your server
* [Flatnotes](https://flatnotes.io/) - Self-hosted, database-less note taking web app
* [Fresh RSS](https://freshrss.org/) - Self-hosted RSS feed aggregator like Leed or Kriss Feed
* [Frigate](https://frigate.video/) - Frigate is an open source NVR built around real-time AI object detection
* [Gaps](https://github.com/JasonHHouse/gaps) - Find the missing movies in your Plex Server
* [get_iplayer](https://github.com/get-iplayer/get_iplayer) - download programmes from BBC iplayer
* [Ghost](https://ghost.org/) - Turn your audience into a business. Publishing, memberships, subscriptions and newsletters
* [Gitea](https://gitea.io/en-us/) - Simple self-hosted GitHub clone
* [GitLab](https://about.gitlab.com/features/) - Self-hosted GitHub clone of the highest order
* [Glances](https://nicolargo.github.io/glances/) - for seeing the state of your system via a web browser
* [Gotify](https://gotify.net/) - Self-hosted server for sending push notifications
* [Grafana](https://grafana.com/) - Query, visualize, alert on, and understand your data no matter where it’s stored (via stats role).
* [Graylog](https://www.graylog.org/) - Free and open source log management
* [Grocy](https://grocy.info/) - web-based self-hosted groceries & household management solution for your home
* [Guacamole](https://guacamole.apache.org/) - Web based remote desktop gateway, supports VNC, RDP and SSH
* [healthchecks.io](https://healthchecks.io/) - Ensure your NAS is online and get notified otherwise
* [Heimdall](https://heimdall.site/) - Home server dashboard
* [Home Assistant](https://www.home-assistant.io) - Open source home automation
* [Homebridge](https://github.com/nfarina/homebridge) - Emulate the iOS HomeKit API
* [Huginn](https://github.com/huginn/huginn) - Create agents that monitor and act on your behalf. Your agents are standing by!
* [Huntly](https://github.com/lcomplete/huntly) - Self-hosted information management tool
* [Immich](https://immich.app/) - Self-hosted photo and video backup solution directly from your mobile phone.
* [Influxdb](https://github.com/influxdata/influxdb) - Time series database used for stats collection
* [Jackett](https://github.com/Jackett/Jackett) - API Support for your favorite torrent trackers
* [Jellyfin](https://jellyfin.github.io) - The Free Software Media System
* [Joomla](https://www.joomla.org/) - Open source content management system
* [Kavita](https://www.kavitareader.com/) - Kavita is a rocket fueled self-hosted digital library which supports a vast array of file formats
* [Keycloak](https://www.keycloak.org/) - Open Source Identity and Access Management
* [Komga](https://komga.org/) - a media server for your comics, mangas, BDs and magazines
* [Krusader](https://krusader.org/) - Twin panel file management for your desktop
* [LazyLibrarian](https://lazylibrarian.gitlab.io/) - LazyLibrarian is a program to follow authors and grab metadata for all your digital reading needs
* [Libreddit](https://github.com/libreddit/libreddit) - Private front-end for Reddit
* [Librephotos](https://github.com/LibrePhotos/librephotos) - self-hosted open source photo
* [Librespeed](https://github.com/librespeed/speedtest) - Self-hosted Speedtest for HTML5 and more
* [Lidarr](https://github.com/lidarr/Lidarr) - Music collection manager for Usenet and BitTorrent users
* [Listmonk](https://listmonk.app/) - High performance, self-hosted, newsletter and mailing list manager
* [Littlelink](https://github.com/techno-tim/littlelink-server) - Self-hosted alternative to linktree
* [Loki](https://grafana.com/oss/loki/) - multi-tenant log aggregation system (via stats role).
* [Mattermost](https://mattermost.com/) - open source platform for secure collaboration across the entire software development lifecycle
* [MariaDB](https://mariadb.org/) - one of the most popular open source relational databases
* [Mealie](https://hay-kot.github.io/mealie/) - A self-hosted recipe manager and meal planner
* [Memos](https://usememos.com/) - An open-source memo hub with knowledge management and social networking
* [Minecraft Server](https://www.minecraft.net/) - Server edition of the popular building and exploring game
* [Minetest Server](https://www.minetest.net/) - An open source voxel game engine server
* [MiniDLNA](https://sourceforge.net/projects/minidlna/) - simple media server which is fully compliant with DLNA/UPnP-AV clients
* [Miniflux](https://miniflux.app/) - An RSS news reader
* [Mosquitto](https://mosquitto.org) - An open source MQTT broker
* [Moviematch](https://github.com/LukeChannings/moviematch) - MovieMatch for Plex
* [Mylar](https://github.com/evilhero/mylar) - An automated Comic Book downloader (cbr/cbz) for use with SABnzbd, NZBGet and torrents
* [MyMediaForAlexa](https://www.mymediaalexa.com/) - Lets you stream your music collection to your alexa device
* [MySql](https://www.mysql.com/) - The world's most popular open source database
* [n8n](https://n8n.io/) - Nodemation, a node based workflow and automation service like IFTTT.
* [navidrome](https://www.navidrome.org/) - Modern Music Server and Streamer compatible with Subsonic/Airsonic
* [netboot.xyz](https://netboot.xyz/) - a PXE boot server
* [Netbox](https://netbox.dev/) - The premiere source of truth powering network automation
* [Netdata](https://my-netdata.io/) - An extremely comprehensive system monitoring solution
* [Nextcloud](https://nextcloud.com/) - A self-hosted Dropbox alternative
* [Node-RED](https://nodered.org/) - A programming tool for wiring together hardware devices, APIs and online services
* [Nomad](https://www.nomadproject.io/) - A simple and flexible scheduler and software orchestrator
* [NZBget](https://nzbget.net/) - The most efficient usenet downloader
* [Nzbhydra2](https://github.com/theotherp/nzbhydra2) - Usenet meta search
* [Octoprint](https://octoprint.org/) - Control and monitor your 3D printer
* [Ombi](https://ombi.io/) - web application that automatically gives your users the ability to request content
* [openHAB](https://www.openhab.org/) - A vendor and technology agnostic open source automation software for your home
* [openLDAP](https://www.openldap.org/) - An open source implementation of the Lightweight Directory Access Protocol
* [Organizr](https://organizr.app/) - ORGANIZR aims to be your one stop shop for your Servers Frontend.
* [overseerr](https://docs.overseerr.dev) - open source software application for managing requests for your media library
* [Paperless_ng](https://github.com/jonaswinkler/paperless-ng) - Scan, index and archive all your physical documents
* [Photofield](https://github.com/SmilyOrg/photofield) - Experimental fast photo viewer
* [Photoprism](https://www.photoprism.app/) - An AI-Powered Photos App for the Decentralized Web
* [PhotoStructure](https://photostructure.com/) - Your new home for all your photos & videos
* [PhpMyAdmin](https://www.phpmyadmin.net/) - a tool intended to handle the administration of MySQL over the Web
* [Piwigo](https://piwigo.org/) - Photo Gallery Software
* [Plex](https://www.plex.tv/) - Plex Media Server
  * [Plex Autoscan](https://github.com/Cloudbox/autoscan) - automatic Plex library updates
  * [Plex Meta Manager](https://metamanager.wiki) - Python script to update metadata information for items in plex
* [Portainer](https://portainer.io/) - for managing Docker and running custom images
* [Prometheus](https://prometheus.io/) - Time series database and monitoring system (via stats role).
* [Prowlarr](https://github.com/Prowlarr/Prowlarr) - Indexer aggregator for Sonarr, Radarr, Lidarr, etc.
* [pyLoad](https://pyload.net/) - A download manager with a friendly web-interface
* [PyTivo](http://pytivo.org) - An HMO and GoBack server for TiVos.
* [Radarr](https://radarr.video/) - for organising and downloading movies
* [Releasebell](https://github.com/anarion80/releasebell) - Starred GitHub repositories notifications
* [Restic](https://restic.net/) - A modern backup program
* [Route53 DDNS](https://crazymax.dev/ddns-route53/) - Automatically update AWS Route53 with your IP address
* [RSS-Bridge](https://rss-bridge.github.io/rss-bridge/) - The RSS feed for websites missing it
* [Sabnzbd](https://sabnzbd.org/) - A powerful usenet downloader that FreeNAS provides
* [Seafile](https://www.seafile.com/en/home/) - High performance file syncing and sharing
* [SearxNG](https://github.com/searxng/searxng) - Free internet metasearch engine
* [Shaarli](https://github.com/shaarli/Shaarli) - Personal, minimalist, super-fast, database free, bookmarking service
* [Sickchill](https://sickchill.github.io/) - for managing TV episodes
* [Snipe-IT](https://snipeitapp.com/) - A free open source IT asset/license management system
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
* [Trilium](https://github.com/zadam/trilium) - Hierarchical note taking application with focus on building large personal knowledge bases
* [Tt-rss](https://tt-rss.org/) - free and open source web-based news feed (RSS/Atom) reader and aggregator
* [Ubooquity](http://vaemendis.net/ubooquity/) - Book and comic server
* [uTorrent](https://www.utorrent.com/) - The best torrent downloading app for beginners
* [Vaultwarden](https://github.com/dani-garcia/vaultwarden) - Self-Hosting port of password manager
* [Virtual Desktop](https://github.com/RattyDAVE/docker-ubuntu-xrdp-mate-custom) - A virtual desktop running on your NAS.
* [Wallabag](https://wallabag.org/) - Save and classify articles. Read them later.
* [Watchtower](https://github.com/v2tec/watchtower) - Monitor your Docker containers and update them if a new version is available
* [Webtrees](https://www.webtrees.net/index.php/en/) - On-line collaborative genealogy application
* [Wger](https://wger.de) - Free, open source web application that manages your exercises, workouts and nutrition
* [Whats-Up-Docker](https://github.com/fmartinou/whats-up-docker) - Docker container update notifier
* [Whoogle](https://github.com/benbusby/whoogle-search) - A self-hosted, ad-free, privacy-respecting metasearch engine
* [Wireshark](https://www.wireshark.org/) - the world’s foremost and widely-used network protocol analyzer.
* [Wishthis](https://github.com/grandeljay/wishthis) - simple, intuitive and modern wishlist platform
* [Woodpecker-CI](https://woodpecker-ci.org) - a simple CI engine with great extensibility, forked from Drone.
* [YouTubeDL-Material](https://github.com/Tzahi12345/YoutubeDL-Material) - Self-hosted YouTube downloader built on Material Design
* [ZNC](https://wiki.znc.in/ZNC) - IRC bouncer to stay connected to favourite IRC networks and channels

## What This Could Do

Ansible-NAS can run anything that's in a Docker image, which is why Portainer is included. A NAS configuration is a pretty personal thing based on what you download, what media you view, how many photos you take...so it's difficult to please everyone.

That said, if specific functionality you want isn't included and you think others could benefit, add it and raise a PR!

## What This Doesn't Do

Ansible NAS doesn't set up your disk partitions, primarily because getting it wrong can be incredibly destructive. That aside, configuring partitions is usually a one-time (or very infrequent) event, so there's not much to be gained by automating it. Check out the [docs](https://davestephens.github.io/ansible-nas) for recommended setups.

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

All of the awesome contributors to Ansible-NAS!
