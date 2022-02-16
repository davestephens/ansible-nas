# PhotoPrism

Homepage: [https://photoprism.app/](https://photoprism.app/)

## Usage

Set `photoprism_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

The default user is `admin` and its password is `insecure`. To set the admin password run the following command:

```
docker exec -ti photoprism photoprism passwd
```

More commands can be found [here](https://docs.photoprism.app/getting-started/docker/#examples)
PhotoPrism creates a database in `photoprism_config_directory`.

