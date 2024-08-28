---
title: "Pinchflat"
description: "Your next YouTube media manager"
---

Homepage: [https://github.com/kieraneglin/pinchflat](https://github.com/kieraneglin/pinchflat)

Pinchflat is a self-hosted app for downloading YouTube content built using yt-dlp. It's designed to be lightweight, self-contained, and easy to use. You set up rules for how to download content from YouTube channels or playlists and it'll do the rest, periodically checking for new content. It's perfect for people who want to download content for use in with a media center app (Plex, Jellyfin, Kodi) or for those who want to archive media!

## Usage

Set `pinchflat_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

Pinchflat web interface can be found at [http://ansible_nas_host_or_ip:8175](http://ansible_nas_host_or_ip:8175).
