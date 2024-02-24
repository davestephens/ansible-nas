---
title: "Huntly"
description: "Self-hosted information management tool"
---


Homepage: [https://github.com/lcomplete/huntly](https://github.com/lcomplete/huntly)

Huntly is a self-hosted information management tool, in simple terms, contains the following features.

- RSS subscription and reading.
- Automatically saves the pages that have been viewed， then you can saves them as read later, favorites or archives.
- There is a special treatment for Twitter sites that automatically saves the requested tweet timeline, recording whether it has been viewed or not, and in huntly you can even revisit these tweets in a more convenient way.
- You can search by title, content, type, favorite method, and other dimensions.
- Connect to other services, currently GitHub is supported, so it's also a Github stars management tool.
- In the future, it may support connections to services like Pocket, Hypothesis, etc.

## Usage

Set `huntly_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

huntly web interface can be found at [http://ansible_nas_host_or_ip:8110](http://ansible_nas_host_or_ip:8110).
