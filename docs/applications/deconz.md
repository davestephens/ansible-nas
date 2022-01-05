# deCONZ

Homepage: [https://phoscon.de/en/conbee2/software](https://phoscon.de/en/conbee2/software)

deCONZ is an easy to use control software, with which you can set up and control Zigbee networks of any size without further programming effort. With the PC-based platform-independent application, you can easily and uncomplicated record all nodes in a network.

This Docker image containerizes the deCONZ software, which controls a ZigBee network using a Conbee USB or RaspBee GPIO serial interface. This image runs deCONZ in "minimal" mode, for control of the ZigBee network via the WebUIs ("Wireless Light Control" and "Phoscon") and over the REST API and Websockets, and optionally runs a VNC server for viewing and interacting with the ZigBee mesh through the deCONZ UI.


## Usage

Set `deconz_enabled: true` in your `inventories/<your_inventory>/nas.yml` file, and a compatible ZigBee gateway needs to be connected.

The deCONZ web interface can be found at http://ansible_nas_host_or_ip:8093.