---
title: "Domain Watchdog"
description: "DNS domain monitoring tool"
---

Homepage: [https://github.com/maelgangloff/domain-watchdog](https://github.com/maelgangloff/domain-watchdog)

An app that uses RDAP to collect publicly available info about domains, track their history, and purchase them

## Usage

Set `domain_watchdog_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

Domain Watchdog web interface can be found at [http://ansible_nas_host_or_ip:8173](http://ansible_nas_host_or_ip:8173).

Optionally, create a set of customization files that will be picked up by the playbook and copied to appropriate place:

```shell
domain_watchdog/files/content/home.md
domain_watchdog/files/content/privacy.md
domain_watchdog/files/content/tos.md
domain_watchdog/files/content/faq.md
domain_watchdog/files/images/icons-512.png
domain_watchdog/files/images/banner.png
domain_watchdog/files/favicon.ico
```
