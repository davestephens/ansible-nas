---
title: "Dashy"
---

Homepage: [https://dashy.to](https://dashy.to)

Dashy is an open source, highly customizable, easy to use, privacy-respecting dashboard app.
It's packed full of useful features, to help you build your perfect dashboard. Including status checks, keyboard shortcuts, dynamic widgets, auto-fetched favicon icons and font-awesome support, built-in authentication, tons of themes, an interactive config editor, many display layouts plus loads more.
All the code is free and open source, and everything is thoroughly documented, you can get support with any questions on GitHub.

## Usage

Set `dashy_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

The Dashy web interface can be found at [http://ansible_nas_host_or_ip:8082](http://ansible_nas_host_or_ip:8082).

## Specific Configuration

If you are using domain name (suppose, all your apps are using `<subdomain>.example.com`), but for your main dashboard you want it to be just `example.com` (without subdomain), you can achieve this by setting `dashy_hostname` to an empty, i.e. `dashy_hostname: ''`
