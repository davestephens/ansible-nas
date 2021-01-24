# Deluge

[Deluge](http://deluge-torrent.org/) is a lightweight, Free Software, cross-platform BitTorrent client.

* Full Encryption
* WebUI
* Plugin System
* Much more...


[![deluge](https://avatars2.githubusercontent.com/u/6733935?v=3&s=200)](http://deluge-torrent.org/)


## Usage

Set `deluge_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

Deluge's web interface can be found at http://ansible_nas_host_or_ip:8112

Upon first viewing you will be prompted for a password. The default is `deluge` It is recommended that you change this password in the preferences menu.

**Please note that having multiple downloaders watching the same watchfolder, problems may occur.**

## Specific Configuration

The admin interface is available at `http://SERVER-IP:32030` with a default user/password of admin/deluge.

To change the password (recommended) log in to the web interface and go to Preferences->Interface->Password.

Change the downloads location in the webui in Preferences->Downloads and use /downloads for completed downloads.


**This information was compiled from `https://dev.deluge-torrent.org/` & `https://github.com/linuxserver/docker-deluge/blob/master/README.md`


## Advanced
**The Parameters are informational for advanced users only.**

## Parameters

| Parameter | Function |
| :----: | --- |
| `network: bridge` | Shares host networking with container, **required**. |
| `PUID: "{{ deluge_user_id }}"` | for UserID - see below for explanation |
| `PGID: "{{ deluge_group_id }}"` | for GroupID - see below for explanation |
| `TZ: "{{ deluge_timezone }}"` | Specify a timezone to use |
| `UMASK_SET: 022` | for umask setting of deluge, default if left unset is 022 *not used by ansible-nas by default* |
| `DELUGE_LOGLEVEL: error` | set the loglevel output when running Deluge, default is info for deluged and warning for delgued-web *not used by ansible-nas by default* |
| `volumes: "{{ deluge_config_directory }}:/config:rw"` | deluge configs |
| `volumes: "{{ deluge_download_directory }}:/root/Downloads:rw"` | torrent download directory |


## User / Group Identifiers

When using volumes (`-v` flags) permissions issues can arise between the host OS and the container, we avoid this issue by allowing you to specify the user `PUID` and group `PGID`.

Ensure any volume directories on the host are owned by the same user you specify and any permissions issues will vanish like magic.

In this instance `PUID=1000` and `PGID=1000`, to find yours use `id user` as below:

```
  $ id username
    uid=1000(dockeruser) gid=1000(dockergroup) groups=1000(dockergroup)
```
