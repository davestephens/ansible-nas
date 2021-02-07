# Cloudflare Dynamic DNS Updater

Homepage: [https://github.com/joshuaavalon/docker-cloudflare](https://github.com/joshuaavalon/docker-cloudflare)
Cloudflare: [https://www.cloudflare.com](https://www.cloudflare.com)

If you want your Ansible-NAS accessible externally then you'll need a domain name. You'll also need to set a wildcard
host A record to point to your static IP, or enable this container to automatically update Cloudflare with your dynamic IP address.

## Usage

Set `cloudflare_ddns_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

## Specific Configuration

Make sure you set your domain (if different than the ansible-nas default) and access token details within your `inventories/<your_inventory>/nas.yml` file. If you need to create an API token, see https://joshuaavalon.github.io/docker-cloudflare/guide/cloudflare.html#authentication for instructions.

Cloudflare has deprecated global API key authentication. If you have an older ansible-nas configuration using a global API key, you can upgrade to the API token-based authentication by removing the `cloudflare_api_key` variable from your local `nas.yml` configuration file and setting the `cloudflare_token` variable appropriately.
