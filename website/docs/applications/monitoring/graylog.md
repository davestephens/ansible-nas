---
title: "Graylog"
description: "Free and open source log management"
---

Homepage: <https://www.graylog.org/>

Free and open source log management.

## Usage

Set `graylog_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.
Set all the `graylog_*` environment variables in your inventory, especially the mail related ones. Refer to [graylog documentaion](https://graylog.org/docs/config/) for configuration details.

Graylog web interface can be found at <http://ansible_nas_host_or_ip:9003> after initialization. Login with default credentials: `admin/admin`.
