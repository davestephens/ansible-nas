# Kibana

Homepage: [https://opendistro.github.io/for-elasticsearch-docs/docs/kibana/](https://opendistro.github.io/for-elasticsearch-docs/docs/kibana/)

Kibana is the default visualization tool for data in Elasticsearch.

## Usage

Set `logging_enabled: true` in your `group_vars/all.yml` file.

Kibana can be found at http://ansible_nas_host_or_ip:5601.

More info on the Ansible-NAS logging stack can be found [here](logging).

## Specific Configuration

The default username and password is `admin`, see [here](https://opendistro.github.io/for-elasticsearch-docs/docs/install/docker-security/#change-passwords-for-read-only-users) for instructions how to change it.