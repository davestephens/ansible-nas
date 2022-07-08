# Foundry Virtual Table Top

Homepage: [https://foundryvtt.com/](https://foundryvtt.com/)

Foundry Virtual Tabletop is software that provides an innovative online role-playing experience. The software supports Windows, Mac, and Linux and allows you to self-host a game server that players connect to for free directly through a web browser.

## Usage

Set `foundryvtt_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

To make FoundryVTT available externally via Traefik set `foundryvtt_available_externally: "true"` in your `inventories/<your_inventory>/nas.yml` file.

FoundryVTT can be found at http://ansible_nas_host_or_ip:30000.

## Specific Configuration

FoundryVTT has a number of configuration parameters. Note that this role uses Docker Compose to set up secrets and mount them into the container.

### Data and Network

| Parameter                 | Description                      | Status    |
|---------------------------|----------------------------------|-----------|
| foundryvtt_data_directory | Host directory to store data     |           |
| foundryvtt_port           | Host port for internal access    |           |
| foundryvtt_hostname       | Subdomain for external access    |           |

### Authentication and License Keys

| Parameter                | Description                      | Status    |
|--------------------------|----------------------------------|-----------|
| foundryvtt_username      | FoundryVTT account username      | mandatory |
| foundryvtt_password      | FoundryVTT account password      | mandatory |
| foundryvtt_admin_key     | Server admin password            |           |
| foundryvtt_license_key   | Server license key               |           |

### Server Configuration

| Parameter                 | Description                           | Status    |
|---------------------------|---------------------------------------|-----------|
| foundryvtt_release_url    | FoundryVTT server software direct URL |           |
| foundryvtt_release_tag    | FoundryVTT image release tag          |           |
| foundryvtt_minify_files   | Server flag to minify scripts         |           |
| foundryvtt_world          | Server world to load on startup       |           |
| foundryvtt_version        | FoundryVTT server software version    |           |
| foundryvtt_aws_key_id     | AWS access key ID for S3 access       |           |
| foundryvtt_aws_secret_key | AWS secret key for S3 access          |           |
| foundryvtt_aws_region     | AWS region                            |           |
| foundryvtt_aws_options    | AWS endpoint options                  |           |
