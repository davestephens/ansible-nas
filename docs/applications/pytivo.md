# PyTivo

Project Homepage: [https://github.com/lucasnz/pytivo](https://github.com/lucasnz/pytivo)

Docker Homepage: [https://hub.docker.com/r/pinion/docker-pytivo](https://hub.docker.com/r/pinion/docker-pytivo)

PyTivo is both an HMO and GoBack server. Similar to TiVo Desktop pyTivo loads many standard video compression codecs and outputs mpeg2 video to the TiVo. However, pyTivo is able to load MANY more file types than TiVo Desktop. [http://pytivo.org/](http://pytivo.org/)

## Usage

Add `pytivo_enabled: true` in your inventories/<your_inventory>/group_vars/nas.yml

The PyTivo web interface can be found at http://ansible_nas_host_or_ip:9032.

## Specific Configuration

PyTivo needs to be configured for use. Configuration help for PyTivo settings can be found at [Configure pyTivo](https://pytivo.sourceforge.io/wiki/index.php/Configure_pyTivo).

Your ansible-nas media is available to share via:

* /movies   - Where your movies are stored
* /music    - Where your music is stored
* /photos   - Where your photos are stored
* /podcasts - Where your podcasts are stored
* /tv       - Where your TV episodes are stored
