---
title: "Authentik"
---

Homepage: [https://goauthentik.io](https://goauthentik.io)

authentik is an open-source Identity Provider focused on flexibility and versatility. You can use authentik in an existing environment to add support for new protocols, implement sign-up/recovery/etc. in your application so you don't have to deal with it, and many other things.

## Usage

Set `authentik_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

Set all `authentik_*` variables in `inventories/<your_inventory>/group_vars/all.yml`.

The Authentik web interface can be found at [http://ansible_nas_host_or_ip:9001](http://ansible_nas_host_or_ip:9001).

To start the initial setup, navigate to [http://ansible_nas_host_or_ip:9001/if/flow/initial-setup/](http://ansible_nas_host_or_ip:9001/if/flow/initial-setup/). There you will be prompted to set a password for the akadmin user.

## Specific Configuration

Check [https://goauthentik.io/docs/installation/configuration](https://goauthentik.io/docs/installation/configuration) for full list of configuration options.
