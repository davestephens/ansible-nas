# Paperless-ng

Homepage: <https://github.com/jonaswinkler/paperless-ng>

Paperless is an application by Daniel Quinn and contributors that indexes your scanned documents and allows you to easily search for documents and store metadata alongside your documents.

Paperless-ng is a fork of the original project, adding a new interface and many other changes under the hood

## Usage

Set `paperless_ng_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

The paperless-ng web interface can be found at <http://ansible_nas_host_or_ip:16922>.

### Create the superuser

To be able to login, you will need a super user. To create it, execute the following command:

```bash
docker exec -it paperless_ng_uiserver python manage.py createsuperuser
```

This will prompt you to set a username, an optional e-mail address and finally a password (at least 8 characters).
