# Gotify

Homepage: [https://gotify.net/](https://gotify.net/)

Docker Container: [https://hub.docker.com/r/gotify/server](https://hub.docker.com/r/gotify/server)

Gotify is a simple server for sending and receiving messages.

## Usage

Set `gotify_enabled: true` in your `group_vars/all.yml` file.

If you want to access Gotify externally, don't forget to set `gotify_available_externally: "true"` in your `group_vars/all.yml` file.

If you want to change the default port, edit `gotify_port_http:` in your `group_vars/all.yml` file.

The Gotify web interface can be found at http://ansible_nas_host_or_ip:8077 and http://ansible_nas_host_or_ip:8078 (internally).

Android client: [https://play.google.com/store/apps/details?id=com.github.gotify](https://play.google.com/store/apps/details?id=com.github.gotify)
iOS client: n/a
Chrome extension: n/a
Firefox extension: [https://addons.mozilla.org/en-US/firefox/addon/gotify-for-firefox/](https://addons.mozilla.org/en-US/firefox/addon/gotify-for-firefox/)
root@SuperNAS:~/ansible-nas/docs/applications#
