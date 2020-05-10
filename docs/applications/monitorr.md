
# Monitorr

Homepage: [https://github.com/Monitorr/Monitorr](https://github.com/Monitorr/Monitorr)
Docker Container: [https://hub.docker.com/r/monitorr/monitorr](https://hub.docker.com/r/monitorr/monitorr)

"Monitorr is a self-hosted PHP web app that monitors the status of local and remote network services, websites, and applications.

## Usage

Set `monitorr_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

If you want to access Monitorr externally, don't forget to set `monitorr_available_externally: "true"` in your `inventories/<your_inventory>/nas.yml` file.

The Monitorr web interface can be found at http://ansible_nas_host_or_ip:8605.
