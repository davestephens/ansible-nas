# ebusd

Homepage: [https://github.com/john30/ebusd](https://github.com/john30/ebusd)

ebusd is a daemon for handling communication with eBUS devices connected to a 2-wire bus system ("energy bus" used by numerous heating systems).

## Usage

Set `ebusd_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file. Set any `ebusd_*` environment variables to suit your needs.

ebusd web interface can be found at [http://ansible_nas_host_or_ip:8110](http://ansible_nas_host_or_ip:8110).
