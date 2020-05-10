
# Logitech Media Server

Homepage: [https://mysqueezebox.com/download](https://mysqueezebox.com/download)
Docker Container: [https://hub.docker.com/r/dlandon/logitechmediaserver](https://hub.docker.com/r/dlandon/logitechmediaserver)

Logitech Media Server is the server software that powers audio players from Logitech (formerly known as SlimDevices), including Squeezebox 3rd Generation, Squeezebox Boom, Squeezebox R$

## Usage

Set `logitechmediaserver_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.
If you are using Portainer, you must change the default port, as 9000 is a hard requirement for Logitech Media Server.

The Logitech Media Server web interface can be found at http://ansible_nas_host_or_ip:9000.
