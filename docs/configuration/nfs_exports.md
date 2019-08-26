# NFS Exports

Ansible-NAS uses the awesome [geerlingguy.nfs](https://github.com/geerlingguy/ansible-role-nfs) Ansible role to configure NFS exports.

More info on configuring NFS exports can be found [here](https://help.ubuntu.com/community/SettingUpNFSHowTo#Shares).

## NFS Examples

Ansible-NAS shares are defined in the `nfs_exports` section within `group_vars/all.yml`. The example provided will allow anyone to read the data in `{{ nfs_shares_root }}/public` on your Ansible-NAS box.

## Permissions

NFS "exports" (an equivalent of a Samba share) are permissioned differently to Samba shares. Samba shares are permissioned with users and groups, and NFS exports are permissioned by the host wanting to access them, and then usual Linux permissions are applied to the files and directories within there. As mentioned above, the example will allow any computer on your network to read and write to the export.
