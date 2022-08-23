# Code Server (VSCode)

Homepage: <https://code.visualstudio.com/>

Code Server: <https://docs.linuxserver.io/images/docker-code-server>

Run VSCode on you NAS, accessible through the browser. This web based IDE works exactly like VSCode Desktop would, but with the freedom of using it from anywhere.

## Usage

Set `code_server_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

Code Server's web interface can be found at <http://ansible_nas_host_or_ip:8443>

## Specific Configuration

Code Server uses the `code_root` folder to store its projects, by default defined as a zfs dataset on `samba_shares_root`.
