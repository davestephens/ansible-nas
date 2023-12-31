# Standard Notes

Homepage: [https://standardnotes.com/](https://standardnotes.com/)

Standard Notes is a free, secure note-taking app with powerful end-to-end encryption, unparalleled privacy features, and seamless cross-platform syncing on unlimited devices.

## Usage

Set `standardnotes_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file to install Standard Notes sync server.

Standard Notes sync server interface can be then found at [http://ansible_nas_host_or_ip:3011](http://ansible_nas_host_or_ip:3011).

Optionally, set `standardnotes_app_client_enabled: true` to install Standard Notes Client Web App.

After server installation and creating of admin user, set `standardnotes_subscription_email` to the admin user email, set `standardnotes_enable_subscription: true` and re-run the playbook to enable subscription features.
