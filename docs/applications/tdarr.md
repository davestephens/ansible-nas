# Tdarr (v1)

Homepage: <https://tdarr.io/>

Tdarr does Audio/Video library transcoding automation.

## Usage

Set `tdarr_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

The Tdarr web interface can be found at <http://ansible_nas_host_or_ip:8265>.

## Specific Configuration

You can edit the memory and cpu limits by adding `tdarr_memory` and `tdarr_cpu_shares` overrides in your `inventories/<your_inventory>/nas.yml` file.
