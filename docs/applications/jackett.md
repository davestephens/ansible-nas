# jackett

Homepage: [https://github.com/Jackett/Jackett](https://github.com/Jackett/Jackett)

Jackett works as a proxy server: it translates queries from apps (Sonarr, Radarr, SickRage, CouchPotato, Mylar, DuckieTV, qBittorrent, Nefarious etc) into tracker-site-specific http queries, parses the html response, then sends results back to the requesting software. This allows for getting recent uploads (like RSS) and performing searches. Jackett is a single repository of maintained indexer scraping & translation logic - removing the burden from other apps.

## Usage

Set `jackett: true` in your `group_vars/all.yml` file.

The jackett web interface can be found at http://ansible_nas_host_or_ip:9117.
