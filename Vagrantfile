Vagrant.require_version ">= 2.2.2"

Vagrant.configure(2) do |config|
  config.vm.define "ansible-nas-test" do
    config.vm.box = "ubuntu/bionic64"
    config.vm.network "private_network", ip: "172.30.1.5"
    config.ssh.insert_key = false

    config.vm.provision "ansible_local" do |ansible|
      ansible.compatibility_mode = "2.0"
      ansible.galaxy_role_file = "requirements.yml"
      ansible.inventory_path = "tests/inventories/integration_testing/inventory"
      ansible.playbook = "nas.yml"
      ansible.become = true
      ansible.raw_arguments = [
        "--extra-vars @tests/test.yml"
      ]
    end
  end
end
