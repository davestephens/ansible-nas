# Nodemation (n8n)

Homepage: [ihttps://n8n.io](https://n8n.io)


## Usage

Set `n8n_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

Set `n8n_secured: "true"` if you want to limit access to the workflows. The user and password can be set with:
* n8n_basic_auth_user: "<user name>"
* n8n_basic_auth_password: "<user password>"

The default for these is "n8n_user" and "n8n_password" respectively, it is recommended to change these.

If `n8n_externally_available: "true"` then the instance will automatically be secured.

