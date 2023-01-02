---
sidebar_position: 2
---

# Enabling Applications

Ansible-NAS takes advantage of Ansible's [prescendence rules](https://docs.ansible.com/ansible/latest/reference_appendices/general_precedence.html) to enable and disable applications.

Look through the documentation and find an application you want to install, and set the relevant variable to `true` in your inventory `nas.yml`. Don't edit the source code!

Run the playbook again, and you're done.

:::tip

Every change you make to your configuration will require you to run the playbook against your Ansible-NAS box again. To save time, target a specific application using `ansible-playbook`'s `--tag` switch.

:::
