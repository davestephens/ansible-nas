---
title: "Whoogle"
description: "Self-hosted, ad-free, privacy-respecting metasearch engine"
---

Homepage: [https://github.com/benbusby/whoogle-search](https://github.com/benbusby/whoogle-search)

Get Google search results, but without any ads, javascript, AMP links, cookies, or IP address tracking. Easily deployable in one click as a Docker app, and customizable with a single config file. Quick and simple to implement as a primary search engine replacement on both desktop and mobile.

## Usage

Set `whoogle_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

Whoogle web interface can be found at [http://ansible_nas_host_or_ip:5002](http://ansible_nas_host_or_ip:5002).

Whoogle has many configration options. Most of them are defined as variables in the role so that you can just use the defaults or overload them in you inventory file. For more advanced configuration create `whoogle_optional_env` dictionary in your inventory and add any Whoogle environment variables you need. Please check [whoogle documentation](https://github.com/benbusby/whoogle-search#environment-variables) for details.
