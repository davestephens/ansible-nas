
# Flaresolverr

Homepage: <https://github.com/FlareSolverr/FlareSolverr>

FlareSolverr is a proxy server to bypass Cloudflare and DDoS-GUARD protection.

FlareSolverr starts a proxy server, and it waits for user requests in an idle state using few resources. When some request arrives, it uses puppeteer with the stealth plugin to create a headless browser (Firefox). It opens the URL with user parameters and waits until the Cloudflare challenge is solved (or timeout). The HTML code and the cookies are sent back to the user, and those cookies can be used to bypass Cloudflare using other HTTP clients.

## Usage

Set `flaresolverr_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

This application can be easily integrated in your favorite indexer of choice (Jackett and Prowlarr tested). Simply add an entry in the dedicated field (Jackett) or in the Settings/Indexers/Indexer Proxies (Prowlarr), using as host <http://ansible_nas_ip_or_hostname:8191>.
