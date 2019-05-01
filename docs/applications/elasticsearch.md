# Elasticsearch

Homepage: [https://opendistro.github.io/for-elasticsearch/](https://opendistro.github.io/for-elasticsearch/)

An Apache 2.0-licensed distribution of Elasticsearch enhanced with enterprise security, alerting, SQL, and more.

## Usage

Set `logging_enabled: true` in your `group_vars/all.yml` file.

Elasticsearch can be found at https://ansible_nas_host_or_ip:9200.

More info on the Ansible-NAS logging stack can be found [here](logging).

## Specific Configuration

The default username and password is `admin`, see [here](https://opendistro.github.io/for-elasticsearch-docs/docs/install/docker-security/#change-passwords-for-read-only-users) for instructions how to change it.