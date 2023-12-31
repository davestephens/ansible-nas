---
title: "Light LDAP"
description: "Light LDAP implementation"
---

Homepage: [https://github.com/lldap/lldap](https://github.com/lldap/lldap)

This project is a lightweight authentication server that provides an opinionated, simplified LDAP interface for authentication. It integrates with many backends, from KeyCloak to Authelia to Nextcloud and more!

## Usage

Set `lldap_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

lldap web interface can be found at [http://ansible_nas_host_or_ip:17170](http://ansible_nas_host_or_ip:17170).
