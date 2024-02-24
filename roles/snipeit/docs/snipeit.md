# Snipe-IT

Homepage: [https://snipeitapp.com/](https://snipeitapp.com/)

A free open source IT asset/license management system.

## Usage

Set `snipeit_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file. Set all `snipeit_*` environment variables to suit your needs. Consult [Snipe-IT docs](https://snipe-it.readme.io/docs/configuration) for details.

Wait for the database to be initialized and then go to Snipeit web interface at [http://ansible_nas_host_or_ip:8103](http://ansible_nas_host_or_ip:8103) to finish Pre-Flight & Setup.
