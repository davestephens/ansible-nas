Vagrant.require_version ">= 1.7.0"

Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/bionic64"

  config.ssh.insert_key = false
  config.vm.network "private_network", ip: "172.30.1.5"


  config.vm.provision "ansible_local" do |ansible|
    ansible.galaxy_role_file = "requirements.yml"
    ansible.playbook = "nas.yml"
    ansible.become = true
    ansible.raw_arguments = [
      "--extra-vars @tests/test.yml"
    ]
  end
end
