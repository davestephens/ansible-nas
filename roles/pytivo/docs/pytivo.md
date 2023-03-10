# PyTivo

Project Homepage:
<https://github.com/lucasnz/pytivo>

Docker Homepage:
<https://hub.docker.com/r/pinion/docker-pytivo>

PyTivo is both an HMO and GoBack server. Similar to TiVo Desktop pyTivo
loads many standard video compression codecs and outputs mpeg2 video to
the TiVo. However, pyTivo is able to load MANY more file types than TiVo
Desktop. <http://pytivo.org/>

## Usage

Set `pytivo_enabled: true` in your `group_vars/all.yml` file. The PyTivo
web interface can be found at <http://ansible_nas_host_or_ip:9032>.

## Specific Configuration

PyTivo needs to be configured for use. Your ansible-nas media is
available to share via:

* /movies - Where your movies are stored
* /music - Where your music is stored
* /photos - Where your photos are stored
* /podcasts - Where your podcasts are stored
* /tv - Where your TV episodes are stored

Configuration help for PyTivo settings can be found at [Configure_pyTivo](https://pytivo.sourceforge.io/wiki/index.php/Configure_pyTivo).
