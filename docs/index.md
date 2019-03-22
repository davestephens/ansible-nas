![Ansible-NAS Logo](https://raw.githubusercontent.com/davestephens/ansible-nas/master/misc/ansible-nas.png "Ansible-NAS Logo")

After getting burned by broken FreeNAS updates one too many times, I figured I
could do a much better job myself using just a stock Ubuntu install, some clever
Ansible config and a bunch of Docker containers. Ansible-NAS was born!

## Features

* An awesome dashboard to your home server (Heimdall)
* Any number of Samba shares for you to store your stuff
* A BitTorrent client
* Various media management tools - Sonarr, Sickrage, CouchPotato, Radarr
* Media streaming via Plex, Emby or MiniDLNA
* Music streaming with Airsonic
* A Dropbox replacement via Nextcloud
* Various ways to see stats about your NAS - Glances, dashboards in Grafana
* A backup tool - allows scheduled backups to Amazon S3, OneDrive, Dropbox etc
* An IRC bouncer
* Source control with Gitea
* SSL secured external access to some applications via Traefik
* A Docker host with Portainer management - run anything that's shipped as a Docker container

## Getting Started

Head to [installation](installation.md) if you're ready to roll, or to
[testing](testing.md) if you want to spin up a test Virtual Machine first. Once
you're done, check out the [post-installation](post_installation.md) steps. 

If this is all very confusing, there is also an [overview](overview.md) of the
project and what is required for complete beginners.
