---
sidebar_position: 1
---

# Installation

Ansible-NAS is an Ansible playbook that sets up applications of your choice on your home server.

## Requirements

- A Linux environment with Ansible installed (in Ansible terms the "control node"). See the official [Installing Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html) docs for more info.
- SSH access to an Ubuntu 22.04 server that'll become your Ansible-NAS box. It's recommended to use a fresh Ubutu Server 22.04 installation. Do not use non-LTS releases.

:::tip

The control node and your Ansible-NAS box can be the same computer, if you choose.

:::

## Running Ansible-NAS

:::caution

Before running anything, check out the playbook and understand what it does. ***Do not*** blindly download code from the internet and trust that it's going to work as you expect.

:::

1. Clone Ansible-NAS:

    `git clone https://github.com/davestephens/ansible-nas.git && cd ansible-nas`

2. Create your own inventory and config files by copying `inventories/sample` to your own directory:

    `cp -rfp inventories/sample inventories/my-ansible-nas`

3. Review `group_vars/all.yml`. Change settings by overriding them in `inventories/my-ansible-nas/group_vars/nas.yml`.

4. Update `inventories/my-ansible-nas/inventory`.

5. Install the dependent roles: `ansible-galaxy install -r requirements.yml`.

6. Run the playbook - `ansible-playbook -i inventories/my-ansible-nas/inventory nas.yml -b -K`
