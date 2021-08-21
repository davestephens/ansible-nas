# Prowlarr
Homepages: [prowlarr](https://github.com/Prowlarr/Prowlarr) 

**Prowlarr** is a indexer manager/proxy built on the popular arr .net/reactjs base stack to integrate with your various PVR apps. Prowlarr supports both Torrent Trackers and Usenet Indexers. It integrates seamlessly with Sonarr, Radarr, Lidarr, and Readarr offering complete management of your indexers with no per app Indexer setup required (we do it all).

## Usage

Set `prowlarr_enabled: true` in your `/inventories/[my inventory]/group_vars/nas.yml` file.

The Prowlarr web interface can be found at `http://ansible_nas_host_or_ip:9696` by default


## Specific Configuration

For comprehensive configuration instructions see the [Prowlarr wiki](https://wiki.servarr.com/prowlarr) or [Prowlarr Github page](https://github.com/Prowlarr/Prowlarr)
