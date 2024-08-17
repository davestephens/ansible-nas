---
title: "DDNS Updater"
---

Lightweight universal DDNS Updater with a web UI.

Homepage: [https://github.com/qdm12/ddns-updater](https://github.com/qdm12/ddns-updater)

Light container updating DNS A and/or AAAA records periodically for multiple DNS providers.

## Usage

Set `ddns_updater_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

## Specific Configuration

Ensure that the `ddns_updater_config` variable is set with your DDNS Updater configuration. The configuration is converted from YAML into JSON, required by the DDNS Updater application. Use [json2yaml](https://www.json2yaml.com/) to check your configuration format.

The following configuration:

```yaml
ddns_updater_config:
  settings:
    - provider: namecheap
      domain: example.com
      host: "@"
      password: e5322165c1d74692bfa6d807100c0310
```

...will be serialised to:

```json
{
    "settings": [
        {
            "provider": "namecheap",
            "domain": "example.com",
            "host": "@",
            "password": "e5322165c1d74692bfa6d807100c0310"
        }
    ]
}
```
