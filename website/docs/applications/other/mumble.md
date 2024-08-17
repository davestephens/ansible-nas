# Mumble

Homepage: [https://www.mumble.info/](https://www.mumble.info/)

Mumble is a free, open source, low latency, high quality voice chat application.

## Usage

Set `mumble_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.
The configuration here applies a server password, via `mumble_server_password`, to
the Mumble instance, so that if you make this application available externally it won't be
accessible to everyone by default. That being said, it is **strongly** encouraged that
you change this value to something unique.

Clients can then connect to the service at `ansible_nas_host_or_ip:64738` using the
password that you've definitely changed.
