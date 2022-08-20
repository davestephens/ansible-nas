# Duplicacy Cloud Backup

Homepage: <https://duplicacy.com/>

Duplicacy is a next-generation, cross-platform, cloud backup tool. Duplicacy backs up your files to many cloud storages with client-side encryption and the highest level of deduplication.

## Usage

Set `duplicacy_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

Duplicacy's web interface can be found at <http://ansible_nas_host_or_ip:3875>.

## Specific Configuration

The Duplicacy Web UI container has a number of configurations
