# Changedetection.io

Homepage: [https://github.com/dgtlmoon/changedetection.io](https://github.com/dgtlmoon/changedetection.io)

The best and simplest self-hosted free open source website change detection, monitor and notification service. Restock Monitor, change detection. Designed for simplicity - the main goal is to simply monitor which websites had a text change for free. Free Open source web page change detection, Restock Monitoring, Visualping and Apify alternative.

## Usage

Set `changedetection_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

Optionally you can enable WebDriver with `changedetection_webdriver_enabled` and Playwright with `changedetection_playwright_enabled`.

changedetection web interface can be found at [http://ansible_nas_host_or_ip:5003](http://ansible_nas_host_or_ip:5003).
