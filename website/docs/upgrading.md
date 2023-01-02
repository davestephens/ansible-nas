# Upgrading

Upgrading consists of two steps - firstly updating the Ansible-NAS code on your Ansible control node, and then running the playbook against your Ubuntu server.

Assuming you haven't changed anything except the files in your inventory directory, you can simply run:

```bash
git pull origin master
```

...to pull the latest updates from GitHub. If you've changed files outside of the inventory directory, you'll need to fix any merge conflicts.

To see the effect of running the latest version of Ansible-NAS against your Ubuntu server, you can run Ansible in check mode first:

```bash
ansible-playbook -i inventories/my-ansible-nas/inventory nas.yml -b -K -C
```

Once you're happy, run as normal.
