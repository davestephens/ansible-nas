# Upgrading Ansible-NAS

## Getting [user|group] already exists error

Ansible-nas used to create user/group without specifying a UID or GID. This left the target system to decide the correct UID/GID. The solution to fix this `[user|group] already exist` error is to specify the UID/GID that has been created in the first time in your `inventories/<yourtargetname>/group_vars/<yourtargetname>.yml`. You can get this information by running those two commands on your target (after establishing an SSH connection).

### Setting group ID (GID)
- To get the group ID: `less /etc/group | grep ansible-nas`.
- The group id is the first number after `:x:` in the string `ansible-nas:x:1001:`.
- Set this number as `ansible_nas_gid` in your inventory.

### Setting user ID (UID)
- To get the user ID: `less /etc/passwd | grep ansible-nas`
- The user ID is the first number after `:x:` in the string `ansible-nas:x:999:1001::/home/ansible-nas:/usr/sbin/nologin`.
- Set this number as `ansible_nas_uid` in your inventory.

## Upgrading from prior to January 2020 (`all.yml.dist` config style)

If you're upgrading from [this](https://github.com/davestephens/ansible-nas/commit/52c7fef3aba08e30331931747c81fb7b3bfd359a) commit or earlier, these instructions are relevant to you.

Rather than having to merge every new config line into your own `all.yml` file, now you only need to maintain the differences that are relevant to you in your own `nas.yml`, stored within an inventory directory. Your inventory `nas.yml` takes prescendence over `group_vars/all.yml`, which is how this setup works. `group_vars/all.yml` is now tracked as part of the repo.

This will make updates from `master` much simpler, as there will be no requirement to merge changes from `all.yml.dist` into your own `all.yml` any more. You simply pull from master, then add the bits you're interested in into your inventory `nas.yml`.

Instructions to upgrade from prior to January 2020 ([this]([this](https://github.com/davestephens/ansible-nas/commit/52c7fef3aba08e30331931747c81fb7b3bfd359a)) commit or earlier):

- Move your `group_vars/all.yml` somewhere safe.

- Pull from master. There shouldn't be any merge conflicts unless you've been hacking on the project.

- Create your own inventory and config files by copying `inventories/sample` to your own directory:

    `cp -rfp inventories/sample inventories/my-ansible-nas`

    Note that `my-ansible-nas` can be anything you want, but adjust the following instructions accordingly.

- Then:

    - **Quick and Dirty:** Copy the contents of your `all.yml` into `inventories/my-ansible-nas/group_vars/nas.yml`.

    - **Nice and Tidy:** Copy only the differences between your own `all.yml` and the distribution `group_vars/all.yml` into `inventories/my-ansible-nas/group_vars/nas.yml`. This is likely to be things like `ansible_nas_hostname`, `samba_shares`, `ansible_nas_timezone`, enabled applications, any application tweaks you've made in config etc.

