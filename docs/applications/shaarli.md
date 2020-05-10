
# Shaarli

Homepage: [https://github.com/shaarli/Shaarli](https://github.com/shaarli/Shaarli)
Docker Container: [https://hub.docker.com/r/shaarli/shaarli](https://hub.docker.com/r/shaarli/shaarli)

The personal, minimalist, super-fast, database free, bookmarking service.

## Usage

Set `shaarli_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

If you want to access Shaarli externally, don't forget to set `shaarli_available_externally: "true"` in your `inventories/<your_inventory>/nas.yml` file.

The Shaarli web interface can be found at http://ansible_nas_host_or_ip:5804.
