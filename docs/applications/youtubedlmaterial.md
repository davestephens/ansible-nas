
# YouTubeDL-Material

Homepage: [https://ytdl-org.github.io/youtube-dl/](https://ytdl-org.github.io/youtube-dl/)
Docker Container: [https://github.com/Tzahi12345/YoutubeDL-Material](https://github.com/Tzahi12345/YoutubeDL-Material)

YoutubeDL-Material is a Material Design frontend for youtube-dl. It's coded using Angular 9 for the frontend, and Node.js on the backend.

## Usage

Set `youtubedlmaterial_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

The YouTubeDL-Material web interface can be found at http://ansible_nas_host_or_ip:8998.

## Specific Configuration

A YouTube directory will be created in your configured downloads spot. YouTubeDL-Material downloads will be placed there.
You can change the download location via `inventories/<your_inventory>/nas.yml` file.
