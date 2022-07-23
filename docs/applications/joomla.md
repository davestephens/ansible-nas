# Joomla CMS

Homepage: [https://www.joomla.org/](https://www.joomla.org/)

Joomla! is an award-winning content management system (CMS), which enables you to build web sites and powerful online applications.

## Usage

Set `joomla_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

If you want to access Joomla externally, set `joomla_available_externally: true` in your `inventories/<your_inventory>/nas.yml` file.

The Joomla web interface can be found at http://ansible_nas_host_or_ip:8181.

## Specific Configuration

  - Set `joomla_database_password` in your `all.yml` before installing Joomla.

  - On first run you'll need to enter database details:
    - Host: `mysql`
    - Database: `joomla`
    - Username: `root`
    - Password: whatever you set for `joomla_database_password`.