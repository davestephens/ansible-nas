
# Heimdall

Homepage: <https://heimdall.site/>

Heimdall Application Dashboard is a dashboard for all your web applications. It doesn't need to be limited to applications though, you can add links to anything you like

## Usage

Set `heimdall_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

The Heimdall web interface can be found at <http://ansible_nas_host_or_ip:10080>.

## Specific Configuration

Heimdall defaults to port 10080 - some browsers block this port. Override `heimdall_port_http` to move it somewhere else.
