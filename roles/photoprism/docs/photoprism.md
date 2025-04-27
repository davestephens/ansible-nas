# Photoprism

Homepage: <https://photoprism.app>

PhotoPrism® is an AI-Powered Photos App for the Decentralized Web.

It makes use of the latest technologies to tag and find pictures automatically without getting in your way. You can run it at home, on a private server, or in the cloud.

## Usage

Set `photoprism_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

The Photoprism web interface can be found at <http://ansible_nas_host_or_ip:2342>.

## Specific Configuration

> Usually Photoprism has some spikes of memory when you are uploading a lot of pictures at the same time. Take that in consideration before deplying it.

Make sure you change photoprism username and password in your nas.yml config file!

* photoprism_admin_user: admin
* photoprism_admin_password: insecure

To run together with a database instead of SQLite, which is recommended by Photoprism, you can change this setup. To do it, you must already have a database running and also specify the following variables in your own nas.yml file:

* photoprism_database_driver: mariadb/mysql
* photoprism_database_server: "ip/sqlserver"
* photoprism_database_name: "photoprism_db"
* photoprism_database_user: "mydbuser"
* photoprism_database_password: "insecure"
