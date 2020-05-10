
# Unifi

Homepage: [https://www.ui.com/software/](https://www.ui.com/software/)
Docker Container: [https://hub.docker.com/r/linuxserver/unifi-controller](https://hub.docker.com/r/linuxserver/unifi-controller)

The UniFi Software-Defined Networking (SDN) platform is an end-to-end system of network devices across different locations  all controlled from a single interface.

## Usage

Set `unifi_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

If you want to access Unifi externally, don't forget to set `unifi_available_externally: "true"` in your `inventories/<your_inventory>/nas.yml` file.

The Unifi web interface can be found at https://ansible_nas_host_or_ip:8443.

## Specific Configuration

The Unifi Controller runs in host mode and requires many ports; some of which are used by default by other apps. Before running Unifi you should read the Unifi section in group_vars/all.yml and change the ports of any conflicting apps you are using in your `inventories/<your_inventory>/nas.yml` file.
