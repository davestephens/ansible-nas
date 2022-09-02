# Installation

💀 💀 💀

Before running anything, check out the playbook and understand what it does. Run it against a VM and make sure you're happy. ***Do not*** blindly download code from the internet and trust that it's going to work as you expect.

💀 💀 💀

## Read This First

Calling this page "installation" is a bit of a misnomer. Ansible-NAS isn't *installed* per-se, it is a bunch of automation that installs other software onto your server. Ansible-NAS relies heavily on Ansible's [variable prescedence](https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html#variable-precedence-where-should-i-put-a-variable) to do its job. Ansible-NAS defines its installable software with roles with (mostly) sane defaults, these can then be enabled and the settings overridden in your inventory `nas.yml` file.

A basic level of understanding of Ansible is required, or you're going to have a confusing time setting up your NAS. If you're willing to learn then great, but please don't raise issues because this is the first time you've looked at Ansible and you don't understand why it's doing what it's doing. I'd love to teach the world Ansible...but I have a day job.

## Running Ansible-NAS

You can run Ansible-NAS from the computer you plan to use for your NAS, or from a remote controlling machine. The steps for deployment are exactly the same, just pay attention to editing the inventory file in step 6.

1. Enable the Ubuntu Universe repository:

    `sudo add-apt-repository universe`

2. Install Ansible:

    `sudo apt update`

    `sudo apt install software-properties-common`

    `sudo apt-add-repository --yes --update ppa:ansible/ansible`

    `sudo apt install ansible`

3. Clone Ansible-NAS:

    `git clone https://github.com/davestephens/ansible-nas.git && cd ansible-nas`

4. Create your own inventory and config files by copying `inventories/sample` to your own directory:

    `cp -rfp inventories/sample inventories/my-ansible-nas`

5. Review `group_vars/all.yml` for general settings and `roles/[application]/defaults/main.yml` for individual applications. Change settings by overriding them in `inventories/my-ansible-nas/group_vars/nas.yml`.

6. Update `inventories/my-ansible-nas/inventory`.

7. Install the dependent roles: `ansible-galaxy install -r requirements.yml` (you might need `sudo` to install Ansible roles).

8. Run the playbook - something like `ansible-playbook -i inventories/my-ansible-nas/inventory nas.yml -b -K` should do you nicely.

## Note about targeting arm64 architectures

The Ansible NAS project was initially created assuming that it would be deployed on machines with an x86_64 architecture, for which all applications work correctly.

Recent changes made possible to deploy this project on arm64 architectures (tested on a Raspberry Pi 4b), and all the tested applications ran without issues. With this in mind, each docker application needs to explicitly support both architectures in order to run correctly, and we cannot ensure this on a per-application basis. [Here](https://docs.docker.com/desktop/multi-arch/) you can find more information on the subject.
