# Bitwarden(_rs) Password Management

Homepage: [https://github.com/dani-garcia/bitwarden_rs](https://github.com/dani-garcia/bitwarden_rs)
Bitwarden: [https://bitwarden.com/](https://bitwarden.com/)

This is a Bitwarden server API implementation written in Rust compatible with upstream Bitwarden clients*, perfect for self-hosted deployment where running the official resource-heavy service might not be ideal.

## Usage

Set `bitwarden_enabled: true` in your `group_vars/all.yml` file.

## Specific Configuration

Make sure you set your admin token! It is bitwarden_admin_token in `group_vars/all.yml` file. The string you put here will be the login to the admin section
of your bitwarden installation (https://bitwarden.ansiblenasdomain.tld/admin). This token can be anything, but it's recommended to use a long, randomly generated string of characters, for example running: openssl rand -base64 48.
