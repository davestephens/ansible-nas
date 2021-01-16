# Traefik

Homepage: [https://traefik.io](https://traefik.io)

Traefik is a reverse proxy used to provide external access to your Ansible-NAS box.
Additionally, Traefik will automatically request and renew SSL certificates for you.

You can configure which applications are available externally by enabling the
`<application_name>_available_externally` setting for each application in the Advanced
Settings section of your `all.yml`.

See [External Access](../configuration/external_access.md) for more info.

## Usage

Set `traefik_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

Traefik's web interface can be found at http://ansible_nas_host_or_ip:8083.

## Specific Configuration

You'll need to map port 80 and 443 from your router to your Ansible-NAS box. A quick
search should reveal instruction for your model of router.
