# Step Certificates

Homepage: [https://smallstep.com/certificates/](https://smallstep.com/certificates/)


The open source Step Certificates project provides the infrastructure, automations, and workflows to securely create and operate a private certificate authority. Step Certificates makes it easy for developers, operators and security teams to manage certificates for production workloads.


## Usage

Set `stepca_enabled: true` in your `group_vars/all.yml` file.

## Initial configuration

Make sure you change the step-ca password. Step Certificates uses this to encrypt keys for all your certificates! It is `stepca_password` in your `group_vars/all.yml` file. This password can be anything, but it's recommended to use a long, randomly generated string of characters, for example running `openssl rand -base64 48`.

## Add your root certificate to your clients
When using certificates signed by your own CA, you need to add the CA's root certificate to the trusted root store of each of your devices.

First get the certificate fingerprint:

```shell
docker exec -ti step-ca step certificate fingerprint /home/step/certs/root_ca.crt
```

Then on your Linux desktop install the [step-cli](https://github.com/smallstep/cli/releases) package. After this, bootstrap your CA:

```
step ca bootstrap --fingerprint $FP --ca-url $CA
```

Use the fingerprint instead of `$FP` and the URI of your CA instead of `$CA`: `stepca.{{ ansible_nas_domain }}:8443`. This downloads your CA's root certificate. Then [install](https://smallstep.com/docs/cli/certificate/install/) it system-wide with:

```
sudo step certificate install --all .step/certs/root_ca.crt
```

## Step Certificates as a CA and ACME server for Traefik
If Step Certificates is enabled, Traefik will use it as a CA and ACME server instead of Let's Encrypt.

This setup requires that you have a local DNS server running that resolves every possible subdomain `*.{{ ansible_nas_domain }}` to the IP address of `{{ ansible_nas_domain }}`. For instance, if you are running the OPNsense operating system on your router and are using Unbound DNS, go to **Services / Unbound DNS / Overrides** and add an override with host `*`, domain `{{ ansible_nas_domain }}`, type `A or AAA (IPv4 or IPv6 address)` and the IP address of your Ansible-NAS machine. This essentially mimics Cloudflare's wildcard DNS entries, but for your local domain.
