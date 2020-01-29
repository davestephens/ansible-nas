# Cloudflare Dynamic DNS Updater

Homepage: [https://github.com/joshuaavalon/docker-cloudflare](https://github.com/joshuaavalon/docker-cloudflare)
Cloudflare: [https://www.cloudflare.com](https://www.cloudflare.com)

If you want your Ansible-NAS accessible externally then you'll need a domain name. You'll also need to set a wildcard
host A record to point to your static IP, or enable this container to automatically update Cloudflare with your dynamic IP address.

## Usage

Set `cloudflare_ddns_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

## Specific Configuration

Make sure you set your Cloudflare login, domain and API key details within your `inventories/<your_inventory>/nas.yml` file.