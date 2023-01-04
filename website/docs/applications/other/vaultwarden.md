---
title: "Vaultwarden"
---

Homepage: <https://github.com/dani-garcia/vaultwarden>

This is a Bitwarden server API implementation written in Rust compatible with upstream Bitwarden clients*, perfect for self-hosted deployment where running the official resource-heavy service might not be ideal.

## Usage

Set `vaultwarden_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

The Vaultwarden web interface can be found at <http://ansible_nas_host_or_ip:19080>.

## Specific Configuration

Make sure you set your admin token! It is `vaultwarden_admin_token` in `group_vars/all.yml` file. The string you put here will be the login to the admin section of your Vaultwarden installation (http://ansible_nas_host_or_ip:19080/admin). This token can be anything, but it's recommended to use a long, randomly generated string of characters, for example running:
`openssl rand -base64 48`.

To create a user, you need to set `vaultwarden_allow_signups` to `true` in your `group_vars/all.yml`, and re-run the playbook to reprovision the
container. Once you've created your users, set `vaultwarden_allow_signups` back to `false` and run again.

For speed you can target just Vaultwarden by appending `-t vaultwarden` to your `ansible-playbook` command.
