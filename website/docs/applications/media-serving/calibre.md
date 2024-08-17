---
Title: Calibre
---

Homepage: [https://calibre-ebook.com](https://calibre-ebook.com)

Calibre is a powerful and easy to use e-book manager.

## Usage

Set `calibre_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

## Specific Configuration

By default, there is no password set for the main gui. Optional `calibre_password` will allow setting a password for the user `abc`.

Optionally, cli start arguments can be passed to calibre using `calibre_cli_args`.

The Calibre webserver must be turned on in the Calibre manager to make it available at the selected port (8094 by default).

## Ports

```yml
calibre_port: "8093"
calibre_webserver_port: "8094"
```
