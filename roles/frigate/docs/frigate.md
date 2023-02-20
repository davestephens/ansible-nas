# Frigate

Homepage: <https://frigate.video/>

Frigate is an open source NVR built around real-time AI object detection. All processing is performed locally on your own hardware, and your camera feeds never leave your home.

## Usage

Set `frigate_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

Frigate web interface can be found at <http://ansible_nas_host_or_ip:5000>.

## Specific Configuration

Edit the `templates/config.yaml.j2` file directly to suit you Frigate configuration needs. Check [Frigate docs](https://docs.frigate.video/configuration/index) for details.
