
# RSS-Bridge

Homepage: <https://rss-bridge.github.io/rss-bridge/>

RSS-Bridge is a PHP project capable of generating RSS and Atom feeds for websites that don't have one. It can be used on webservers or as a stand-alone application in CLI mode.

Important: RSS-Bridge is not a feed reader or feed aggregator, but a tool to generate feeds that are consumed by feed readers and feed aggregators.

## Usage

Set `rssbridge_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

The RSS-Bridge web interface can be found at <http://ansible_nas_host_or_ip:8091>.
