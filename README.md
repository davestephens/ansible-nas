# Ansible NAS

After getting burned by broken FreeNAS updates one too many times, I figured I could do a much better job myself using 
just a stock Ubuntu install, some clever Ansible config and a bunch of docker containers.


## What This Sets Up

 * Any number of Samba shares for you to store your stuff
 * A BitTorrent client 
 * Various media management tools - Sonarr, Sickrage, CouchPotato, Radarr
 * A Docker host with Portainer for image and container management
 * Various ways to see stats about your NAS - Glances, dashboards in Grafana
 * A backup tool - allows scheduled backups to Amazon S3, OneDrive, Dropbox etc
 * An IRC bouncer


### Docker Containers Used

  - [CouchPotato](https://couchpota.to/) for downloading and managing movies
  - [Deluge](https://deluge-torrent.org/) for downloading and managing movies
  - [Duplicati](https://www.duplicati.com/) for backing up your stuff
  - [Glances](https://nicolargo.github.io/glances/) for seeing the state of your system via a web browser
  - [Grafana](https://github.com/grafana/grafana) - Dashboarding tool
  - [InfluxDB](https://github.com/influxdata/influxdb) - Time series database used for stats collection
  - [Plex](https://www.plex.tv/) Plex Media Server
  - [Plexpy](http://tautulli.com/) Monitor Your Plex Media Server
  - [Portainer](https://portainer.io/) for managing Docker and running custom images
  - [Radarr](https://radarr.video/) for organising and downloading movies
  - [Sickrage](https://sickrage.github.io/) for managing TV episodes
  - [Sonarr](https://sonarr.tv/) for downloading and managing TV episodes
  - [Telegraf](https://github.com/influxdata/telegraf) - Metrics collection agent
  - [Transmission](https://transmissionbt.com/) BitTorrent client (with OpenVPN if you have a supported VPN provider)
  - [TVheadend](https://tvheadend.org/)Tvheadend is a TV streaming server and recorder for Linux
  - [Unifi](https://unifi-sdn.ubnt.com/) Ubiquity Wireless Controller
  - [ZNC](https://wiki.znc.in/ZNC) - IRC bouncer to stay connected to favourite IRC networks and channels


## What This Could Do

Ansible-NAS can run anything that's in a Docker image, which is why Portainer is included. A NAS configuration is a pretty personal thing based on what you download, what media you view, how many photos you take...so it's difficult to please everyone.

That said, if specific functionality you want isn't included and you think others could benefit, add it and raise a PR!


## What This Doesn't Do

Ansible NAS doesn't set up your disk partitions, primarily because getting it wrong can be incredibly destructive. 
That aside, configuring partitions is usually a one-time (or very infrequent) event, so there's not much to be 
gained by automating it.  


## Hardware

Ansible NAS should work on any recent Ubuntu box. Development was done on Ubuntu 16.04.3 LTS.

**TODO:** Test against a Raspberry Pi!


## How To Use

1. `git clone https://www.github.com/davestephens/ansible-nas && cd ansible-nas`
2. Copy `group_vars/all.yml.dist` to  `group_vars/all.yml`. 
3. Open up `group_vars/all.yml` and follow the instructions there for configuring your Ansible NAS.
3. If you plan to use Transmission with OpenVPN, also copy `group_vars/vpn_credentials.yml.dist` to 
`group_vars/vpn_credentials.yml` and fill in your settings.
4. Modify `inventory` and update it with the hostname of your NAS box.
5. Install the dependent roles: `sudo ansible-galaxy install -r requirements.yml`
5. Run the playbook - something like `ansible-playbook -i inventory nas.yml -b -K` should do you nicely.


## Migrating from FreeNAS

Assuming that your Ubuntu system disk is separate from your storage (it should be!):

1. Disconnect your drives.
2. Run Ansible NAS against your server.
3. Reconnect your drives.
4. SSH to the server and run `zpool list` to determine available ZFS pools.
5. `zpool import <pool_name>` against the pools you want to attach.
6. `chown -R root:root /mnt/<pool_name>` to fix the ownership of the data 


## TODO

1. Get the tests working on Docker
2. Create useful Grafana dashboards
3. Handle Docker containers being enabled then subsequently disabled (i.e clean up afterwards)
4. SMART disk monitoring


## Contributing

Contributions welcome, please feel free to raise a PR!
