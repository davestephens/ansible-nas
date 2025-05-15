---
title: "Organizr"
---

Homepage: [https://organizr.app](https://organizr.app)

HTPC/Homelab services organizer written in PHP.

## Usage

Set `organizr_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

The Organizr web interface can be found at [http://ansible_nas_host_or_ip:10081](http://ansible_nas_host_or_ip:10081).

## Specific Configuration

If you are using domain name (suppose, all your apps are using `<subdomain>.example.com`), but for your main dashboard you want it to be just `example.com` (without subdomain), you can achieve this by setting `organizr_hostname` to an empty, i.e. `organizr_hostname: ''`
