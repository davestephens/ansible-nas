---
title: "Photoprism"
description: "AI-Powered Photos App for the Decentralized Web"
---

Homepage: [https://www.photoprism.app/](https://www.photoprism.app/)

PhotoPrism® is an AI-Powered Photos App for the Decentralized Web.

It makes use of the latest technologies to tag and find pictures automatically without getting in your way. You can run it at home, on a private server, or in the cloud.

## Usage

Set `photoprism_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

Photoprism web interface can be found at [http://ansible_nas_host_or_ip:2342](http://ansible_nas_host_or_ip:2342). Login with `photoprism_admin_user` and `photoprism_admin_password`.

Photoprism has many configration options. Most of them are defined as variables in the role so that you can just use the defaults or overload them in you inventory file. For more advanced configuration create `photoprism_optional_env` dictionary in your inventory and add any Photoprism environment variables you need. Please check [Phootoprism documentation](https://docs.photoprism.app/getting-started/config-options/) for details.
