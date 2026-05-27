---
title: "Audiobookshelf"
---

Homepage: [https://audiobookshelf.org/](https://audiobookshelf.org/)

Manage and stream your audiobooks to Web and mobile clients. Audiobookshelf is a successor to Booksonic and similar applications and is still being actively supported by the developers. The applicaiton is backed by a metadata DB so if you have an unsorted audiobook collection, you will get a more friendly view than filesystem based alternatives.

You can find the code on [GitHub](https://github.com/advplyr/audiobookshelf)

Get the Android app on [Google Play](https://play.google.com/store/apps/details?id=com.audiobookshelf.app) or the equivalent iOS app via [TestFlight](https://testflight.apple.com/join/wiic7QIW).

## Usage

Set `audiobookshelf_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file.

The Audiobookshelf web interface can be found at [http://ansible_nas_host_or_ip:13378](http://ansible_nas_host_or_ip:13378).

## Specific Configuration

There is no default password, you'll will be prompted to set this at first login. It's therefore important you do this quickly after provisioning is complete.
