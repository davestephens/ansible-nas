# Homepage

Homepage: <https://gethomepage.dev>

A modern, fully static, fast, secure fully proxied, highly customizable application dashboard with integrations for over 100 services and translations into multiple languages. Easily configured via YAML files or through docker label discovery.

## Usage

Set `homepage_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.
Edit all the necessary config files in `files/config` folder according to [Homepage configuration guide](https://gethomepage.dev/v0.7.2/configs/) and run the playbook.

Homepage web interface can be found at <http://ansible_nas_host_or_ip:3010>.
