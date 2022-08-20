# Nodemation (n8n)

Homepage: <https://n8n.io>

Extendable workflow automation tool that enables you to connect anything to everything. More pragrmatically, it helps you interconnect API with each other to build your own information / work flows.

## Usage

Set `n8n_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

n8n is secured by default, he user and password can be set with:

```yaml
    n8n_basic_auth_user: "<user name>"
    n8n_basic_auth_password: "<user password>"
```

The default for these is "n8n_user" and "n8n_change_me" respectively, it is recommended to change these.
