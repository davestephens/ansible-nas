---
title: "Authelia"
---

Homepage: [https://www.authelia.com/](https://www.authelia.com/)

Authelia is an open-source authentication and authorization server and portal fulfilling the identity and access management (IAM) role of information security in providing multi-factor authentication and single sign-on (SSO) for your applications via a web portal. It acts as a companion for common reverse proxies.

## Usage

Set `authelia_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

Set all `authelia_*` variables in `inventories/<your_inventory>/group_vars/all.yml`.

The authelia web interface can be found at [http://ansible_nas_host_or_ip:9093](http://ansible_nas_host_or_ip:9093).

## Specific Configuration

This a basic working example of forward auth to Authelia. You need to adjust the config file (`roles/authelia/templates/configuration.yml`) to suit your environment (Authentication Backend, Access Control, etc).
