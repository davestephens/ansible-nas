---
title: "Pretix"
description: "Ticketing software that cares about your event—all the way."
---

Homepage: [https://pretix.eu/about/en/](https://pretix.eu/about/en/)

Ticketing software that cares about your event—all the way.

## Usage

Set `pretix_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

Pretix web interface can be found at [http://ansible_nas_host_or_ip:8166](http://ansible_nas_host_or_ip:8166). Log in as `admin@localhost` with a password of `admin`. Don’t forget to change that password! Create an organizer first, then create an event and start selling tickets!
