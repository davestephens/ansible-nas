---
sidebar_position: 1
---

# Development Environment

A little setup is required to ensure that you can develop and test Ansible-NAS contributions.

## Requirements

Developing Ansible-NAS features require a few things:

- Ansible (see [Installing Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html))
- Python 3 (see [Python Setup and Usage](https://docs.python.org/3/using/index.html))
- Node (see [Node.js Downloads](https://nodejs.org/en/download/))

## Setup

- Ansible requirements - `ansible-galaxy install -r requirements.yml`
- Python requirements - `pip install -r requirements-dev.txt`
- Node.js requirements - `pushd website && npm install && popd`

## IDE

- Development of Ansible-NAS is carried out in Visual Studio Code.
