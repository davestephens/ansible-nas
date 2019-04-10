# Bitwarden(_rs) Password Management

Homepage: [https://github.com/dani-garcia/bitwarden_rs](https://github.com/dani-garcia/bitwarden_rs)
Bitwarden: [https://bitwarden.com/](https://bitwarden.com/)

This is a Bitwarden server API implementation written in Rust compatible with upstream Bitwarden clients*, perfect for self-hosted deployment where running the official resource-heavy service might not be ideal.

## Usage

Set `bitwarden_enabled: true` in your `group_vars/all.yml` file.

## Specific Configuration

Make sure you set your admin token! It is bitwarden_admin_token in `group_vars/all.yml` file. The string you put here will be the login to the admin section of your bitwarden installation (https://bitwarden.ansiblenasdomain.tld/admin). This token can be anything, but it's recommended to use a long, randomly generated string of characters, for example running: openssl rand -base64 48.

To create a user, you need to change a variable in ./tasks/bitwarden.yml. Set "SIGNUPS_ALLOWED" to "true", and reprovision the container. Once you have created your user, I would reccomend setting it to false and reprovisioning one more time.

There is currently an issue with websockets and this configuration; traefik does not work correctly when enabled. If this issue gets resolved, I will update the file. Until that time, please note that synchronizations between your vault and browser extensions will not be instant. You will need to force a sync or wait on the scheduled sync (approx. 1h).