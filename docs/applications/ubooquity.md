# Ubooquity Comic and Book Server

Homepage: <https://vaemendis.net/ubooquity/>

Documentation: <https://vaemendis.github.io/ubooquity-doc/>

Docker Image: <https://hub.docker.com/r/linuxserver/ubooquity/>

Ubooquity is a free, lightweight and easy-to-use home server for your comics and ebooks. Use it to access your files from anywhere, with a tablet, an e-reader, a phone or a computer.

## Usage

Set `ubooquity_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

Access the webui at http://<server>:2202/ubooquity by default. See specific configuration section below for information on setting up external access.

## Specific Configuration

Important note: if you want to access Ubooquity externally through Traefik (at ubooquity.yourdomain.tld), you need to go to <http://ansible_nas_host_or_ip:2203/ubooquity/admin> and set the reverse proxy prefix to blank under "Advanced". Otherwise you will need to append "/ubooquity" to the url in order to access.

### Admin login

The admin portal is not exposed through Traefik. You can access the admin portal on port 2203.

Upon your first run, the address is <http://ansible_nas_host_or_ip:2203/ubooquity/admin>. You will be able to set the admin password here.
