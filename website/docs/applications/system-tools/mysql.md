---
title: "MySql"
description: "The world's most popular open source database"
---

Homepage: [https://www.mysql.net/> / <https://mariadb.org/](https://www.mysql.net/> / <https://mariadb.org/)

MySQL is an open-source relational database management system (RDBMS).
MariaDB Server is one of the most popular open source relational databases. It’s made by the original developers of MySQL and guaranteed to stay open source. It is part of most cloud offerings and the default in most Linux distributions.

## Usage

Set `mysql_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file and set `mysql_db_type` to the type of database you want: either `mysql` or `mariadb`.
Set `mysql_adminer_enabled: true` to also install Adminer - a database management utility. Adminer web interface can be found at [http://ansible_nas_host_or_ip:8098](http://ansible_nas_host_or_ip:8098).
