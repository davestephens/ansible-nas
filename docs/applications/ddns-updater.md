# DDNS Updater

Homepage: <https://github.com/qdm12/ddns-updater>

DDNS Updater is a lightweight universal DDNS Updater with Docker and web UI. Check the homepage for the list of 30+ providers it supports.

## Usage

Set `ddns_updater_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

The DDNS Updater web interface can be found at <http://ansible_nas_host_or_ip:8001>.

## Specific Configuration

DDNS Updater requires editing its <docker_home>/ddns-updater/data/config.json file. Instructions can be found [here](https://github.com/qdm12/ddns-updater#Configuration).
