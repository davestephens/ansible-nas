---
title: "Sonarr"
---

Homepage: [https://sonarr.tv/](https://sonarr.tv/)

**Sonarr** is a PVR for Usenet and BitTorrent users. It can monitor multiple RSS feeds for new episodes of your favorite shows and will grab, sort and rename them. It can also be configured to automatically upgrade the quality of files already downloaded when a better quality format becomes available.

## Usage

Set `sonarr_enabled: true` in your `/inventories/[my inventory]/group_vars/nas.yml` file.

The Sonarr web interface can be found at `http://ansible_nas_host_or_ip:8989` by default

## Specific Configuration

**First make sure Sonarr has permissions to write and read the `/download` and `/tv` folders**. Do this by ensuring the `sonarr_movies_directory:` and `sonarr_download_directory` settings are correct.

Sonarr will get the file path from the Download client. On default settings with Transmission the path is `/storage/downloads/complete`. You will need to create a path mapping in the **Remote Path Mappings** settings under **Download Client**  to point to your internal path that is by default `/downloads`.  *If you have difficulties with the path mapping you could also just add a new volume path for the Transmission container and use `/downloads` as the download directory.*

For Sonarr to understand that the `/tv` folder is a folder, you'll need to add a folder into it.
You can also do this by adding a random series to the folder. Keep in mind to have the setting **Create empty movie folders** on **yes**

For comprehensive configuration instructions see the [Sonarr GitHub wiki](https://github.com/Sonarr/Sonarr/wiki)
