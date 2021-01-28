# Ansible Role: NFS

[![CI](https://github.com/geerlingguy/ansible-role-nfs/workflows/CI/badge.svg?event=push)](https://github.com/geerlingguy/ansible-role-nfs/actions?query=workflow%3ACI)

Installs NFS utilities on RedHat/CentOS or Debian/Ubuntu.

## Requirements

None.

## Role Variables

Available variables are listed below, along with default values (see `defaults/main.yml`):

    nfs_exports: []

A list of exports which will be placed in the `/etc/exports` file. See Ubuntu's simple [Network File System (NFS)](https://ubuntu.com/server/docs/service-nfs) guide for more info and examples. (Simple example: `nfs_exports: [ "/home/public    *(rw,sync,no_root_squash)" ]`).

    nfs_rpcbind_state: started
    nfs_rpcbind_enabled: true

(RedHat/CentOS/Fedora only) The state of the `rpcbind` service, and whether it should be enabled at system boot.

## Dependencies

None.

## Example Playbook

    - hosts: db-servers
      roles:
        - { role: geerlingguy.nfs }

## License

MIT / BSD

## Author Information

This role was created in 2014 by [Jeff Geerling](https://www.jeffgeerling.com/), author of [Ansible for DevOps](https://www.ansiblefordevops.com/).
