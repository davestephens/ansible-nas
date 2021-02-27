# Emby

Homepage: [https://emby.media/](https://emby.media/)

Emby is a mostly open-source media server with a client-server model. This
install for Ansible-NAS provides a server, which various clients can then
connect to from platforms such as other computers, smartphones and smart TVs.

Note that [Plex](https://www.plex.tv/), also included in Ansible-NAS, has a very
similar functionality.

## Usage

Set `emby_enabled: true` in your `inventories/<your_inventory>/nas.yml` file. There are further
parameters you can edit such as `movies_root` and `tv_root` lower down. 

## Specific Configuration

The emby web interface can be found at port 8096 (http) or 8920 (https, if
configured) of your NAS. Heimdall has a dedicated icon for emby. 

By default, Ansible-NAS gives emby read/write access to the folders where your
movies and TV shows are stored. To change this to read-only, edit the following
lines in `all.yml`:

```
        emby_movies_permissions: "rw"
        emby_tv_permissions: "rw"
```

so that they end in `ro` instead of `rw`. Note that emby will not be able to
delete files then, which might be exactly what you want. However, you will not
have the option to store cover art in the related folders. Always leave the
configuration directory read/write. 

## File system considerations

Movie and TV show files are almost always very large and pre-compressed. If you
are using a specialized filesystem such as ZFS for bulk storage, you'll want to
set the parameters accordingly. The [ZFS configuration
documentation](../zfs/zfs_configuration.md) has an example of this.


## Naming movies and TV shows

Emby is very fussy about how movies and TV shows must be named to enable
automatic downloads of cover art and metadata. In short, movie files should
follow how movies are listed in the [IMDb](https://www.imdb.com/), including the
year of publication: 

```
        movies/Bride of Frankenstein (1935).mp4
```

Note the spaces. You should probably remove colons and other special characters. 

TV shows require a folder structure with the name of the series - again if
possible with the year of publication - followed by sub-folders for the
individual seasons. For example, the first episode of the first season of
the original "Doctor Who" could be stored as:

```
        tv/Doctor Who (1963)/Season 1/Doctor Who - s01e01.mp4
```

The [TVDB](https://www.thetvdb.com/) is one source for the exact names of TV
shows.

Unfortunately, there are number of special cases, especially related to split
movies and older series. See the [movie
naming](https://github.com/MediaBrowser/Wiki/wiki/Movie%20naming) and [TV
naming](https://github.com/MediaBrowser/Wiki/wiki/TV-naming) guides for further
information.

