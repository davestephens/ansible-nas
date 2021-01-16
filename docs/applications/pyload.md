# pyLoad

Homepage: [https://pyload.net/](https://pyload.net//)

Free and Open Source download manager written in Python and designed to be extremely
lightweight, easily extensible and fully manageable via web .

## Usage

Set `pyload_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

pyLoad's web interface can be found at http://ansible_nas_host_or_ip:8000

## Specific Configuration

Default username is `pyload` and default password is `pyload`.

In order to add or remove users, you will need to access the container from an
interactive shell (can easily be done from portainer, if installed) and enter pyLoad's
home directory `/opt/pyload` and using the command `python pyLoadCore.py -u` and follow
the on-screen prompts. More commands to configure and customize pyLoad can be found on
it's website.
