
# Speedtest-Tracker

Homepage: <https://github.com/henrywhitaker3/Speedtest-Tracker>

Docker Container: <https://hub.docker.com/r/henrywhitaker3/speedtest-tracker>

Continuously track your internet speed

## Usage

Set `speedtest_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

If you want to access Speedtest-Tracker externally, don't forget to set `speedtest_available_externally: "true"` in your `inventories/<your_inventory>/nas.yml` file.

The Speedtest-Tracker interface can be found at <http://ansible_nas_host_or_ip:8765>.
