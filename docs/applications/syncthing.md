# Syncthing

Homepage: [https://syncthing.net](https://syncthing.net)
Documentation: [https://docs.syncthing.net](https://docs.syncthing.net)

Syncthing is a continuous file synchronization program. It synchronizes files between two or more computers in real time, safely protected from prying eyes.

## Usage

Set `syncthing_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

Syncthing's web interface can be found at http://ansible_nas_host_or_ip:8085.
You can change Syncthing's web interface by setting `syncthing_ui_port`.

## Quick startup
This is not intended to be a complete guide nor does cover every setup possible. This quick startup guide assumes that your ansible-nas is the 'source of truth' of your data, and you don't already have duplicates of data on other machines that will join your Syncthing network.

1. Open Syncthing web interface by going on http://ansible_nas_host_or_ip:8085
2. Set the hostname of your Synchting first node (Actions -> Settings -> General -> Device Name)
3. Set a username and password (Actions -> Settings -> GUI -> GUI Authentication User/GUI Authentication Password)
4. Set your NAS as `introducer` (Actions -> Advanced -> Device -> Check `introducer`). More on introducers in the Syncthing documentation (https://docs.syncthing.net/users/introducer.html)
5. Add your first folder to share by going on `Add Folder` on the main screen. In this example, we will share the `Music folder`. Set the `Folder Label` to `Music` and set the `Folder Path` to `/data1/music/`. The path `/data1` correspond to the variable `syncthing_data_directory` in all.yml, and by default, it uses the variable `samba_shares_root`
6. If Syncthing is already installed on another machine, you can hit `Add Remote Device`, add the Device ID of your remote device, select the folder to share (in the `Sharing` tab) and click `Save`. If both devices are on the same network, the discovered device ID should be clickable undter the field `Device ID`.
7. On the remote device, you have to accept the remote device AND the share. This process can take few minutes.