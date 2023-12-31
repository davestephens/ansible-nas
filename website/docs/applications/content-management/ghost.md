---
title: "Ghost"
description: "A powerful app for new-media creators to publish, share, and grow a business around their content"
---

Homepage: [https://ghost.org/](https://ghost.org/)

Ghost is a powerful app for new-media creators to publish, share, and grow a business around their content. It comes with modern tools to build a website, publish content, send newsletters & offer paid subscriptions to members.

## Usage

Set `ghost_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.
Set all the `ghost_*` environment variables in your inventory, especially the mail related ones. Refer to [Ghost documentaion](https://ghost.org/docs/config/) for configuration details.

Ghost web interface can be found at [http://ansible_nas_host_or_ip:2368](http://ansible_nas_host_or_ip:2368). Wait for initialization to finish and then login to admin interface to setup your Ghost instance: <http://ansible_nas_host_or_ip:2368/ghost>, starting from admin user.

By default Ghost uses local storage to store your uploaded media files. If you want to use Cloudinary for that, you can use my own Ghost image with built-in Cloudinary Storage Connector. Just set `ghost_image_name: anarion/ghost_cloudinary` in your inventory and update your Cloudinary account details in relevant environment varialbes.
