# LibrePhotos

Homepage: [https://docs.librephotos.com/](https://docs.librephotos.com/)

## Usage

Set `librephotos_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

The default user is `{{ ansible_nas_user }}` and its password is `librephotos_password`. 

librephotos creates a database in `librephotos_config_directory`.
