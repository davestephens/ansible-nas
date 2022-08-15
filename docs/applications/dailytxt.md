# DailyTxt

Homepage: <https://github.com/PhiTux/DailyTxT>

DailyTxT is an encrypted Diary Web-App to write down your stories of the day and to find them again easily. It is written in Python Flask (Backend) and Vue.JS (Frontend) and meant to be run by Docker.

## Usage

Set `dailytxt_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

The DailyTxt web interface can be found at <http://ansible_nas_host_or_ip:8766>.

## Specific Configuration

You may want to set `dailytxt_allow_registration: "false"` in your `inventories/<your_inventory>/nas.yml` file to prevent new registrations if you expose DailyTxt to the Internet; do this after you've created your account.

You may want to set 'dailytxt_hostname:' to '"dairy"' or '"journal"' in your `inventories/<your_inventory>/nas.yml` for a more intuitive hostname.
