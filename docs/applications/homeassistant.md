# Home Assistant

Homepage: [https://www.home-assistant.io/](https://www.home-assistant.io/)

Open source home automation that puts local control and privacy first. Powered by a worldwide community of tinkerers and DIY enthusiasts.

## Usage

Set `homeassistant_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

If you want to access Home Assistant externally, don't forget to set `homeassistant_available_externally: true` in your `inventories/<your_inventory>/nas.yml` file.

The Home Assistant web interface can be found at http://ansible_nas_host_or_ip:8123.
