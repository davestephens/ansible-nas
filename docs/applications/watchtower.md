# Watchtower

Homepage: [https://github.com/v2tec/watchtower](https://github.com/v2tec/watchtower)

A process for watching your Docker containers and automatically updating and restarting them whenever their base image is refreshed.

## Usage

Set `watchtower_enabled: true` in your `group_vars/all.yml` file.

## Specific Configuration

By default Watchtower is configured to check daily at 5am for updates.

Various notification options are available, and can be configured by updating `watchtower_command` in your `group_vars/all.yml` file. A few examples are provided. The full set of options can be found at the [Watchtower GitHub project page](https://github.com/v2tec/watchtower).
