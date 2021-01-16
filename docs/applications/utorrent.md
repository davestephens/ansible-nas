# uTorrent

Homepage: [https://www.utorrent.com/](https://www.utorrent.com/) Docker Container:
[https://hub.docker.com/r/ekho/utorrent](https://hub.docker.com/r/ekho/utorrent)

## Usage

Set `utorrent_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

If you want to access uTorrent externally, don't forget to set
`utorrent_available_externally: "true"` in your `inventories/<your_inventory>/nas.yml`
file.

The uTorrent web interface can be found at http://ansible_nas_host_or_ip:8111/gui:

-   Username: admin
-   Password: <leave blank>
