---
title: "Glances"
---

Homepage: [https://nicolargo.github.io/glances/](https://nicolargo.github.io/glances/)

Glances is a cross-platform system monitoring tool written in Python.

## Usage

Set `glances_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

The Glances web interface can be found at [http://ansible_nas_host_or_ip:61208](http://ansible_nas_host_or_ip:61208).

## Specific Configuration

Glances can be integrated with InfluxDB and Grafana.
