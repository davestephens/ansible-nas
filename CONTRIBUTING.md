# Contributing

Contributing to Ansible-NAS is easy! Add your functionality, then raise a pull request on GitHub. A few things to bear in mind:

* **Restrict pull requests to one piece of functionality or bugfix at a time.** 
* Test your new functionality or bugfix using the included `tests/test-vagrant.sh` script to spin up a test VM.
* Run `ansible-lint` against the playbook before committing. (There is a VSCode task set up to run the right command for you)
* Ensure that your PR only changes files required for your functionality or bugfix. Random changes in other files will result in your PR being rejected

If you're adding a new application:

* It must be structured in an [Ansible role](https://docs.ansible.com/ansible/latest/user_guide/playbooks_reuse_roles.html).
* Ensure that the new application is disabled by default.
* Add a documentation page to `docs/applications/` - use an existing application as an example.
* Add to the list of Available Applications in `README.md`
* Add the frontend port to `docs/configuration/application_ports.md`, ensuring you've not clashed with an existing application.

## Things to bear in mind

* If you break the build with your PR, it'll need to be fixed before it's merged.
* Pull requests that unintentionally touch files, or that show files as removed then re-added will be rejected.
* Don't mess with line endings, or tabs vs. spaces.
* Please know that your efforts are appreciated, thanks! :+1:

## Development Environment

* Development of Ansible-NAS is carried out in [Visual Studio Code](https://code.visualstudio.com/) - you'll get some nice
recommended extensions and task setups if you do the same.
