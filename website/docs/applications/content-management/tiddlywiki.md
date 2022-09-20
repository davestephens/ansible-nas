---
title: "TiddlyWiki"
description: "A notebook for capturing, organizing, and sharing information"
---

Homepage: <https://www.tiddlywiki.com/>

TiddlyWiki is a unique non-linear notebook for capturing, organizing, and sharing complex information. Use it to keep your to-do list, to plan an essay or novel, or to organise your wedding. Record every thought that crosses your brain, or build a flexible and responsive website. Unlike conventional online services, TiddlyWiki lets you choose where to keep your data, guaranteeing that in the decades to come you will still be able to use the notes you take today.

## Usage

Set `tiddlywiki_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

If you want to access TiddlyWiki externally, set `tiddlywiki_available_externally: true` in your `inventories/<your_inventory>/nas.yml` file.

The TiddlyWiki web interface can be found at <http://ansible_nas_host_or_ip:8092>.

## Specific Configuration

The TiddlyWiki role has several configuration parameters. All parameters are optional.

### Data and Networking

| Parameter                 | Description                   |
|---------------------------|-------------------------------|
| tiddlywiki_data_directory | Host location to store data   |
| tiddlywiki_port           | Host port for internal access |
| tiddlywiki_hostname       | Subdomain for external access |

### Server Configuration

| Parameter              | Description              |
|------------------------|--------------------------|
| tiddlywiki_username    | Basic Auth username      |
| tiddlywiki_password    | Basic Auth password      |
| tiddlywiki_node_memory | NodeJS memory allocation |
| tiddlywiki_debug_level | Service debugging        |
