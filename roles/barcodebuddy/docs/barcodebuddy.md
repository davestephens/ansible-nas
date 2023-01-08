# Barcode Buddy

Homepage: <https://github.com/Forceu/barcodebuddy/>

Barcode Buddy for Grocy is an extension for Grocy, allowing to pass barcodes to Grocy. It supports barcodes for products and chores. If you own a physical barcode scanner, it can be integrated, so that all barcodes scanned are automatically pushed to BarcodeBuddy/Grocy.

## Usage

Set `barcodebuddy_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

Set all `barcodebuddy_*` variables in `inventories/<your_inventory>/group_vars/all.yml`.

The barcodebuddy web interface can be found at <http://ansible_nas_host_or_ip:5005>.
