---
title: "Promtail"
---

Homepage: <https://grafana.com/docs/loki/latest/clients/promtail/>

Docker image: [Promtail](https://hub.docker.com/r/grafana/promtail)

Promtail is an agent which ships the contents of local logs to a private Grafana Loki instance or Grafana Cloud. It is usually deployed to every machine that has applications needed to be monitored.

It primarily:

- Discovers targets
- Attaches labels to log streams
- Pushes them to the Loki instance.

## Usage

Set `promtail_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

To see what Promtail is doing (and what containers it has discovered for tailing), visit the web interface at at <http://ansible_nas_host_or_ip:9080>.
