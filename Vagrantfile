Vagrant.require_version ">= 2.2.2"

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/bionic64"
  config.vm.network "private_network", ip: "172.30.1.5"
  config.ssh.insert_key = false

  config.vm.provision "ansible_local" do |ansible|
    ansible.compatibility_mode = "2.0"
    ansible.galaxy_role_file = "requirements.yml"
    ansible.playbook = "nas.yml"
    ansible.inventory_path = "inventories/vagrant/inventory"
    ansible.limit = "vagrant"
    ansible.become = true
  end
end
