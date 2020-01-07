# Ansible NAS

[![Build Status](https://img.shields.io/travis/com/davestephens/ansible-nas/master?logo=travis&style=flat-square)](https://travis-ci.com/davestephens/ansible-nas) [![Gitter chat](https://img.shields.io/gitter/room/ansible-nas/chat.svg?logo=gitter&style=flat-square)](https://gitter.im/Ansible-NAS/Chat) [![license](https://img.shields.io/github/license/DAVFoundation/api_doc.svg?style=flat-square)](https://github.com/davestephens/ansible-nas/blob/master/LICENSE) [![Ko-fi](https://img.shields.io/static/v1.svg?label=ko-fi&message=Buy%20Me%20A%20Coffee&color=orange&style=flat-square&logo=buy-me-a-coffee)](https://ko-fi.com/davestephens)

After getting burned by broken FreeNAS updates one too many times, I figured I
could do a much better job myself using just a stock Ubuntu install, some clever
Ansible config and a bunch of Docker containers.

## What Ansible-NAS Can Set Up

* An awesome dashboard to your home server (Heimdall)
* Any number of Samba shares or NFS exports for you to store your stuff
* A BitTorrent client
* A Usenet downloader
* Various media management tools - Sonarr, Sickchill, CouchPotato, Radarr, Bazarr, Lidarr
* Media streaming via Plex or Emby
* Music streaming with Airsonic
* An RSS newsfeed reader - Miniflux
* A Dropbox replacement via Nextcloud
* Various ways to see stats about your NAS - Glances, dashboards in Grafana
* A backup tool - allows scheduled backups to Amazon S3, OneDrive, Dropbox etc
* An IRC bouncer and web-based client
* Source control with Gitea
* SSL secured external access to applications via Traefik
* A Docker host with Portainer for image and container management
* An automatic dynamic DNS updater if you use Cloudflare to host your domain DNS
* A Personal finance manager
* eBook management with calibre-web
* Content management with Joomla
* A dual panel local file manager
* Self-service media request web application

### Available Applications

* [Airsonic](https://airsonic.github.io/) - catalog and stream music
* [Bazarr](https://github.com/morpheus65535/bazarr) - companion to Radarr and Sonarr for downloading subtitles
* [Bitwarden_rs](https://github.com/dani-garcia/bitwarden_rs) - Self-Hosting port of password manager
* [Calibre](https://hub.docker.com/r/linuxserver/calibre-web) - eBook Library
* [Cloud Commander](https://cloudcmd.io/) - A dual panel file manager with integrated web console and text editor
* [Cloudflare DDNS](https://hub.docker.com/r/joshuaavalon/cloudflare-ddns/) - automatically update Cloudflare with your IP address
* [CouchPotato](https://couchpota.to/) - for downloading and managing movies
* [Duplicati](https://www.duplicati.com/) - for backing up your stuff
* [Emby](https://emby.media/) - Media streaming and management
* [Firefly III](https://firefly-iii.org/) - Free and open source personal finance manager
* [get_iplayer](https://github.com/get-iplayer/get_iplayer) - download programmes from BBC iplayer
* [Gitea](https://gitea.io/en-us/) - Self-hosted Github clone
* [Glances](https://nicolargo.github.io/glances/) - for seeing the state of your system via a web browser
* [Grafana](https://github.com/grafana/grafana) - Dashboarding tool
* [Guacamole](https://guacamole.apache.org/) - Web based remote desktop gateway, supports VNC, RDP and SSH
* [Heimdall](https://heimdall.site/) - Home server dashboard
* [Home Assistant](https://www.home-assistant.io) - Open source home automation
* [InfluxDB](https://github.com/influxdata/influxdb) - Time series database used for stats collection
* [Jackett](https://github.com/Jackett/Jackett) - API Support for your favorite torrent trackers
* [Jellyfin](https://jellyfin.github.io) - The Free Software Media System
* [Joomla](https://www.joomla.org/) - Open source content management system
* [Lidarr](https://github.com/lidarr/Lidarr) - Music collection manager for Usenet and BitTorrent users
* [MiniDlna](https://sourceforge.net/projects/minidlna/) - simple media server which is fully compliant with DLNA/UPnP-AV clients
* [Miniflux](https://miniflux.app/) - An RSS news reader
* [Mosquitto](https://mosquitto.org) - An open source MQTT broker
* [MyMediaForAlexa](https://www.mymediaalexa.com/) - Lets you stream your music collection to your alexa device
* [Netdata](https://my-netdata.io/) - An extremely comprehensive system monitoring solution
* [Nextcloud](https://nextcloud.com/) - A self-hosted Dropbox alternative
* [NZBget](https://nzbget.net/) - The most efficient usenet downloader
* [Ombi](https://ombi.io/) - web application that automatically gives your users the ability to request content
* [openHAB](https://www.openhab.org/) - A vendor and technology agnostic open source automation software for your home
* [Plex](https://www.plex.tv/) - Plex Media Server
* [Portainer](https://portainer.io/) - for managing Docker and running custom images
* [pyLoad](https://pyload.net/) - A download manager with a friendly web-interface
* [Radarr](https://radarr.video/) - for organising and downloading movies
* [Sickchill](https://sickchill.github.io/) - for managing TV episodes
* [Sonarr](https://sonarr.tv/) - for downloading and managing TV episodes
* [Tautulli](http://tautulli.com/) - Monitor Your Plex Media Server
* [Telegraf](https://github.com/influxdata/telegraf) - Metrics collection agent
* [The Lounge](https://thelounge.chat) - Web based always-on IRC client
* [TimeMachine](https://github.com/awlx/samba-timemachine) - Samba-based mac backup server
* [Traefik](https://traefik.io/) - Web proxy and SSL certificate manager
* [Transmission](https://transmissionbt.com/) - BitTorrent client (with OpenVPN if you have a supported VPN provider)
* [Ubooquity](http://vaemendis.net/ubooquity/) - Book and comic server
* [Wallabag](https://wallabag.org/) - Save and classify articles. Read them later.
* [Watchtower](https://github.com/v2tec/watchtower) - Monitor your Docker containers and update them if a new version is available
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

## Quick Start

:skull: Before running anything, check out the playbook and understand what it
does. Run it against a VM and make sure you're happy. ***Do not*** blindly
download code from the internet and trust that it's going to work as you expect.
:skull:


1. Enable the Ubuntu Universe repository:

    `sudo add-apt-repository universe`

2. Install Ansible:

    `sudo apt install ansible`

3. Clone Ansible-NAS:

    `git clone https://github.com/davestephens/ansible-nas.git && cd ansible-nas`

4. Create your own inventory and config files by copying `inventories/sample` to your own directory:

    `cp -rfp inventories/sample inventories/my-ansible-nas`

5. Review `group_vars/all.yml`. Change settings by overriding them in `inventories/my-ansible-nas/group_vars/all.yml`.

6. Update `inventories/my-ansible-nas/inventory`.

7. Install the dependent roles: `ansible-galaxy install -r requirements.yml` (you might need `sudo` to install Ansible roles).

8. Run the playbook - something like `ansible-playbook -i inventories/my-ansible-nas/inventory nas.yml -b -K` should do you nicely.

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
  Server 18.04.3 LTS.
* You can run Ansible-NAS on whatever you like, read the docs for more info. I
  use an HP Microserver.

## Getting Help

Getting help is easy! You can:

* Read the [docs](https://davestephens.github.io/ansible-nas)
* Raise an [issue](https://github.com/davestephens/ansible-nas/issues)
* Chat on [Gitter](https://gitter.im/Ansible-NAS/Chat)

## Contributing

Contributions are always welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) first.

## Support

If you've enjoyed Ansible-NAS as much as I do working on it, please consider [buying me a coffee](https://ko-fi.com/davestephens) :coffee:

## Thanks

Thanks to the awesome dudes at [JetBrains](https://www.jetbrains.com/?from=Ansible-NAS) for supplying core contributors with JetBrains Open Source licenses!
