# Ansible NAS

[![Build Status](https://img.shields.io/travis/com/davestephens/ansible-nas.svg?logo=travis&style=flat-square)](https://travis-ci.com/davestephens/ansible-nas) [![Gitter chat](https://img.shields.io/gitter/room/ansible-nas/chat.svg?logo=gitter&style=flat-square)](https://gitter.im/Ansible-NAS/Chat) [![license](https://img.shields.io/github/license/DAVFoundation/api_doc.svg?style=flat-square)](https://github.com/davestephens/ansible-nas/blob/master/LICENSE)

After getting burned by broken FreeNAS updates one too many times, I figured I could do a much better job myself using
just a stock Ubuntu install, some clever Ansible config and a bunch of Docker containers.

## What This Sets Up

* An awesome dashboard to your home server (Heimdall)
* Any number of Samba shares for you to store your stuff
* A BitTorrent client
* Various media management tools - Sonarr, Sickrage, CouchPotato, Radarr
* Media streaming via Plex or Emby
* Music streaming with Airsonic
* An RSS newsfeed reader - Miniflux
* A Dropbox replacement via Nextcloud
* Various ways to see stats about your NAS - Glances, dashboards in Grafana
* A backup tool - allows scheduled backups to Amazon S3, OneDrive, Dropbox etc
* An IRC bouncer
* Source control with Gitea
* SSL secured external access to some applications via Traefik
* A Docker host with Portainer for image and container management
* An automatic dynamic DNS updater if you use Cloudflare to host your domain DNS

### Docker Containers Used

* [Airsonic](https://airsonic.github.io/) - catalog and stream music
* [Cloudflare DDNS](https://hub.docker.com/r/joshuaavalon/cloudflare-ddns/) - automatically update Cloudflare with your dynamic IP address
* [CouchPotato](https://couchpota.to/) - for downloading and managing movies
* [Duplicati](https://www.duplicati.com/) - for backing up your stuff
* [Emby](https://emby.media/) - Media streaming and management
* [Gitea](https://gitea.io/en-us/) - Self-hosted Github clone
* [Glances](https://nicolargo.github.io/glances/) - for seeing the state of your system via a web browser
* [Grafana](https://github.com/grafana/grafana) - Dashboarding tool
* [Guacamole](https://guacamole.apache.org/) - Web based remote desktop gateway, supports VNC, RDP and SSH
* [Heimdall](https://heimdall.site/) - Home server dashboard
* [InfluxDB](https://github.com/influxdata/influxdb) - Time series database used for stats collection
* [Miniflux](https://miniflux.app/) - An RSS news reader
* [Netdata](https://my-netdata.io/) - An extremely comprehensive system monitoring solution
* [Nextcloud](https://nextcloud.com/) - A self-hosted Dropbox alternative
* [Plex](https://www.plex.tv/) - Plex Media Server
* [Portainer](https://portainer.io/) - for managing Docker and running custom images
* [Radarr](https://radarr.video/) - for organising and downloading movies
* [Sickrage](https://sickrage.github.io/) - for managing TV episodes
* [Sonarr](https://sonarr.tv/) - for downloading and managing TV episodes
* [Tautulli](http://tautulli.com/) - Monitor Your Plex Media Server
* [Telegraf](https://github.com/influxdata/telegraf) - Metrics collection agent
* [TimeMachine](https://github.com/mbentley/docker-timemachine) - Mac backup server
* [Traefik](https://traefik.io/) - Web proxy and SSL certificate manager
* [Transmission](https://transmissionbt.com/) - BitTorrent client (with OpenVPN if you have a supported VPN provider)
* [Watchtower](https://github.com/v2tec/watchtower) - Monitor your Docker containers and update them if a new version is available
* [ZNC](https://wiki.znc.in/ZNC) - IRC bouncer to stay connected to favourite IRC networks and channels

## What This Could Do

Ansible-NAS can run anything that's in a Docker image, which is why Portainer is included. A NAS configuration is a pretty personal thing based on what you download, what media you view, how many photos you take...so it's difficult to please everyone.

That said, if specific functionality you want isn't included and you think others could benefit, add it and raise a PR!

## What This Doesn't Do

Ansible NAS doesn't set up your disk partitions, primarily because getting it wrong can be incredibly destructive.
That aside, configuring partitions is usually a one-time (or very infrequent) event, so there's not much to be
gained by automating it.

## Quick Start

:skull: Before running anything, check out the playbook and understand what it does. Run it against a VM and make sure you're happy. ***Do not*** blindly download code from the internet and trust that it's going to work as you expect. :skull: 

1. Enable the Ubuntu Universe repository: `sudo add-apt-repository universe`
2. Install Ansible: `sudo apt install ansible`
3. `git clone https://github.com/davestephens/ansible-nas.git && cd ansible-nas`
4. Copy `group_vars/all.yml.dist` to  `group_vars/all.yml`.
5. Open up `group_vars/all.yml` and follow the instructions there for configuring your Ansible NAS.
6. If you plan to use Transmission with OpenVPN, also copy `group_vars/vpn_credentials.yml.dist` to
`group_vars/vpn_credentials.yml` and fill in your settings.
7. Copy `inventory.dist` to `inventory` and update it.
8. Install the dependent roles: `ansible-galaxy install -r requirements.yml` (you might need sudo to install Ansible roles)
9. Run the playbook - something like `ansible-playbook -i inventory nas.yml -b -K` should do you nicely.

## Documentation

You can read the docs [here](https://davestephens.github.io/ansible-nas). PRs for more documentation always welcome!

## Migrating from FreeNAS

Assuming that your Ubuntu system disk is separate from your storage (it should be!):

1. Ensure you have a working backup of your data.
2. Check that the working backup you think you have actually works.
3. SSH to the server and run `zpool list` to determine available ZFS pools.
4. `zpool import <pool_name>` against each of the pools you want to attach.
5. `chown -R root:root /mnt/<pool_name>` to fix the ownership of the data.
6. Follow the Quick Start instructions above.

## Hardware

Ansible NAS should work on any recent Ubuntu box. Development is done on Ubuntu Server 18.04.1 LTS running on an HP Microserver.

## Getting Help

Getting help is easy! You can:

* Read the [docs](https://davestephens.github.io/ansible-nas)
* Raise an [issue](https://github.com/davestephens/ansible-nas/issues)
* Chat on [Gitter](https://gitter.im/Ansible-NAS/Chat)

## Contributing

Contributions are welcome, please feel free to raise a PR!

* Restrict pull requests to one piece of functionality or bugfix at a time.
* Test your new functionality or bugfix using the included `tests/test-vagrant.sh` script to spin up a test VM.
* Run `ansible-lint` against the playbook before committing. (There is a VSCode task set up to run the right command for you)
* Please know that your efforts are appreciated, thanks! :+1:

Development of Ansible-NAS is carried out in [Visual Studio Code](https://code.visualstudio.com/) - you'll get some nice
recommended extensions and task setups if you do the same.
