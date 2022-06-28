
# FreshRSS

Homepage: [https://freshrss.org/](https://freshrss.org/)

FreshRSS is a self-hosted RSS feed aggregator like Leed or Kriss Feed.

It is lightweight, easy to work with, powerful, and customizable.

It is a multi-user application with an anonymous reading mode. It supports custom tags. There is an API for (mobile) clients, and a Command-Line Interface.

Thanks to the WebSub standard (formerly PubSubHubbub), FreshRSS is able to receive instant push notifications from compatible sources, such as Mastodon, Friendica, WordPress, Blogger, FeedBurner, etc.

FreshRSS natively supports basic Web scraping, based on XPath, for Web sites not providing any RSS / Atom feed.

Finally, it supports extensions for further tuning.

## Usage

Set `freshrss_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

The FreshRSS web interface can be found at http://ansible_nas_host_or_ip:8089.
