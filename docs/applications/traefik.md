# Traefik

Homepage: [https://traefik.io](https://traefik.io)

Traefik is used to provide external access to your Ansible-NAS box. Additionally, Traefik will automatically request and renew SSL certificates for you.

## Usage

Set `traefik_enabled: true` in your `group_vars/all.yml` file.

Traefik's web interface can be found at http://ansible_nas_host_or_ip:8083.

## Specific Configuration

You'll need to map port 80 and 443 from your router to your Ansible-NAS box. A quick search should reveal instruction for your model of router.