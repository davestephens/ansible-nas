
# Handbrake

Homepage: [https://handbrake.fr/](https://handbrake.fr/)
Docker Container: [https://hub.docker.com/r/jlesage/handbrake](https://hub.docker.com/r/jlesage/handbrake)

HandBrake is a tool for converting video from nearly any format to a selection of modern, widely supported codecs.

## Usage

Set `handbrake_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

The Handbrake web interface can be found at http://ansible_nas_host_or_ip:5801.

Drop files into dump/transcode and they will be automatically transcoded and put in dump/transcoded.

## Specific Configuration

There are many subjective transcoding defaults that can be changed by adding overrides to your `inventories/<your_inventory>/nas.yml` file. View `roles/handbrake/defaults/main.yml` for specifics.
