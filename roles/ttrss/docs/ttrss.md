# Tt-rss

Homepage: [https://tt-rss.org/](https://tt-rss.org/)

Tiny Tiny RSS is a free and open source web-based news feed (RSS/Atom) reader and aggregator.

## Usage

Set `ttrss_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file. Set all relevant `ttrss_*` env variables as defined in `defaults\main.yml`.

Ttrss web interface can be found at [http://ansible_nas_host_or_ip:8106](http://ansible_nas_host_or_ip:8106). Login with the `ttrss_user` and `ttrss_user_pass` credentials.

## Plugins

Optionally, you can enable `ttrss_plugins_enabled` and set `ttrss_plugins` to a list of dictionaries containing a plugin repo, version and a destination under `plugin.local` directory. You might need to set additional environment variables for the plugins, so use `ttrss_optional_env` for that. Consult [Tt-rss plugins](https://tt-rss.org/wiki/Plugins) for reference.
