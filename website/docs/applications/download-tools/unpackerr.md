---
title: "Unpackerr"
---

Homepage: <https://github.com/davidnewhall/unpackerr>

Unpackerr runs as a daemon on your download host. It checks for completed downloads and extracts them so Lidarr, Radarr, Readarr, and Sonarr may import them. There are a handful of options out there for extracting and deleting files after your client downloads them. I just didn't care for any of them, so I wrote my own. I wanted a small single-binary with reasonable logging that can extract downloaded archives and clean up the mess after they've been imported.

## Usage

Set `unpackerr_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

Then edit `unpackerr.conf` to fit your requirements, and restart the docker instance to apply.