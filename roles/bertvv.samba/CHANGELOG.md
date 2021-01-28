# Change log

This file contains al notable changes to the bertvv.samba Ansible role.

This file adheres to the guidelines of [http://keepachangelog.com/](http://keepachangelog.com/). Versioning follows [Semantic Versioning](http://semver.org/). "GH-X" refers to the X'th issue or pull request on the Github project.

## 2.7.1  - 2019-06-22

## Changed

- (GH-39) Have include_options use absolute paths (credit: [Bengt Giger](https://github.com/BenGig))
- (GH-41) Change default of "map to guest" to "never"
- (GH-42) Only apply mitigation of vulnerability CVE-2017-7494 to vulnerable Samba versions
- Fix deprecation warnings for Ansible 2.8.x
- Removed with_items loop from package tasks

## 2.7.0 - 2018-10-04

## Added

- (GH-36) Control the Samba log level (credit: [Karl Goetz](https://github.com/goetzk))
- (GH-35) Load arbitrary config files in every section (credit: [Karl Goetz](https://github.com/goetzk))
- (GH-34) Control if shares are browseable or not (credit: [Karl Goetz](https://github.com/goetzk))
- (GH-33) Support for enabling Apple SMB extensions (credit: [Karl Goetz](https://github.com/goetzk))

## 2.6.0 - 2018-08-16

### Added

- (GH-28) Enable a cups server to be used (credit: [Thiago Gomes Verissimo](https://github.com/thiagogomesverissimo))

### Changed

- (GH-30, GH-31) Improve handling of link to www_documentroot (credit: [Karl Goetz](https://github.com/goetzk))
- Update supported versions of Fedora to 27 and 28. Fedora 25 and 26 are EOL. This role will probably still work (for a while) on these platforms, but we do no effort to test them.
- (GH-29) Don't print passwords out to the log (credit: [George Hartzell](https://github.com/hartzell))

## 2.5.1 - 2018-05-20

### Added

- (GH-21) Add config flag to disable CVE-2017-7494 mitigation (credit: [Tiemo Kieft](https://github.com/blubber))
- (GH-23) Added username map configuration (credit: [Tomohiko Ozawa](https://github.com/kota65535))
- (GH-24) Add samba_server_max_protocol parameter (credit: [Jonathan Underwood](https://github.com/jonathanunderwood))
- (GH-25) Add Fedora 26 and 27 support explicitly in meta (credit: [Jonathan Underwood](https://github.com/jonathanunderwood))
- (GH-26) Name the include_vars task (credit: [Tobias Wolter](https://github.com/towo))

## 2.5.0 - 2017-11-21

## Added

- (GH-20) Added variable `ansible_realm`, which adds support for Realmd. This variable is only needed when the host is joined to an already existing domain by using realmd, and you want to configure this member server as a Samba file server. (credit: [Sven Eeckeman](https://github.com/SvenEeckeman))

## 2.4.0 - 2017-09-15

### Changed

- (GH-19) Made WINS support configurable (credit: [Ben Tomasik](https://github.com/tomislacker))


## 2.3.1 - 2017-05-29

### Changed

- Fix for remote code execution vulnerability CVE-2017-7494: <https://access.redhat.com/security/cve/cve-2017-7494>

## 2.3.0 - 2017-05-10

### Changed

- Fix service names for Ubuntu/Debian
- Start services in a single task
- Fix issue with NetBIOS name resolution not working on Ubuntu and Debian
- Updated list of supported platforms
    - Added Fedora 25
    - Removed Ubuntu 14.04 (the name of the `samba` service was changed to `smbd` in more recent versions, supporting both would become cumbersome)
    - Removed older versions of EL. The role should still be working on EL6, but the test environment doesn't work.

### Added

- (GH-16) Added global option `guest_account`, share options `writable` and `guest_ok` (credit: [morbidick](https://github.com/morbidick))
- (GH-17) Added support for vfs options (credit: [Slavek Jurkowski](https://github.com/slavekjurkowski2))

## 2.2.2 - 2017-01-20

### Changed

- (GH-13) Updated documentation, added `setype:`
- (GH-14) Fixed an issue with creating users (credit: [Sven Eeckeman](https://github.com/SvenEeckeman))
- (GH-15) Fixed the check for SELinux status (credit: [Tomohiko Ozawa](https://github.com/kota65535))

## 2.2.1 - 2016-10-29

### Added

- (GH-12) Add the ability to set owner to the path (credit: [Paul Montero](https://github.com/lpaulmp))

### Changes

- Added tags to all tasks

## 2.2.0 - 2016-07-29

### Added

- (GH-11) Introduced variable `samba_interfaces` (credit: [Jonas Heinrich](https://github.com/onny))
- (GH-11) Added support for Arch Linux (credit: [Jonas Heinrich](https://github.com/onny))

## 2.1.1 - 2016-05-29

This is a bugfix release.

### Changed

- (GH-6) Made creation of Samba users idempotent. The task "Create Samba users [...]" will now only indicate it has changed when it actually created a user.
- (GH-9) Fixed forgotten `when: samba_create_varwww_symlinks` (credit: [DarkStar1973](https://github.com/DarkStar1973))

## 2.1.0 - 2016-05-12

### Added

- (GH-7) Support for Debian/Ubuntu (credit: [Ian Young](https://github.com/iangreenleaf)) and Fedora.
- Vagrant test environment for all supported platforms

### Changed

- Moved test code to a separate branch
- (GH-8) Fixed deprecation warnings in Ansible 2.0 (partial credit: [Ian Young](https://github.com/iangreenleaf))
- Use the generic `package:` module introduced in Ansible 2.0.

### Removed

- The `version:` field in `meta/main.yml` was removed because it is no longer accepted in Ansible 2.0. Unfortunately, this change breaks compatibility with `librarian-ansible`. For more info on this issue, see [ansible/ansible#](https://github.com/ansible/ansible/issues/13496).

## 2.0.2 - 2015-12-01

### Changed

- The directory `samba_shares_root` is now created befor creating the directories of the shares, with sane permissions set. This fixes GH-3. Contributed by @birgitcroux.

### Removed

- The role variables `create_mask` and `create_directory_mask` were removed. Samba settings `create mask` and `create directory mask` are synonyms for `create mode` and `create directory mode`, respectively. The former name is misleading, because it suggests they work like the Linux command `umask`.

## 2.0.1 - 2015-11-05

### Changed

- (GH-1) The variable type of `samba_create_varwww_symlinks` is now boolean instead of string
- The variable `samba_netbios_name` is no longer required and defaults to `ansible_hostname`.

## 2.0.0 - 2015-11-05

Bugfix release with changes that are not backwards compatible

### Changed

- (GH-1) The variable type of `samba_load_*` is now boolean instead of string, which makes more sense. However, this change is **not backwards compatible**.
- (GH-2) Restart WinBind when changing the configuration
- Updated the base box for the test environment to CentOS 7.1 ([bertvv/centos71](https://atlas.hashicorp.com/bertvv/boxes/centos71/))
- Cleaned up indentation and spaces in the configuration file template

### Removed

- The firewall configuration is no longer set by this role. This also removes the dependency on firewalld.

## 1.0.0 - 2015-03-14

First release

### Added

- Installation
- Create directories
- SELinux settings
- Configuration template with a.o. configurable print sharing, home directories, user access control
- Set user passwords


