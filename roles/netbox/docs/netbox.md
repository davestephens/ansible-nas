# NetBox

Homepage: [https://netbox.dev/](https://netbox.dev/)

NetBox is the source of truth for everything on your network, from physical components like power systems and cabling to virtual assets like IP addresses and VLANs. Network automation and monitoring tools draw from this authoritative plan to push out configurations and monitor changes across the enterprise.

## Usage

Set `netbox_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

Set all relevant `netbox_*` variables in `inventories/<your_inventory>/group_vars/all.yml`.

The whole application will be available after a few minutes. Open the URL [http://ansible_nas_host_or_ip:8099/](http://ansible_nas_host_or_ip:8099/) in a web-browser. You should see the NetBox homepage. In the top-right corner you can login. The default credentials are:

- Username: admin
- Password: admin
- API Token: 0123456789abcdef0123456789abcdef01234567

## Optional Configuration

You can enable `netbox_backup_enabled` to install a backup script, that will backup NetBox data periodically, running as a cron job.
After setting up basic NetBox instance and creating an API Token in NetBox, you can then enable `netbox_device_type_library_import`, set relavent `netbox_import*` variables and run the playbook again to populate NetBox database with seletecd device types automatically.
