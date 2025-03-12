---
title: "CouchDB"
---

Homepage: [https://couchdb.apache.org/](https://couchdb.apache.org/)

Apache CouchDB is an open-source, document-oriented NoSQL database, implemented in Erlang.

CouchDB uses multiple formats and protocols to store, transfer, and process its data. It uses JSON to store data, JavaScript as its query language using MapReduce, and HTTP for an API.

## Usage

Set `couchdb_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

Tread carefully.

The CouchDB API can be found at [http://ansible_nas_host_or_ip:5984](http://ansible_nas_host_or_ip:5984). Its web interface, Fauxton, is located at [http://ansible_nas_host_or_ip:5984/_utils](http://ansible_nas_host_or_ip:5984/_utils)

You must specify the default adminstrator username and password, but all other configuration -- **including authentication and authorization** -- is left to either files in the `config` directory or subsequent API calls.  Read more about setup and configuration on the [Apache CouchDB documentation](https://docs.couchdb.org/en/stable/index.html) site.

| Parameter | Default |
| --- | --- |
| `couchdb_admin_user` | `admin` |
| `couchdb_admin_password` | `changeme` |

The contents of the `config` directory are mounted to the container's `local.d` directory; see the [Configuration files](https://docs.couchdb.org/en/stable/config/intro.html#configuration-files) documentation.
