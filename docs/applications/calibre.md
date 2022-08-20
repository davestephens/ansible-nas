# Calibre-web

Homepage: <https://github.com/janeczku/calibre-web>

Calibre-Web is a web app providing a clean interface for browsing, reading and downloading eBooks using an existing Calibre database.

## Usage

Set `calibre_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

## Specific Configuration

Requires Calibre ebook management program. Available for download [here](https://calibre-ebook.com/download).

### Admin login

**Default admin login:** Username: admin Password: admin123

### eBook Conversion

If you do not need eBook conversion you can disable it to save resources by setting the `calibre_ebook_conversion` variable in `group_vars/all.yml` file to be empty.

- Conversion enabled: `calibre_ebook_conversion: "linuxserver/calibre-web:calibre"`

- Conversion disabled: `calibre_ebook_conversion: ""`

You can target just Calibre by appending `-t calibre` to your `ansible-playbook` command.
