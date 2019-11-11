# Step Certificates

Homepage: [https://smallstep.com/certificates/](https://smallstep.com/certificates/)


The open source Step Certificates project provides the infrastructure, automations, and workflows to securely create and operate a private certificate authority. Step Certificates makes it easy for developers, operators and security teams to manage certificates for production workloads.


## Usage

Set `stepca_enabled: true` in your `group_vars/all.yml` file.

## Initial configuration

Make sure you change the step-ca password. Step Certificates uses this to encrypt keys for all your certificates! It is `stepca_password` in your `group_vars/all.yml` file. This password can be anything, but it's recommended to use a long, randomly generated string of characters, for example running `openssl rand -base64 48`.

The certificate authority will also have to be initialized first. This can be done by setting `stepca_init: true` in your `group_vars/all.yml` file and then running `ansible-playbook -i inventory nas.yml -b -K -t stepca`. Once you have initialized the CA, set the `stepca_init` variable to false.

## Step Certificates as a CA for Traefik
When your `group_vars/all.yml` file contains `stepca_enabled: true`, Traefik will use Step Certificates as a CA instead of Let's Encrypt for your TLS certificate.
