---
title: "Logging"
---

The logging stack sets up a fully functional application logging capture and search service based on [Loki](https://grafana.com/oss/loki/), viewable via Grafana.

To enable it, add the following to your `inventories/<your_inventory>/group_vars/nas.yml`:

```yaml
logging_stack_enabled: true
```

Which is equivalent to:

```yaml
minio_enabled: true
loki_enabled: true
promtail_enabled: true
grafana_enabled: true
```

Once set up, all container stdout logs will be captured and stored. You'll find the Loki data source available in Grafana.

Read more:

- [Grafana](../observability/grafana.md)
- [Loki](../system-tools/loki.md)
- [Minio](../system-tools/minio.md)
- [Promtail](../system-tools/promtail.md)
