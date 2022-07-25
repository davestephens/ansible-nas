# wallabag

Homepage: <https://www.wallabag.org/>

wallabag is a self-hostable PHP application allowing you to not miss any content anymore. Click, save and read it when you can. It extracts content so that you can read it when you have time.

## Usage

Set `wallabag_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

If you want to access wallabag externally, don't forget to set `wallabag_available_externally: "true"` in your `inventories/<your_inventory>/nas.yml` file.

I recommend using the mobile app, which will sync with this installation so you have access to your saved articles even if you don't have signal or wifi access.

The default credentials are wallabag:wallabag

The wallabag web interface can be found at <http://ansible_nas_host_or_ip:7780>.
