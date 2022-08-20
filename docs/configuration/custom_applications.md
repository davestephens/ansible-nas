# Custom Applications

## Using Portainer

Ensure that you have `portainer_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file, then run the playbook so that Portainer is up and running.

Hit Portainer on <http://ansible_nas_host_or_ip:9000>. You can now deploy an 'App Template' or head to 'Containers' and manually enter container configuration.

## Using a Custom Ansible Task

TODO: Needs to be docced
