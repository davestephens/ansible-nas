---
title: "Grocy"
---

Homepage: <https://grocy.info/>

grocy is a web-based self-hosted groceries & household management solution for your home.

## Usage

Set `grocy_enabled: true` in your `inventories/<your_inventory>/nas.yml` file. Optionally, set `grocy_bbuddy_enabled: true` to install Barcode Buddy - a barcode system for Grocy.

Set all `grocy_*` variables in `inventories/<your_inventory>/group_vars/all.yml`.

The grocy web interface can be found at <http://ansible_nas_host_or_ip:9283>.
Optionally, Barcode Buddy interface can be found at <http://ansible_nas_host_or_ip:9284>.
