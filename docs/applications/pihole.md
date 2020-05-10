
# Pi-hole

Homepage: [https://pi-hole.net/](https://pi-hole.net/)
Docker Container: [https://hub.docker.com/r/pihole/pihole](https://hub.docker.com/r/pihole/pihole)

Network-wide ad blocking, a black hole for Internet advertisements.

## Usage

Using Traefik: Set `pihole_with_traefik_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.
Not using Traefik: Set `pihole_without_traefik_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

The Pi-hole web interface can be found at http://ansible_nas_host_or_ip/admin.
