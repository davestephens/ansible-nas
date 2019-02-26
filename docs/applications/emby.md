# Emby

Homepage: [https://emby.media/](https://emby.media/)

Emby is a mostly open-source media server with a client-server model. This
install for Ansible-NAS provides a server, which various clients can then
connect to from various platforms such as other computers, smartphones and smart
TVs.


Note that [Plex](https://www.plex.tv/), also included in Ansible-NAS, has a very
similar functionality.

## Usage

Set `emby_enabled: true` in your `group_vars/all.yml` file. There are further
parameters you can edit such as `movies_root` and `tv_root` lower down in this
file. 

## Specific Configuration

The emby web interface can be found at port 8096 (http) or 8920 (https, if
configured) of your NAS. Note that Heimdall has a dedicated icon for emby. 

By default, Ansible-NAS gives emby read/write access to the folders where your
movies and TV shows are stored. To change this to read-only, edit the following
lines in `tasks/emby.yml`

```
      - "{{ emby_movies_directory }}:/movies:rw"
      - "{{ emby_tv_directory}}:/tv:rw"
```

so that they end in `ro` instead of `rw`. Note that emby will not be able to
delete files then, which might be exactly what you want. However, you will not
have the option to store cover art in the related folders. Always leave the
configuration directory read/write. 

## File system considerations

You might want to create special ZFS datasets for TV shows and movies, as these
are usually large files. This means you can change the record size parameter
from its default value of 128K to 1M. Larger blocks cut down on the metadata
that the system has to manage, as various parts of ZFS work on the block level. 

Assuming we have a ZFS pool named `tank`, the instruction sequence might look
something like this:

```
        sudo zfs create tank/movies
        sudo zfs set recordsize=1M tank/movies

        sudo zfs create tank/tv
        sudo zfs set recordsize=1M tank/tv
```

Changing the record size will not affect files already stored in the data set,
only new files. See [this
discussion](https://blog.programster.org/zfs-record-size) about record sizes for
media data sets and [this
video](https://www.youtube.com/watch?v=SJB1cJfcjYI&feature=youtu.be&t=14m41s)
for more information. 

Since video files are almost always compressed, you might want to turn off
`compression` for the data set. However, ZFS automatically detects data that
can't be compressed and aborts the procedure. 

> At time of writing, native encryption of ZFS datasets is not supported in the
> release versions of ZFS on Linux (ZoL), but is scheduled for [version
> 0.8.0](https://github.com/zfsonlinux/zfs/releases/tag/zfs-0.8.0-rc3) sometime
> in 2019. It is unclear when Ubuntu will upgrade their version of ZFS.

To see all properties of a ZFS dataset, use `zfs get all <DATASET>`.

## Naming movies and TV shows

Emby is fussy about how movies and TV shows must be named to enable automatic
downloads of cover art and metadata. In short, movie files should follow how
movies are listed in the [IMDb](https://www.imdb.com/), including the year of
publication: 

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

