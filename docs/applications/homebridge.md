# Homebridge

Homepage: [https://github.com/nfarina/homebridge](https://github.com/nfarina/homebridge)

Homebridge is a lightweight NodeJS server you can run on your home network that emulates the iOS HomeKit API. It supports Plugins, which are community-contributed modules that provide a basic bridge from HomeKit to various 3rd-party APIs provided by manufacturers of "smart home" devices.

## Usage

Set `homebridge_enabled: true` in your `group_vars/all.yml` file.

The Homebridge web interface can be found at http://ansible_nas_host_or_ip:8087. The default username and password is 'admin' - change this after your first login!
