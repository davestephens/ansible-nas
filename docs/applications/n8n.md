# Nodemation (n8n)

Extendable workflow automation tool that enables you to connect anything to everything. More pragrmatically, it helps you interconnect API with each other to build your own information / work flows.

Homepage: [https://n8n.io](https://n8n.io)


## Usage

Set `n8n_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

n8n is secured by default, he user and password can be set with:
* n8n_basic_auth_user: "<user name>"
* n8n_basic_auth_password: "<user password>"

The default for these is "n8n_user" and "n8n_change_me" respectively, it is recommended to change these.
