# Rust Desk

Homepage: <https://rustdesk.com>

RustDesk is a full-featured remote desktop app. Works on Windows, macOS, Linux, iOS, Android, Web. Supports VP8 / VP9 / AV1 software codecs, and H264 / H265 hardware codecs. Own your data, easily set up self-hosting solution on your infrastructure. P2P connection with end-to-end encryption based on NaCl.

## Usage

Set `rustdesk_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

The Rust Desk does not have web interface.

## Specific Configuration

Once Ansible-NAS has started the application you are ready to go. Just install the app on any system you want to remote and change only the ID Server to your rustdesk.domain.com or the ip of the Ansible-NAS Server.