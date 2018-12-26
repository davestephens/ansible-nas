## Vagrant

A [Vagrant](https://www.vagrantup.com/) Vagrantfile and launch script (`tests/test-vagrant.sh`) are provided to spin up a testing VM. The config in `tests/test.yml` is used by the script to override any existing config in `group_vars/all.yml`.

By default the VM will be available on 172.30.1.5. If everything has worked correctly after running `tests/test-vagrant.sh`, you should be able to connect to Heimdall on http://172.30.1.5:10080.

After making changes to the playbook, you can apply them to the running VM by running `vagrant provision`.

Once you're done testing, destroy the VM with `vagrant destroy`.

## Travis CI

Travis CI runs some sanity checks against branches once pushed to GitHub. These can be viewed [here](https://github.com/davestephens/ansible-nas/blob/master/.travis.yml).

### ansible-lint

`ansible-lint` is run as part of the CI (and VSCode tasks are provided) to ensure the playbook confirms to some sort of standard! You may or may not agree with all of the rules, but using it keeps things nice and consistent.

### Syntax Checking

`ansible-playbook --syntax-check` is run against nas.yml to ensure nothing is majorly broken.