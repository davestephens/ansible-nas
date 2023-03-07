# Wger

Homepage: <https://wger.de/>

wger Workout Manager is a free, open source web application that manages your exercises, workouts and nutrition. It started as a pet project of mine to replace my growing collection of different spreadsheets, but it has become something other people could also find useful.

## Usage

Set `wger_enabled: true` in your `inventories/<your_inventory>/nas.yml` file. Set all relevant `wger_*` env variables as defined in `defaults\main.yml`.

wger web interface can be found at <http://ansible_nas_host_or_ip:8108>. Wait for the application to initialize and then log in as: `admin`, password `adminadmin`.
