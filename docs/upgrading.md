# Upgrading Ansible-NAS

## Upgrading from prior to January 2020 (`all.yml.dist` config style)

If you're upgrading from [this](https://github.com/davestephens/ansible-nas/commit/52c7fef3aba08e30331931747c81fb7b3bfd359a) commit or earlier, these instructions are relevant to you.

Rather than having to merge every new config line into your own `all.yml` file, now you only need to maintain the differences that are relevant to you in your own `all.yml`, stored within an inventory directory. Your inventory `all.yml` takes prescendence over `group_vars/all.yml`, which is how this setup works. `group_vars/all.yml` is now tracked as part of the repo.

This will make updates from `master` much simpler, as there will be no requirement to merge changes from `all.yml.dist` into your own `all.yml` any more. You simply pull from master, then add the bits you're interested in into your inventory `all.yml`.

Instructions to upgrade from prior to January 2020 ([this]([this](https://github.com/davestephens/ansible-nas/commit/52c7fef3aba08e30331931747c81fb7b3bfd359a)) commit or earlier):

- Move your `group_vars/all.yml` somewhere safe.

- Pull from master. There shouldn't be any merge conflicts unless you've been hacking on the project.

- Create your own inventory and config files by copying `inventories/sample` to your own directory:

    `cp -rfp inventories/sample inventories/my-ansible-nas`

    Note that `my-ansible-nas` can be anything you want, but adjust the following instructions accordingly.

- Then:

    - **Quick and Dirty:** Copy the contents of your `all.yml` into `inventories/my-ansible-nas/all.yml`.

    - **Nice and Tidy:** Copy only the differences between your own `all.yml` and the distribution `group_vars/all.yml` into `inventories/my-ansible-nas/all.yml`. This is likely to be things like `ansible_nas_hostname`, `samba_shares`, `ansible_nas_timezone`, enabled applications, any application tweaks you've made in config etc.

