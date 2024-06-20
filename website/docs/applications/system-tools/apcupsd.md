---
title: "Apcupsd"
---

Homepage: [http://www.apcupsd.org/](http://www.apcupsd.org/)

A daemon that manages and monitors a Connected APC UPS Device, which has the ability to gracefully shut down the host computer in the event of a power outage.

## Usage

1. Set `apcupsd_enabled: true` in your `inventories/<your_inventory>/nas.yml` file
2. Set `apcupsd_device` variable to connected UPS device path (e.g `apcupsd_device: "/dev/usb/hiddev0"`) in your `inventories/<your_inventory>/nas.yml` file.

In addition, the following parameters can be overridden  in your `inventories/<your_inventory>/nas.yml` file:

* `apcupsd_onbatterydelay` - the time in seconds from when a power failure is detected until we react to it with an onbattery event
* `apcupsd_batterylevel` - if during a power failure, the remaining battery percentage is below or equal to BATTERYLEVEL, apcupsd will initiate a system shutdown
* `apcupsd_minutes` - if during a power failure, the remaining runtime in minutes is below or equal to MINUTES, apcupsd, will initiate a system shutdown
* `apcupsd_timeout` - if during a power failure, the UPS has run on batteries for TIMEOUT many seconds or longer, apcupsd will initiate a system shutdown. A value of 0 disables this timer
* `apcupsd_annoy` - time in seconds between annoying users to signoff prior to system shutdown. 0 disables
* `apcupsd_annoydelay` - initial delay after power failure before warning users to get off the system
* `apcupsd_nologon` - the condition which determines when users are prevented from logging in during a power failure. Possible values: [`disable` | `timeout` | `percent` | `minutes` | `always`]
* `apcupsd_killdelay` - if KILLDELAY is non-zero, apcupsd will continue running after a shutdown has been requested, and after the specified time in seconds attempt to kill the power. This is for use on systems where apcupsd cannot regain control after a shutdown

Apcupsd's exposed netserver default port is 3551, which can be used to collect UPS events and data.
