# Piwigo - Open Source Photo Gallery

Homepage: [Piwigo.org](https://piwigo.org)

Piwigo is open source photo gallery software for the web. Designed for organisations, teams and individuals.

## Usage

Set `piwigo_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

If you want to access Piwigo externally, set `piwigo_available_externally: "true"` in your `inventories/<your_inventory>/nas.yml` file.

The Piwigo web interface can be found at http://ansible_nas_host_or_ip:16923.

## Specific Configuration

piwigo_mysql_user: "piwigo"
piwigo_mysql_password: "piwigo"
piwigo_mysql_root_password: "piwigo"
nventories/alfheim/group_vars/nas.yml
Optional configurations:

  - Set `piwigo_mysql_user` in `inventories/<your_inventory>/group_vars/nas.yml` before installing Piwigo, this defaults to "piwigo".
  - Set `piwigo_mysql_password` in `inventories/<your_inventory>/group_vars/nas.yml` before installing Piwigo, this defaults to "piwigo".
  - Set `piwigo_mysql_root_password` in `inventories/<your_inventory>/group_vars/nas.yml` before installing Piwigo, this defaults to "piwigo".

  - On first run you'll need to enter database details:
    - Host: `db:3306`
    - Username: the value of piwigo_mysql_user, defaults to "piwigo"
    - Password: the value of piwigo_password, defaults to "piwigo"
    - Database Name: `piwigo`
    - Database tables prefix: should be prefilled with `piwigo_`

