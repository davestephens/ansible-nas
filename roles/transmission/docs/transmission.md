# Transmission


Homepage: <https://transmissionbt.com/>

Transmission is a free BitTorrent client. Two versions are provided - one that tunnels through OpenVPN and one that connects
directly.

## Usage

Set `transmission_enabled: true`, or `transmission_with_openvpn_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

Transmission's web interface can be found at <http://ansible_nas_host_or_ip:9091> (with OpenVPN) or <http://ansible_nas_host_or_ip:9092> (without OpenVPN).

## Specific Configuration

If you enable Transmission with OpenVPN, you'll need to add the following to your inventory `all.yml`:

```yaml
openvpn_username: super_secret_username
openvpn_password: super_secret_password
openvpn_provider: NORDVPN
openvpn_config: uk686.nordvpn.com.udp
```

See <https://hub.docker.com/r/haugene/transmission-openvpn/> for supported VPN providers.
