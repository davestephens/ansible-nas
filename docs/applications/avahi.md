# Avahi

Archlinux docs: [https://wiki.archlinux.org/index.php/Avahi](https://wiki.archlinux.org/index.php/Avahi)

Avahi is a system which enables programs to publish and discover services and hosts running on a local network

## Usage

Set `avahi_enabled: true` in your `group_vars/all.yml` file.

Avahi runs on the system, rather than in a container, as the same Avahi instance can be used to announce any number of services.

Avahi is able to perform auto-discovery of running services for system-running applications. However, most services in Ansible-NAS runs in docker, Avahi is not able to perform auto-discovery. Advertised services can be customized by adding specific configuration into Avahi configuration folder (`/etc/avahi/services/`). Examples of such files are available on [Avahi's Github repository](https://github.com/lathiat/avahi/blob/master/avahi-daemon/example.service)

## Services requiring Avahi

- Timemachine
- Samba (Optional)