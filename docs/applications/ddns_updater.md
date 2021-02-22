# Dynamic DNS Updater

Lightweight universal DDNS Updater with Docker and web UI

Homepage: [https://github.com/qdm12/ddns-updater](https://github.com/qdm12/ddns-updater)

Light container updating DNS A and/or AAAA records periodically for multiple DNS providers.

Currently supported providers:
* Cloudflare
* DDNSS.de
* DigitalOcean
* DonDominio
* DNSOMatic
* DNSPod
* Dreamhost
* DuckDNS
* DynDNS
* FreeDNS
* Gandi
* GoDaddy
* Google
* He.net
* Infomaniak
* Linode
* LuaDNS
* Namecheap
* NoIP
* OpenDNS
* OVH
* Selfhost.de
* Strato.de

## Usage

Set `ddns_updater_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

## Specific Configuration

You have to define `ddns_updater_config` with the configuration of your provider(s).
See https://github.com/qdm12/ddns-updater#configuration for configuration options.
For an example on how to convert the configuration in json Format to the yaml/dict in  `ddns_updater_config`  see the
role defaults.

Optionally, `ddns_updater_gotify_token` can be set to a gotify token in order to be notified about changes made to your
dns.
