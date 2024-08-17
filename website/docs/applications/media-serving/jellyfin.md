---
title: "Jellyfin"
---

Homepage: [https://jellyfin.org/](https://jellyfin.org/)

Jellyfin is a Free Software Media System that puts you in control of managing and streaming your media. It is an alternative to the proprietary Emby and Plex, to provide media from a dedicated server to end-user devices via multiple apps. Jellyfin is descended from Emby's 3.5.2 release and ported to the .NET Core framework to enable full cross-platform support. There are no strings attached, no premium licenses or features, and no hidden agendas: just a team who want to build something better and work together to achieve it. We welcome anyone who is interested in joining us in our quest!

Note that [Plex](https://www.plex.tv/), also included in Ansible-NAS, has a very
similar functionality.

## Usage

Set `jellyfin_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file. There are further
parameters you can edit such as `movies_root`, `tv_root` or `music_root` lower down

## Specific Configuration

The jellyfin web interface can be found at port 8896 (http) or 8928 (https, if
configured) of your NAS.

By default, Ansible-NAS gives jellyfin read/write access to the folders where your
movies, TV shows and music are stored. To change this to read-only, edit the following
lines in `all.yml`:

```yaml
        jellyfin_movies_permissions: "rw"
        jellyfin_tv_permissions: "rw"
        jellyfin_books_permissions: "rw"
        jellyfin_audiobooks_permissions: "rw"
        jellyfin_music_permissions: "rw"
```

so that they end in `ro` instead of `rw`. Note that jellyfin will not be able to
delete files then, which might be exactly what you want. However, you will not
have the option to store cover art in the related folders. Always leave the
configuration directory read/write

## Naming movies and TV shows

jellyfin is very fussy about how movies and TV shows must be named to enable
automatic downloads of cover art and metadata. In short, movie files should
follow how movies are listed in the [IMDb](https://www.imdb.com/), including the
year of publication:

```raw
        movies/Bride of Frankenstein (1935).mp4
```

Note the spaces. You should probably remove colons and other special characters
TV shows require a folder structure with the name of the series - again if
possible with the year of publication - followed by sub-folders for the
individual seasons. For example, the first episode of the first season of
the original "Doctor Who" could be stored as:

```raw
        tv/Doctor Who (1963)/Season 1/Doctor Who - s01e01.mp4
```

The [TVDB](https://www.thetvdb.com/) is one source for the exact names of TV
shows.

Unfortunately, there are number of special cases, especially related to split
movies and older series. See the [movie
naming](https://github.com/MediaBrowser/Wiki/wiki/Movie%20naming) and [TV
naming](https://github.com/MediaBrowser/Wiki/wiki/TV-naming) guides for further
information.
