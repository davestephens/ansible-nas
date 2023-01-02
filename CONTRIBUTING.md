# Contributing

Contributing to Ansible-NAS is easy! Add your functionality, then raise a pull request on GitHub. A few things to bear in mind:

## Development Environment

* Development of Ansible-NAS is carried out in [Visual Studio Code](https://code.visualstudio.com/) on Linux - you'll get some nice recommended extensions and task setups if you do the same.
* You'll need a working Python 3 environment, Docker (to run tests) and [pre-commit](https://pre-commit.com) installed - `pip install -r requirements-dev.txt`.

## General Stuff

* **Restrict pull requests to one piece of functionality or bugfix at a time.**
* Ensure that your changes aren't going to break the GitHub builds. You can run the Pre-commit checks manually (it's not yet configured to run on every commit) using the VSCode task.
* Ensure that your PR only changes files required for your functionality or bugfix. Random changes in other files will result in your PR being rejected.
* Don't mess with line endings, or change spaces for tabs. They're fine how they are.
* Please know that your efforts are appreciated, thanks! :+1:

## Adding a new application

So you want to add a new application. Great!

* Start by looking at the `hello_world` example. Following this structure is the most likely way of getting your PR approved. Leaving out things the `hello_world` example includes (ie docs, tests) will definitely result in your PR being rejected.
* Add to the list of Available Applications in `README.md`
