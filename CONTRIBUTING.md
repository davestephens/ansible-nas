# Contributing

Contributing to Ansible-NAS is easy! Add your functionality, then raise a pull request on GitHub. A few things to bear in mind:

* Restrict pull requests to one piece of functionality or bugfix at a time.
* Test your new functionality or bugfix using the included `tests/test-vagrant.sh` script to spin up a test VM.
* Run `ansible-lint` against the playbook before committing. (There is a VSCode task set up to run the right command for you)
* Ensure that your PR only changes files required for your functionality or bugfix.

If you're adding a new application:

* Ensure that the new application is disabled by default.
* Add a documentation page to `docs/applications/` - use an existing application as an example.
* Add to the list of Available Applications in 'README.md'
* Add the frontend port to `docs/configuration/application_ports.md`, ensuring you've not clashed with an existing application.
* Add to the list of certificate requests in `templates/traefik/traefik.toml' if the program is to be used externally.

A typical new application PR will include 2 new files (`docs/applications/application.md` and `tasks/application.yml`) and have 5 updated files (`README.md`, `nas.yml`, `docs/configuration/application_ports.md`, `group_vars/all.yml`, `templates/traefik/traefik.toml`).

## Things to bear in mind

* If you break the build with your PR, please fix it :)
* Pull requests that unintentionally touch files, or that show files as removed then re-added will be rejected.
* Please know that your efforts are appreciated, thanks! :+1:

# Development Environment

* Development of Ansible-NAS is carried out in [Visual Studio Code](https://code.visualstudio.com/) - you'll get some nice
recommended extensions and task setups if you do the same.
