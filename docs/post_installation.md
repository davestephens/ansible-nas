# Now what?

## Enabling More Applications

Look through the `roles` directory in the Ansible-NAS source code for applications to enable.

If you see something you like, read its docs to find out what variable you need to set in your inventory `nas.yml`, and set it to true. Run the playbook again, and you're done.

## Configure Heimdall

[Heimdall](https://heimdall.site/) is configured out of the box to give you a dashboard that pulls together all the applications you install with Ansible-NAS.
