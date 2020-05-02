
# MakeMKV

Homepage: [https://www.makemkv.com/](https://www.makemkv.com/)
Docker Container: [https://hub.docker.com/r/djaydev/krusader](https://hub.docker.com/r/djaydev/krusader)

MakeMKV is your one-click solution to convert video that you own into free and patents-unencumbered format that can be played everywhere. MakeMKV is a format converter, otherwise called "transcoder". It converts the video clips from proprietary (and usually encrypted) disc into a set of MKV files, preserving most information but not changing it in any way. The MKV format can store multiple video/audio tracks with all meta-information and preserve chapters. There are many players that can play MKV files nearly on all platforms, and there are tools to convert MKV files to many formats, including DVD and Blu-ray discs.

## Usage

Set `makemkv_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

The MakeMKV web interface can be found at http://ansible_nas_host_or_ip:5802.

Drop ISOs in /drop/rip and after you rip them they'll be in /drop/ripped
