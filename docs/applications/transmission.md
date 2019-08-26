# Transmission

Homepage: [https://transmissionbt.com/](https://transmissionbt.com/)

Transmission is a free BitTorrent client. Two versions are provided - one that tunnels through a VPN and one that connects
directly.

## Usage

Set `transmission_enabled: true`, or `transmission_with_openvpn_enabled: true` in your `group_vars/all.yml` file.

Transmission's web interface can be found at http://ansible_nas_host_or_ip:9091 (with VPN) or http://ansible_nas_host_or_ip:9092 (without VPN).

## Specific Configuration

If you enable Transmission with OpenVPN, you'll need to copy `group_vars/vpn_credentials.yml.dist` to
`group_vars/vpn_credentials.yml` and fill in your settings.
