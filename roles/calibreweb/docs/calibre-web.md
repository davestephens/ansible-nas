# "Calibre-web"

Homepage: <https://github.com/janeczku/calibre-web>

Calibre-Web is a web app providing a clean interface for browsing, reading and downloading eBooks using an existing Calibre database.

## Usage

Set `calibreweb_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

## Specific Configuration

Requires Calibre ebook management program. Available for download [here](https://calibre-ebook.com/download).

### Admin login

**Default admin login:** Username: admin Password: admin123

### eBook Conversion

If you do not need eBook conversion you can disable it to save resources by setting the `calibreweb_ebook_conversion` variable in `group_vars/all.yml` file to be empty.

- Conversion enabled: `calibreweb_ebook_conversion: "linuxserver/calibre-web:calibre"`

- Conversion disabled: `calibreweb_ebook_conversion: ""`

You can target just Calibre by appending `-t calibre` to your `ansible-playbook` command.

## Use with Calibre

Ansible-NAS add [../calibre](Calibre) long after Calibre-web. To allow Calibre-web direct access to the Calibre database, both applications can share a Docker data directory. To do so, include the following in your inventory `nas.yml`:

```yml
calibreweb_data_directory: "{{ docker_home }}/calibre"
```

In this case, the Calibre Database Directory is `/data/Calibre Library`.
