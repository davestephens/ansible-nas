# Znc

Homepage: <https://wiki.znc.in/ZNC>

ZNC is an IRC network bouncer or BNC. It can detach the client from the actual IRC server, and also from selected channels. Multiple clients from different locations can connect to a single ZNC account simultaneously and therefore appear under the same nickname on IRC. It supports Transport Layer Security connections and IPv6.

## Usage

Set `znc_enabled: true` in your `inventories/<your_inventory>/nas.yml` file. Edit `znc_*` variables to suit your needs. For more advanced needs, edit the template config file (`templates\znc.conf.j2`) directly.

Connect to ZNC using IRC at ansible_nas_host_or_ip:6677.
