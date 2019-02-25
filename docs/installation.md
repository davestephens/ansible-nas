You can run Ansible-NAS from the computer you plan to use for your NAS, or from a remote controlling machine. The steps for deployment are exactly the same, just pay attention to editing the inventory file in step 7.

1. Enable the Ubuntu Universe repository: `sudo add-apt-repository universe`

1. Install Ansible: `sudo apt install ansible`

1. `git clone https://github.com/davestephens/ansible-nas.git && cd ansible-nas`

1. Copy `group_vars/all.yml.dist` to  `group_vars/all.yml`.

1. Open up `group_vars/all.yml` and follow the instructions there for configuring your Ansible NAS.

1. If you plan to use Transmission with OpenVPN, also copy `group_vars/vpn_credentials.yml.dist` to
`group_vars/vpn_credentials.yml` and fill in your settings.

1. Copy `inventory.dist` to `inventory` and update it.

1. Install the dependent roles: `ansible-galaxy install -r requirements.yml` (you might need sudo to install Ansible roles)

1. Run the playbook - something like `ansible-playbook -i inventory nas.yml -b -K` should do you nicely.
