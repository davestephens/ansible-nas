# Upgrading

Pull the latest Ansible-NAS repo, merge any new config sections from `group_vars/all.yml.dist` into your `group_vars/all.yml`, then run the playbook.

Older versions of Time Machine included in Ansible-NAS relied on AFP (netatalk) shares. Apple has deprecated Time Machine over AFP in favor of SMB (Samba), and current versions of Ansible-NAS use a Samba-based Time Machine share. If you are upgrading from an older version of Ansible-NAS with the AFP-based Time Machine, you will need to re-select your Time Machine back up disk by opening Time Machine Preferences and Selecting your backup disk via the "Select Disk..." option. Your Mac will find the old backups on the share and use them.