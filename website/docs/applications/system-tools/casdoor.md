---
title: "Casdoor"
description: "An open-source UI-first Identity and Access Management (IAM) / Single-Sign-On (SSO) platform"
---

Homepage: [https://github.com/casdoor/casdoor](https://github.com/casdoor/casdoor)

An open-source UI-first Identity and Access Management (IAM) / Single-Sign-On (SSO) platform with web UI supporting OAuth 2.0, OIDC, SAML, CAS, LDAP, SCIM, WebAuthn, TOTP, MFA, Face ID, RADIUS, Google Workspace, Active Directory and Kerberos

## Usage

Set `casdoor_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml`. Run the playbook.

Casdoor web interface can be found at [http://ansible_nas_host_or_ip:8006](http://ansible_nas_host_or_ip:8006). Login with user `admin` and password `123`.
