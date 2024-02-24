---
title: "OpenLDAP"
description: "OpenLDAP is the open-source solution for LDAP"
---

Homepage: [https://www.openldap.org/](https://www.openldap.org/)

OpenLDAP Software is an open source implementation of the Lightweight Directory Access Protocol.

## Usage

Set `openldap_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.
Set `openldap_*` variables including the LDAP root, admin user and password, etc. to the values you need.
Set `openldap_ldap_users` and `openldap_ldap_passwords` to automatically create a set of users with their passwords.

OpenLDAP interface can be found at [http://ansible_nas_host_or_ip:1389](http://ansible_nas_host_or_ip:1389).

The role automatically installs phpLDAPadmin alongside OpenLDAP. It can be accessed at [http://ansible_nas_host_or_ip:6443](http://ansible_nas_host_or_ip:6443).
The role also templates/copies phpLDAPadmin custom templates to the container. One example is included in `templates\pla_templates` - you can add more if needed.
