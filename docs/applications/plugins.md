# plugins

Ansible NAS supports custom plugins created specifically for Ansible NAS by independent developers.

## Usage

Set `plugins_enabled: true` in your `inventories/<your_inventory>/nas.yml` file to enable the plugins feature.

## Specific Configuration

Enabling a plugin can be as easy as setting `<plugin_name>_enabled: true` in your `inventories/<your_inventory>/nas.yml` file, but every plugin is different. You will need to read the plugin's documentation to find out any other configuration options.

**NOTE:** Ansible NAS plugins are created by independent developers and are not endorsed, sponsored, or supported in any way by the author of Ansible NAS. Please contact the plugin's developer for any and all support.
