---
title: "Loki"
---

Homepage: <https://grafana.com/oss/loki/>

Docker Container: [Loki](https://hub.docker.com/r/grafana/loki)

Loki is a log aggregation system designed to store and query logs from all your applications and infrastructure.

## Usage

Set `loki_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

Loki doesn't have a web interface. To see what it's doing look at the container logs from your Ansible-NAS shell:

```bash
docker logs loki -f
```
