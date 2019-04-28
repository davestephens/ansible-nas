# Sonarr & Radarr
Homepages: [sonarr](https://sonarr.tv/) / [radarr](https://radarr.video/)

**Sonarr** is a PVR for Usenet and BitTorrent users. It can monitor multiple RSS feeds for new episodes of your favorite shows and will grab, sort and rename them. It can also be configured to automatically upgrade the quality of files already downloaded when a better quality format becomes available.

**Radarr** is an independent fork of Sonarr reworked for automatically downloading movies via Usenet and BitTorrent.

## Usage

Set `sonarr_enabled: true` or `radarr_enabled: true` in your `group_vars/all.yml`

The Sonarr web interface can be found at `http://ansible_nas_host_or_ip:8989` (radarr: `7878`)


## Specific Configuration

**First make sure Sonarr/Radarr have permissions to write and read the `/download`, `/tv` and `/movies` folders**

Sonarr will get the file path from the Download client. On default settings with Transmission the path is `/storage/downloads/complete`. You will need to create a path mapping in the **Remote Path Mappings** settings under **Download Client**  to point to your internal path that is by default `/downloads`.  *If you have difficulties with the path mapping you could also just add a new volume path for the Transmission container and use `/downloads` as the download directory.*

For Sonarr to understand that the `/tv` folder is a folder, you'll need to add a folder into it.
You can also do this by adding a random series to the folder. Keep in mind to have the setting **Create empty movie folders** on **yes**

*Talking about sonarr in the docs, but the exact same works for radarr*
