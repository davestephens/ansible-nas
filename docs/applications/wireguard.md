# WireGuard

Homepage: <https://www.wireguard.com/>

WireGuard® is an extremely simple yet fast and modern VPN that utilizes state-of-the-art cryptography. It aims to be faster, simpler, leaner, and more useful than IPsec, while avoiding the massive headache. It intends to be considerably more performant than OpenVPN. WireGuard is designed as a general purpose VPN for running on embedded interfaces and super computers alike, fit for many different circumstances. Initially released for the Linux kernel, it is now cross-platform (Windows, macOS, BSD, iOS, Android) and widely deployable. It is currently under heavy development, but already it might be regarded as the most secure, easiest to use, and simplest VPN solution in the industry.

## Usage

Set `wireguard_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

## Specific Configuration

You will need to configure your router for port forwarding of UDP port 51820 to your Ansible NAS server. View <docker_home>/wireguard/config/wg0.conf for your public and private keys to configure your WireGuard clients.
