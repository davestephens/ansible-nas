---
title: "Healthchecks.io"
---

Homepage: [https://healthchecks.io/](https://healthchecks.io/)

A simple cronjob that uses `curl` to ping a given endpoint on the `healthchecks.io` servers. You can choose how often it should ping the endpoint, and what happens when it doesn't. Email/Slack/Telegram and many more services can be integrated.

## Usage

Create your own project on [https://healthchecks.io/](https://healthchecks.io/), and set both the time between pings and the grace time. Set your prefered integration such as email.

Set `healthchecks_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file, and if your time between pings is different than the default `healthchecks_ping_minutes`, change it. Finally, set your ping url in the `healthchecks_url` variable.
