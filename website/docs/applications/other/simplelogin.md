---
title: "SimpleLogin"
description: "Receive and send emails anonymously"
---

Homepage: [https://github.com/simple-login/app](https://github.com/simple-login/app)

SimpleLogin is an open source email aliasing service that allows you to receive and send emails anonymously.

## Usage

This role is prepared for a specific use case: receive mail at the host being configured (for SimpleLogin to be able to handle aliases), but use an external relay to send it. In the default case the relay is just one address configured under `simplelogin_postfix_relayhost` variable. That external relay then is configured for Gmail or Google Workspace. Exact configuration for setting the relay for Gmail or Google Workspace is outside the scope for this role, but should be possible by editing the expected target `main.cf` file in `templates` folder.

The role assumes the DNS config is already done according to [the SimpleLogin documentation](https://github.com/simple-login/app#dns).

Set `simplelogin_enabled: true` in your `inventories/<your_inventory>/group_vars/nas.yml` file. Set all applicable `simplelogin_*` variables to configure the service`.

Simplelogin web interface can be found at [http://ansible_nas_host_or_ip:7779](http://ansible_nas_host_or_ip:7779).

After logging in, click `Sign Up` and register the account. If everything is correctly configured, you should receive an email from the system.

After the user is created, set `simplelogin_enable_subscription` to `true` and run the playbook again to enable premium features.

Optionally, if you want to use your built-in (configured) domain as custom domain with catch-all functionality, set `simplelogin_add_builtin_domain_as_custom_domain` to `true` and run the playbook again.
