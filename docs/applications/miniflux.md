# Miniflux

Homepage: [https://miniflux.app/](https://miniflux.app/)

Miniflux is a minimalist and opinionated feed reader.

## Usage

Set `miniflux_enabled: true` in your `group_vars/all.yml` file.

The Miniflux web interface can be found at http://ansible_nas_host_or_ip:8070, the default username is `admin` and password `supersecure`.

## Specific Configuration

An admin user will be created with the username and password of `miniflux_admin_username` and `miniflux_admin_password` respectively. These can be found in the Miniflux section within `all.yml.dist`.