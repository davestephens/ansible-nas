# Calibre

Homepage: [https://calibre-ebook.com](https://calibre-ebook.com)

Calibre is a powerful and easy to use e-book manager.

## Usage

Set `calibremanager_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

## Specific Configuration

By default, there is no password set for the main gui. Optional `calibremanager_password` will allow setting a password for the user `abc`.

Optionally, cli start arguments can be passed to calibre using `calibremanager_cli_args`.

The Calibre webserver must be turned on in the Calibre manager to make it available at the selected port (8094 by default).

## Use with Calibre-web

Ansible-NAS has long come with [../calibre](Calibre-web). To allow Calibre-web direct access to the Calibre database, both applications can share a Docker data directory. To do so, include the following in your inventory `nas.yml`:

```yml
calibremanager_data_directory: "{{ docker_home }}/calibre"
```

In this case, the Calibre Database Directory is `/data/Calibre Library`

## Ports

```yml
calibremanager_port: "8093"
calibremanager_webserver_port: "8094"
```
