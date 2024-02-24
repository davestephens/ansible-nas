---
title: "Linkding"
description: "Self-hosted bookmark service"
---

Homepage: [https://github.com/sissbruecker/linkding](https://github.com/sissbruecker/linkding)

linkding is a simple bookmark service that you can host yourself. It's designed be to be minimal, fast, and easy to set up using Docker.

## Usage

Set `linkding_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

linkding web interface can be found at [http://ansible_nas_host_or_ip:9094](http://ansible_nas_host_or_ip:9094).

Login using `linkding_superuser_name`/`linkding_superuser_password` credentials, go to Admin and add a new user.
