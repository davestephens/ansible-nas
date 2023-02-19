---
title: "Paperless-ngx"
---

Homepage: <https://docs.paperless-ngx.com/>

Paperless is an application by Daniel Quinn and [contributors](https://github.com/paperless-ngx/paperless-ngx/graphs/contributors) that indexes your scanned documents and allows you to easily search for documents and store metadata alongside your documents.

Paperless-ngx has been actively developed for years (stand Feb. 2023) and is a fork of paperless-ng, which was archived since January 2023, which itself forked the original project, adding a new interface and many other changes under the hood

## Usage

Set `paperless_ngx_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

The paperless-ngx web interface can be found at <http://ansible_nas_host_or_ip:16922>.

### Enable traefik as proxy

  - Set `paperless_ngx_available_externally: true` and
  - Set `paperless_secret_key: "to a very_long  string!-09skjlOJIOKSN-of randonm-charcters !_?"` 
  in your `inventories/<your_inventory>/nas.yml` file.

You don't have to remember `paperless_secret_key` and you can leave it set if you run the playbook again. **Don't** leave it empty, because this value is known from the source code. You can use <https://numbergenerator.org/hex-code-generator#!numbers=1&length=128&addfilters=> to generate a long random string

__Exposing paperless with sensible data to the Internet is **dangerous**. Use strong passwords.__

### Create superuser
To be able to login, you will need a super user. 
#### 1. Set superuser and password in playbook
  - override these values in your `inventories/<your_inventory>/nas.yml` file to automatically create an admin user

```yml
paperless_admin_user: ""
paperless_admin_password: ""
paperless_admin_mail: ""
```

  - This will not change an existing [super]user's password, nor will it recreate a user that already exists.
  - You can leave this throughout the lifecycle of the containers.

#### 2. Alternatively: Create the superuser from the command line

To create it, execute the following command:

```bash
docker exec -it paperless_ng_uiserver python manage.py createsuperuser
```

This will prompt you to set a username, an optional e-mail address and finally a password (at least 8 characters).
