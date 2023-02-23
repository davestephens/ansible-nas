---
title: "phpMyAdmin"
description: "MySQL/MariaDB administration tool"
---

Homepage: <https://www.phpmyadmin.net/>

phpMyAdmin is a free software tool written in PHP, intended to handle the administration of MySQL over the Web.

## Usage

Set `phpmyadmin_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

phpmyadmin web interface can be found at <http://ansible_nas_host_or_ip:8097>.

Set `phpmyadmin_databases` to a list of container names that you want to have available as selection of servers to connect to via phpMyAdmin.
Set `phpmyadmin_arbitrary` to `true` to be able to enter an arbitrary address of a server to connect to. Be mindful about docker network routing and therefore network host reachability.
