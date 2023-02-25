# Minetest Server

Homepage: <https://www.minetest.net/>

An open source voxel game engine. Play one of our many games, mod a game to your liking, make your own game, or play on a multiplayer server.

## Usage

Set `minetest_server_enabled: true` in your `inventories/<your_inventory>/nas.yml` file. The whole `minetest.conf` is templated with some basic settings exposed as inventory variables. If you need to edit more settings, then just edit the `templates/minetest.conf.j2` file.

Minetest server will be available at <http://ansible_nas_host_or_ip:30000>.
