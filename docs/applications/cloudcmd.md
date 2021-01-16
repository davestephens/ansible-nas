# Cloud Commander file manager

Homepage: [https://cloudcmd.io/](https://cloudcmd.io/)

Cloud Commander is a file manager for the web. It includes a command-line console and a
text editor. Cloud Commander helps you manage your server and work with files,
directories and programs in a web browser from any computer, mobile or tablet.

## Usage

Set `cloudcmd_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

By default your the root of your Ansible-NAS box (`/`) is mounted into `/mnt/fs` within
the container. If you'd like to change this update `cloudcmd_browse_directory` in your
`inventories/<your_inventory>/nas.yml` file.

If you enable external access to Cloud Commander (note that this is not recommended)
then ensure you configure authorisation within the application (F10 from the main menu).
