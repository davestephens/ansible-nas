# Wishthis

Homepage: <https://github.com/grandeljay/wishthis>

wishthis is a simple, intuitive and modern wishlist platform to create, manage and view your wishes for any kind of occasion.

## Usage

Set `wishthis_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

If you want to access wishthis externally, set `wishthis_available_externally: true` in your `inventories/<your_inventory>/nas.yml` file.

The wishthis web interface can be found at <http://ansible_nas_host_or_ip:8113>.

Proceed with initial config, provide db host (`wishthis_db_host`), name (`wishthis_db_name`), user (`wishthis_db_user`) and password (`wishthis_db_password`).
