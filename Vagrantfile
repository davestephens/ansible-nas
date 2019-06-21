Vagrant.require_version ">= 2.2.2"

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/bionic64"
  config.vm.network "public_network", ip: "192.168.0.27", bridge: "Broadcom 802.11n Network Adapter"
  config.ssh.insert_key = true

  config.vm.provision "ansible_local" do |ansible|
    ansible.compatibility_mode = "2.0"
    ansible.galaxy_role_file = "requirements.yml"
    ansible.playbook = "nas.yml"
    ansible.become = true
    ansible.raw_arguments = [
      "--extra-vars @tests/test.yml"
    ]
  end
end
