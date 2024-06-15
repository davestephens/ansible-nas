# Unifi Network Application

Homepage: [https://github.com/linuxserver/docker-unifi-network-application](https://github.com/linuxserver/docker-unifi-network-application)

The Unifi-network-application software is a powerful, enterprise wireless software engine ideal for high-density client deployments requiring low latency and high uptime performance.

## Usage

Set `unifi_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

Unifi web interface can be found at [http://ansible_nas_host_or_ip:8444](http://ansible_nas_host_or_ip:8444).

If you want to access Unifi Network Application via traefik https, you need to ensure that your trafic static config file has the following option:

```toml
[serversTransport]
  insecureSkipVerify = true
```
