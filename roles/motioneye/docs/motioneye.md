# motionEye

Homepage: <https://github.com/motioneye-project/motioneye>

motionEye is a web-based frontend for motion. It features

- web-based, mobile/tablet-friendly user interface
- compatible with most USB cameras as well as with the Raspberry PI camera module
- support for IP (network) cameras
- motion detection with email notifications and working schedule
- JPEG files for still images, AVI files for videos
- timelapse movies
- uploading media files to Google Drive and Dropbox

## Usage

Set `motioneye_enabled: true` in your `inventories/<your_inventory>/nas.yml` file. If you have a local video device (e.g., webcam) then this can be passed through using `motioneye_device=<v4l device path>'. By default it will passthrough /dev/video0 if present, this can be overriden using /dev/null.

The motionEye web interface can be found at <http://ansible_nas_host_or_ip:8765>

## Specific Configuration

Once started, use "admin" with empty password when prompted for credentials. 

