
# grocy

Homepage: [https://grocy.info//](https://grocy.info/)
Docker Container: [https://hub.docker.com/r/linuxserver/grocy](https://hub.docker.com/r/linuxserver/grocy)

grocy is a web-based self-hosted groceries & household management solution for your home.

## Usage

Set `grocy_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

If you want to access grocy externally, don't forget to set `grocy_available_externally: "true"` in your `inventories/<your_inventory>/nas.yml` file.

The default credentials are admin:admin

The grocy web interface can be found at http://ansible_nas_host_or_ip:9283.
