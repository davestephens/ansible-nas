---
title: "Releasebell"
description: "Starred GitHub repositories notifications"
---

Homepage: [https://github.com/anarion80/releasebell](https://github.com/anarion80/releasebell)

Release Bell tracks your starred GitHub repositories and will notify you on every new tag or release. Furthermore it allows to manually track GitLab project releases.

All notifications are sent out via email.

## Usage

Set `releasebell_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file. Use of LDAP for user management is encouraged. If you don't set up LDAP environment variables, then you need to set `releasebell_users` to a dictionary of users to be created.

Releasebell web interface can be found at [http://ansible_nas_host_or_ip:3006](http://ansible_nas_host_or_ip:3006).
