# NZBGet

Homepage: [https://nzbget.net/](https://nzbget.net/)

NZBGet is a free NZB (Newsgroup Bin) downloader.

## Usage

Set `nzbget_enabled: true` in your `group_vars/all.yml` file.

NZBGet's web interface can be found at http://ansible_nas_host_or_ip:6789

The default admin user and password are `nzbget` and `tegbzn6789`.

## Specific Configuration

Correct paths need to be set to enable smooth functionality with other components of Ansible NAS.

The Ansible NAS process modifies the NZBGet folder from /downloads to /downloads/nzbget to facilitate multiple download clients
being used.