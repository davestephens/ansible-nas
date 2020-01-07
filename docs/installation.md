:skull: :skull: :skull: Before running anything, check out the playbook and understand what it
does. Run it against a VM and make sure you're happy. ***Do not*** blindly
download code from the internet and trust that it's going to work as you expect.
:skull: :skull: :skull:

You can run Ansible-NAS from the computer you plan to use for your NAS, or from a remote controlling machine. The steps for deployment are exactly the same, just pay attention to editing the inventory file in step 7.

1. Enable the Ubuntu Universe repository:

    `sudo add-apt-repository universe`

2. Install Ansible:

    `sudo apt install ansible`

3. Clone Ansible-NAS:

    `git clone https://github.com/davestephens/ansible-nas.git && cd ansible-nas`

4. Create your own inventory and config files by copying `inventories/sample` to your own directory:

    `cp -rfp inventories/sample inventories/my-ansible-nas`

5. Review `group_vars/all.yml`. Change settings by overriding them in `inventories/my-ansible-nas/group_vars/all.yml`.

6. Update `inventories/my-ansible-nas/inventory`.

7. Install the dependent roles: `ansible-galaxy install -r requirements.yml` (you might need `sudo` to install Ansible roles).

8. Run the playbook - something like `ansible-playbook -i inventories/my-ansible-nas/inventory nas.yml -b -K` should do you nicely.