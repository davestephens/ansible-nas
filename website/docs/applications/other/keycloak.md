---
title: "Keycloak"
description: "Open Source Identity and Access Management"
---

Homepage: [https://www.keycloak.org/](https://www.keycloak.org/)

Open Source Identity and Access Management

Add authentication to applications and secure services with minimum effort.
No need to deal with storing users or authenticating users.

Keycloak provides user federation, strong authentication, user management, fine-grained authorization, and more.

## Usage

Set `keycloak_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.
Set all the `keycloak_*` environment variables in your inventory. `keycloak_command` is the key variable where all Keycloak configuration options are set. Please refer to [Keycloak configuration documentation](https://www.keycloak.org/server/all-config?f=config) and to [Running Keycloak in a container](https://www.keycloak.org/server/containers) for more details.

Keycloak web interface can be found at [http://ansible_nas_host_or_ip:8161](http://ansible_nas_host_or_ip:8161).
