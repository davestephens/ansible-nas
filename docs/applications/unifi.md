
# UniFi Network Application

Homepage: [https://help.ui.com/hc/en-us/articles/360012282453](https://help.ui.com/hc/en-us/articles/360012282453)

UniFi Network Application is used to control UniFi Network devices from Ubiquiti.

## Usage

Set `unifi_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

UniFi runs as UID/GID 999 which is allocated to `systemd-coredump` on Ubuntu.
If necessary, create user and group with id 999, and define the user as
`unifi_user` and `unifi_group` respectively.

The defaults are

```yaml
unifi_user: "systemd-coredump"
unifi_group: "systemd-coredump"
```

Timezone setting defaults to `ansible_nas_timezone`, but you can override it
by setting `unifi_timezone`.

The UniFi web interface can be found at https://ansible_nas_host_or_ip:8443.
Note that you need to use HTTPS in order for the initial setup and device
adoption to go through.
