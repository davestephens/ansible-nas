# TVHeadend

Homepage: [https://tvheadend.org/](https://tvheadend.org/)

Tvheadend is a TV streaming server and recorder for Linux, FreeBSD and Android supporting DVB-S, 
DVB-S2, DVB-C, DVB-T, ATSC, ISDB-T, IPTV, SAT>IP and HDHomeRun as input sources.

## Usage

Set `tvheadend_enabled: true` in your `inventories/<your_inventory>/nas.yml` file. There are further
parameters you can edit such as `tvheadend_hw_accel` and `tvheadend_hw_dvb` lower down. 

## Specific Configuration

The TVHeadend web interface can be found at port 9981 (http) of your NAS.

There is a dedicated folder / share for recordings that TVHeadend uses. You can change this by 
setting `tvheadend_recordings_directory`.

If you want to enable hardware acceleration, you can set `tvheadend_hw_accel` to `true`. The play 
will then add the device / folder '/dev/dri' to the list of docker volumes. This is disabled by default.

If you want to pass a physical dvb tuner card, you can set `tvheadend_hw_dvb` to `true`. The play 
will then add the device / folder '/dev/dvb' to the list of docker volumes. This is disabled by default.

For discovery of local IPTV services, you may need to change the network mode of the docker container to
 `host`, default is 'bridge'.

It is possible to pin the version of the Docker images by setting `tvheadend_version` to the desired tag.
 Note that the linuxserver.io images are used for TVHeadend.
