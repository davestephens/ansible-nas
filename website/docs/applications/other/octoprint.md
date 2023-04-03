---
title: "Octoprint"
---
Homepage: <https://octoprint.org/>

Octoprint is a control and monitoring application for your 3D printer. You can start and stop print jobs, view your webcam feed, move the print head and extruder manually and check your gcode files, all from a single web interface. Octoprint doesn't require modifications on the printer firmware, just make sure your NAS is phisically connected to it with a usb cable.

## Usage

Connect the printer to your NAS, and take note of where the serial interface is mounted (usually it's automounted in `/dev/ttyUSB0`). Set `octoprint_enabled: true` in your `inventories/<your_inventory>/nas.yml` file, as well as the `octoprint_printer_mountpoint` variable if your printer doesn't mount to the default location.

If you want to also have a webcam feed, attach one to your NAS and take note of its mountpoint as well (usually `/dev/video0`). Set `octoprint_enable_webcam: true` and add a `octoprint_webcam_mountpoint` variable if the webcam doesn't mount to the default location.
