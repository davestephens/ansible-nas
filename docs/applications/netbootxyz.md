
# netboot.xyz

Homepage: <https://netboot.xyz/>

Docker Container: <https://hub.docker.com/r/linuxserver/netbootxyz>

netboot.xyz is a way to PXE boot various operating system installers or utilities from one place within the BIOS without the need of having to go retrieve the media to run the tool. [iPXE](https://ipxe.org/) is used to provide a user friendly menu from within the BIOS that lets you easily choose the operating system you want along with any specific types of versions or bootable flags.

You can remote attach the ISO to servers, set it up as a rescue option in Grub, or even set up your home network to boot to it by default so that it's always available.

## Usage

Set `netbootxyz_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

The netbooxyz web interface can be found at <http://ansible_nas_host_or_ip:3002>.
