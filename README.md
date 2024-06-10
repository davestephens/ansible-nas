# Ansible NAS

![Available Applications](https://img.shields.io/github/directory-file-count/anarion80/ansible-nas/roles?label=Available%20Applications&style=flat-square)
[![CI](https://github.com/anarion80/ansible-nas/workflows/CI/badge.svg)](https://github.com/anarion80/ansible-nas/actions?query=workflow%3ACI)
[![Integration](https://github.com/anarion80/ansible-nas/workflows/Integration/badge.svg)](https://github.com/anarion80/ansible-nas/actions?query=workflow%3AIntegration)
[![Gitter chat](https://img.shields.io/gitter/room/ansible-nas/chat.svg?logo=gitter&style=flat-square)](https://gitter.im/Ansible-NAS/Chat)
[![license](https://img.shields.io/github/license/DAVFoundation/api_doc.svg?style=flat-square)](https://github.com/davestephens/ansible-nas/blob/main/LICENSE)
[![Ko-fi](https://img.shields.io/static/v1.svg?label=ko-fi&message=Buy%20Me%20A%20Coffee&color=orange&style=flat-square&logo=buy-me-a-coffee)](https://ko-fi.com/davestephens)

After getting burned by broken FreeNAS updates one too many times, I figured I could do a much better job myself using just a stock Ubuntu install, some clever Ansible config and a bunch of Docker containers.

## What Ansible-NAS Does

You can configure Ansible-NAS to set up any (or all!) of the applications listed below on your home server.

If you have a spare domain name you can configure applications to be accessible externally to your home LAN too; they'll be configured with a sensible hostname and DNS gets updated accordingly if your home IP address changes.

## Available Applications

* [Activepieces](https://www.activepieces.com/) - an open source all-in-one automation tool
* [Actual](https://github.com/actualbudget/actual-server) - A local-first personal finance app
* [Admidio](https://www.admidio.org/) - a free online membership management
* [Affine](https://github.com/toeverything/AFFiNE) - a next-gen knowledge base that brings planning, sorting and creating all together
* [Airsonic](https://airsonic.github.io/) - catalog and stream music
* [Appsmith](https://www.appsmith.com/) -  low-code application platform to quickly build, deploy, and manage effective software
* [Aria2](https://github.com/aria2/aria2) - a lightweight multi-protocol & multi-source, cross platform download utility operated in command-line
* [Authelia](https://www.authelia.com/) - The Single Sign-On Multi-Factor portal for web apps
* [Authentik](https://goauthentik.io/) - an open-source Identity Provider focused on flexibility and versatility
* [Barcode Buddy](https://github.com/Forceu/barcodebuddy/) - Barcode system for Grocy
* [Baserow](https://gitlab.com/baserow/baserow) - an open source no-code database and Airtable alternative
* [Bazarr](https://github.com/morpheus65535/bazarr) - companion to Radarr and Sonarr for downloading subtitles
* [Beets](https://beets.io/) - media library management system for obsessive music geeks
* [Blaze](https://github.com/blenderskool/blaze) - File sharing progressive web app
* [Blocky](https://0xerr0r.github.io/blocky/) - Fast and lightweight DNS proxy as ad-blocker
* [Booksonic](https://booksonic.org/) - The selfhosted audiobook server
* [Budibase](https://github.com/Budibase/budibase) - Low code platform for building business apps and workflows in minutes
* [Calibre](https://calibre-ebook.com) - Calibre is a powerful and easy to use e-book manager.
* [Calibre-web](https://github.com/janeczku/calibre-web) - Provides a clean interface for browsing, reading and downloading eBooks using an existing Calibre database.
* [Casdoor](https://github.com/casdoor/casdoor) - An open-source UI-first Identity and Access Management (IAM) / Single-Sign-On (SSO) platform.
* [Changedetection.io](https://github.com/dgtlmoon/changedetection.io) - Free open source website change detection, monitor and notification service
* [Chatpad](https://chatpad.ai/) - Not just another ChatGPT user-interface!
* [Chatwoot](https://github.com/chatwoot/chatwoot) - Open-source live-chat, email support, omni-channel desk
* [Claper](https://claper.co/) - The ultimate tool to interact with your audience
* [Code Server](https://code.visualstudio.com/) - Powerful IDE from Microsoft accessible through the browser
* [CommaFeed](https://www.commafeed.com/) - Google Reader inspired self-hosted RSS reader
* [Cloud Commander](https://cloudcmd.io/) - A dual panel file manager with integrated web console and text editor
* [Cloudflare DDNS](https://hub.docker.com/r/joshuaavalon/cloudflare-ddns/) - automatically update Cloudflare with your IP address
* [CouchPotato](https://couchpota.to/) - for downloading and managing movies
* [Dashy](https://dashy.to/) - A self-hosted startpage for your server. Easy to use visual editor, status checking, widgets, themes and tons more!
* [DbGate](https://github.com/dbgate/dbgate) - Database manager for MySQL, PostgreSQL, SQL Server, MongoDB, SQLite and others
* [DDNS Updater](https://github.com/qdm12/ddns-updater) - dynamic dns updater for serveral providers
* [Deluge](https://dev.deluge-torrent.org/) - A lightweight, Free Software, cross-platform BitTorrent client.
* [Dockge](https://github.com/louislam/dockge) - A fancy, easy-to-use and reactive self-hosted docker compose.yaml stack-oriented manager
* [DokuWiki](https://www.dokuwiki.org/) - A simple to use and highly versatile Open Source wiki software that doesn't require a database.
* [Drone CI](https://drone.io) - A self-service Continuous Integration platform for busy development teams.
* [Duplicacy](https://duplicacy.com/) - A web UI for the Duplicacy cloud backup program, which provides lock-free deduplication backups to multiple providers
* [Dufs](https://github.com/sigoden/dufs) - distinctive utility file server
* [Duplicati](https://www.duplicati.com/) - for backing up your stuff
* [Emby](https://emby.media/) - Media streaming and management
* [ebusd](https://github.com/john30/ebusd) - daemon for communication with eBUS heating systems
* [ESPHome](https://esphome.io/) - ESP8266/ESP32 programming and management for home automation
* [EspoCRM](https://github.com/espocrm/espocrm) - Open Source CRM Application
* [Evershop](https://github.com/evershopcommerce/evershop) - NodeJS E-commerce Platform
* [Excalidraw](https://excalidraw.com/) - Virtual whiteboard for sketching hand-drawn like diagrams
* [Firefly III](https://firefly-iii.org/) - Free and open source personal finance manager
* [Flame](https://github.com/pawelmalak/flame/) - Flarum is a delightfully simple discussion platform for your website
* [Flarum](https://flarum.org/) - Self-hosted startpage for your server
* [Flatnotes](https://flatnotes.io/) - Self-hosted, database-less note taking web app
* [Formbricks](https://github.com/formbricks/formbricks) - An Open Source Survey Platform
* [FormIO](https://github.com/formio/formio) - SA Form and Data Management Platform for Progressive Web Applications
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
* [Grist](https://github.com/gristlabs/grist-core) - Grist is the evolution of spreadsheets.
* [Grocy](https://grocy.info/) - web-based self-hosted groceries & household management solution for your home
* [Guacamole](https://guacamole.apache.org/) - Web based remote desktop gateway, supports VNC, RDP and SSH
* [HA Fusion](https://github.com/matt8707/ha-fusion) - A modern, easy-to-use and performant custom Home Assistant dashboard
* [healthchecks.io](https://healthchecks.io/) - Ensure your NAS is online and get notified otherwise
* [Heimdall](https://heimdall.site/) - Home server dashboard
* [Heyform](https://github.com/heyform/heyform) - an open-source form builder that allows anyone to create engaging conversational forms
* [Homarr](https://github.com/ajnart/homarr) - Customizable browser's home page
* [Home Assistant](https://www.home-assistant.io) - Open source home automation
* [Homebridge](https://github.com/nfarina/homebridge) - Emulate the iOS HomeKit API
* [Homepage](https://gethomepage.dev/) - Highly customizable application dashboard with integrations for over 100 services.
* [Huginn](https://github.com/huginn/huginn) - Create agents that monitor and act on your behalf. Your agents are standing by!
* [Huly Platform](https://github.com/hcengineering/platform) - All-in-One Project Management Platform (alternative to Linear, Jira, Slack, Notion, Motion)
* [Huntly](https://github.com/lcomplete/huntly) - Self-hosted information management tool
* [ICantBelieveItsNotValetudo](https://github.com/Hypfer/ICantBelieveItsNotValetudo) - companion service for Valetudo that renders ValetudoMap map data to raster graphics.
* [Immich](https://immich.app/) - Self-hosted photo and video backup solution directly from your mobile phone.
* [Input](https://github.com/deck9/input) - A privacy-focused, no-code, open-source form builder.
* [Influxdb](https://github.com/influxdata/influxdb) - Time series database used for stats collection
* [Invidious](https://invidious.io/) - An open source alternative front-end to YouTube
* [Jackett](https://github.com/Jackett/Jackett) - API Support for your favorite torrent trackers
* [Jellyfin](https://jellyfin.github.io) - The Free Software Media System
* [Joomla](https://www.joomla.org/) - Open source content management system
* [Kavita](https://www.kavitareader.com/) - Kavita is a rocket fueled self-hosted digital library which supports a vast array of file formats
* [Keycloak](https://www.keycloak.org/) - Open Source Identity and Access Management
* [Komga](https://komga.org/) - a media server for your comics, mangas, BDs and magazines
* [Krusader](https://krusader.org/) - Twin panel file management for your desktop
* [LazyLibrarian](https://lazylibrarian.gitlab.io/) - LazyLibrarian is a program to follow authors and grab metadata for all your digital reading needs
* [Leantime](https://leantime.io/) - strategic project management system for non-project managers
* [Libreddit](https://github.com/libreddit/libreddit) - Private front-end for Reddit
* [Librephotos](https://github.com/LibrePhotos/librephotos) - self-hosted open source photo
* [Librespeed](https://github.com/librespeed/speedtest) - Self-hosted Speedtest for HTML5 and more
* [LibreTranslate](https://libretranslate.com/) - Free and Open Source Machine Translation API
* [Librum Server](https://github.com/Librum-Reader/Librum-Server) - A clean and powerful way to read and manage your e-books on any device
* [Lidarr](https://github.com/lidarr/Lidarr) - Music collection manager for Usenet and BitTorrent users
* [Light LDAP](https://github.com/lldap/lldap) - Light LDAP implementation
* [Linkding](https://github.com/sissbruecker/linkding) - Self-hosted bookmark service
* [Linkstack](https://github.com/LinkStackOrg/LinkStack) - the ultimate solution for creating a personalized & professional profile page
* [Linkwarden](https://linkwarden.app/) - Open-source collaborative bookmark manager to collect, organize and archive webpages
* [Listmonk](https://listmonk.app/) - High performance, self-hosted, newsletter and mailing list manager
* [Littlelink](https://github.com/techno-tim/littlelink-server) - Self-hosted alternative to linktree
* [LiveHelperChat](https://github.com/LiveHelperChat/livehelperchat) - live support for your website
* [Loki](https://grafana.com/oss/loki/) - Loki is a horizontally scalable, highly available, multi-tenant log aggregation system inspired by Prometheus.
* [Lowcoder](https://github.com/lowcoder-org/lowcoder) - The Open Source Retool, Tooljet and Appsmith Alternative.
* [LubeLogger](https://github.com/hargata/lubelog) - LubeLogger is a web-based vehicle maintenance and fuel mileage tracker.
* [Mainsail](https://github.com/mainsail-crew/mainsail) -  popular web interface for managing and controlling 3D printers with Klipper
* [Maker Management Platform](https://github.com/Maker-Management-Platform/docs) -  management of a variety of digital assets related to 3d printing, manufacturing, laser engraving and such.
* [Mantium](https://github.com/diogovalentte/mantium) - dashboard for tracking mangas from multiple source sites, like Mangadex and ComicK.
* [Mattermost](https://mattermost.com/) - open source platform for secure collaboration across the entire software development lifecycle
* [MariaDB](https://mariadb.org/) - one of the most popular open source relational databases
* [Maybe](https://github.com/maybe-finance/maybe) - The OS for your personal finances
* [Mealie](https://hay-kot.github.io/mealie/) - A self-hosted recipe manager and meal planner
* [Memos](https://usememos.com/) - An open-source memo hub with knowledge management and social networking
* [Metabase](https://github.com/metabase/metabase) - business intelligence and analytics
* [Metube](https://github.com/alexta69/metube) - Self-hosted YouTube downloader (web UI for youtube-dl / yt-dlp)
* [Minecraft Java Server](https://www.minecraft.net/) - Java server edition of the popular building and exploring game
* [Minecraft Bedrock Server](https://www.minecraft.net/) - Bedrock server edition of the popular building and exploring game
* [Minetest Server](https://www.minetest.net/) - An open source voxel game engine server
* [MiniDLNA](https://sourceforge.net/projects/minidlna/) - simple media server which is fully compliant with DLNA/UPnP-AV clients
* [Miniflux](https://miniflux.app/) - An RSS news reader
* [Minio](https://min.io/) - MinIO is a high-performance, S3 compatible object store
* [Miniserve](https://github.com/svenstaro/miniserve) - a CLI tool to serve files and dirs over HTTP
* [Mosquitto](https://mosquitto.org) - An open source MQTT broker
* [Mumble](https://www.mumble.info) - Open source, low latency, high quality voice chat
* [Mylar](https://github.com/evilhero/mylar) - An automated Comic Book downloader (cbr/cbz) for use with SABnzbd, NZBGet and torrents
* [MyMediaForAlexa](https://www.mymediaalexa.com/) - Lets you stream your music collection to your alexa device
* [MySql](https://www.mysql.com/) - The world's most popular open source database
* [n8n](https://n8n.io/) - Nodemation, a node based workflow and automation service like IFTTT.
* [navidrome](https://www.navidrome.org/) - Modern Music Server and Streamer compatible with Subsonic/Airsonic
* [n.eko](https://github.com/m1k1o/neko/) - A self hosted virtual browser that runs in docker and uses WebRTC.
* [netboot.xyz](https://netboot.xyz/) - a PXE boot server
* [Netbox](https://netbox.dev/) - The premiere source of truth powering network automation
* [Netdata](https://my-netdata.io/) - An extremely comprehensive system monitoring solution
* [Nextcloud](https://nextcloud.com/) - A self-hosted Dropbox alternative
* [Node-RED](https://nodered.org/) - A programming tool for wiring together hardware devices, APIs and online services
* [Nomad](https://www.nomadproject.io/) - A simple and flexible scheduler and software orchestrator
* [Notifo](https://github.com/notifo-io/notifo) - Multi channel notification service for collaboration tools, e-commerce, news service and more.
* [NZBget](https://nzbget.net/) - The most efficient usenet downloader
* [Nzbhydra2](https://github.com/theotherp/nzbhydra2) - Usenet meta search
* [Obsidian](https://obsidian.md/) - Obsidian is the private and flexible writing app
* [Octoprint](https://octoprint.org/) - Control and monitor your 3D printer
* [OliveTin](https://github.com/OliveTin/OliveTin) -  safe and simple access to predefined shell commands
* [Ombi](https://ombi.io/) - web application that automatically gives your users the ability to request content
* [Openbooks](https://github.com/evan-buss/openbooks) - Search and Download eBooks
* [openHAB](https://www.openhab.org/) - A vendor and technology agnostic open source automation software for your home
* [openLDAP](https://www.openldap.org/) - An open source implementation of the Lightweight Directory Access Protocol
* [Open-resume](https://github.com/xitanggg/open-resume) - A powerful open-source resume builder and resume parser
* [Open-WebUI](https://github.com/open-webui/open-webui) - User-friendly WebUI for LLMs (Formerly Ollama WebUI)
* [Organizr](https://organizr.app/) - ORGANIZR aims to be your one stop shop for your Servers Frontend.
* [Outline](https://github.com/outline/outline) - The fastest knowledge base for growing teams.
* [Overleaf](https://github.com/overleaf/overleaf) - A web-based collaborative LaTeX editor
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
* [Promtail](https://grafana.com/docs/loki/latest/clients/promtail/) - Promtail is an agent which ships the contents of local logs to a private Grafana Loki instance
* [Prowlarr](https://github.com/Prowlarr/Prowlarr) - Indexer aggregator for Sonarr, Radarr, Lidarr, etc.
* [pyLoad](https://pyload.net/) - A download manager with a friendly web-interface
* [PyTivo](http://pytivo.org) - An HMO and GoBack server for TiVos.
* [Radarr](https://radarr.video/) - for organising and downloading movies
* [Rallly](https://github.com/lukevella/rallly/) - an open-source scheduling and collaboration tool
* [Readeck](https://codeberg.org/readeck/readeck) - a simple web application that lets you save the precious readable content of web pages you like and want to keep forever.
* [Releasebell](https://github.com/anarion80/releasebell) - Starred GitHub repositories notifications
* [Restic](https://restic.net/) - A modern backup program
* [Romm](https://github.com/zurdi15/romm) - A game library manager focused on retro gaming
* [Route53 DDNS](https://crazymax.dev/ddns-route53/) - Automatically update AWS Route53 with your IP address
* [RSS-Bridge](https://rss-bridge.github.io/rss-bridge/) - The RSS feed for websites missing it
* [RSSHub](https://github.com/DIYgod/RSSHub) - An open source, easy to use, and extensible RSS feed generator.
* [Ryot](https://github.com/ignisda/ryot) - A self hosted platform for tracking various facets of your life - media, fitness etc.
* [Sabnzbd](https://sabnzbd.org/) - A powerful usenet downloader that FreeNAS provides
* [Seafile](https://www.seafile.com/en/home/) - High performance file syncing and sharing
* [SearxNG](https://github.com/searxng/searxng) - Free internet metasearch engine
* [Servas](https://github.com/beromir/Servas) - A self-hosted bookmark management tool
* [Shaarli](https://github.com/shaarli/Shaarli) - Personal, minimalist, super-fast, database free, bookmarking service
* [Sickchill](https://sickchill.github.io/) - for managing TV episodes
* [Silverbullet](https://silverbullet.md) - Note-taking application optimized for people with a hacker mindset
* [SiYuan](https://github.com/siyuan-note/siyuan) - A privacy-first, self-hosted, fully open source personal knowledge management software
* [Snipe-IT](https://snipeitapp.com/) - A free open source IT asset/license management system
* [Sonarr](https://sonarr.tv/) - for downloading and managing TV episodes
* [Speedtest-Tracker](https://github.com/henrywhitaker3/Speedtest-Tracker) - Continuously track your internet speed
* [Squirrel Servers Manager](https://github.com/SquirrelCorporation/SquirrelServersManager) - A user friendly, UI/UX focus server & configuration management tool.
* Stats - Monitor and visualise metrics about your NAS and internet connection using Grafana, Prometheus, Telegraf and more.
* [Stalwart Mail](https://stalw.art/) - A scalable, secure and robust open-source mail server software designed for the 21st century.
* [Standard Notes](https://standardnotes.com/) - An end-to-end encrypted notes app
* [Stirling-PDF](https://github.com/Frooodle/Stirling-PDF) - locally hosted web application that allows you to perform various operations on PDF files
* [SuiteCRM](https://github.com/salesagility/SuiteCRM) - Open source CRM for the world
* [Syncthing](https://syncthing.net/) - sync directories with another device
* [Tautulli](http://tautulli.com/) - Monitor Your Plex Media Server
* [The Lounge](https://thelounge.chat) - Web based always-on IRC client
* [Threadfin](https://github.com/Threadfin/Threadfin) - M3U Proxy for Plex DVR and Emby/Jellyfin Live TV. Based on xTeVe.
* [TiddlyWiki](https://tiddlywiki.com) - A unique non-linear notebook/wiki for capturing, organizing, and sharing complex information
* [TimeMachine](https://github.com/awlx/samba-timemachine) - Samba-based mac backup server
* [ToolJet](https://github.com/ToolJet/ToolJet) - Low-code platform for building business applications
* [Traefik](https://traefik.io/) - Web proxy and SSL certificate manager
* [Transmission](https://transmissionbt.com/) - BitTorrent client (with OpenVPN if you have a supported VPN provider)
* [Trilium](https://github.com/zadam/trilium) - Hierarchical note taking application with focus on building large personal knowledge bases
* [Tt-rss](https://tt-rss.org/) - free and open source web-based news feed (RSS/Atom) reader and aggregator
* [Twenty CMS](https://github.com/twentyhq/twenty) - The #1 Open-Source CRM
* [Ubooquity](http://vaemendis.net/ubooquity/) - Book and comic server
* [Uppy](https://github.com/transloadit/uppy) - The next open source file uploader for web browsers
* [uTorrent](https://www.utorrent.com/) - The best torrent downloading app for beginners
* [Vaultwarden](https://github.com/dani-garcia/vaultwarden) - Self-Hosting port of password manager
* [Virtual Desktop](https://github.com/RattyDAVE/docker-ubuntu-xrdp-mate-custom) - A virtual desktop running on your NAS.
* [Wallabag](https://wallabag.org/) - Save and classify articles. Read them later.
* [Wallos](https://github.com/ellite/Wallos) - Open-Source Personal Subscription Tracker.
* [Wanderer](https://github.com/Flomp/wanderer) - A self-hosted trail database.
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
