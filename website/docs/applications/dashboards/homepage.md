---
title: "Homepage"
---

Homepage: [https://gethomepage.dev](https://gethomepage.dev)

A modern, fully static, fast, secure fully proxied, highly customizable application dashboard
with integrations for over 100 services and translations into multiple languages.
Easily configured via YAML files or through docker label discovery.

## Usage

Set `homepage_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

The Homepage web interface can be found at [http://ansible_nas_host_or_ip:11111](http://ansible_nas_host_or_ip:10080).

## Specific Configuration

Heimdall defaults to port 10080 - some browsers block this port. Override `heimdall_port_http` to move it somewhere else.
