### Ansible NAS

After getting burned by broken FreeNAS updates one too many times, I figured I could do a much better job myself using 
just a stock Ubuntu install, some clever Ansible config and a bunch of docker containers.

## What This Provides

 * Any number of Samba shares for you to store your stuff
 * Via Docker:
    - [Duplicati](https://www.duplicati.com/) for backing up your stuff
    - [Transmission](https://transmissionbt.com/) BitTorrent client (with OpenVPN if you have a supported VPN provider)
    - [Sonarr](https://sonarr.tv/) for downloading and managing TV episodes
    - [CouchPotato](https://couchpota.to/) for downloading and managing movies
    - [Portainer](https://portainer.io/) for managing Docker and running custom images
    - [Glances](https://nicolargo.github.io/glances/) for seeing the state of your system via a web browser
    
## What This Doesn't Do

Ansible NAS doesn't set up your disk partitions, primarily because getting it wrong can be incredibly destructive. 
That aside, configuring partitions is usually a one-time (or very infrequent) event, so there's not much to be 
gained by automating it.  

## Hardware

Ansible NAS should work on any recent Ubuntu box. Development was done on Ubuntu 16.04.3 LTS. 

## How To Use

1. `git clone https://www.github.com/davestephens/ansible-nas && cd ansible-nas`
2. Copy `group_vars/all.yml.dist` to  `group_vars/all.yml`. 
3. Open up `group_vars/all.yml` and follow the instructions there for configuring your Ansible NAS.
3. If you plan to use Transmission with OpenVPN, also copy `group_vars/vpn_credentials.yml.dist` to 
`group_vars/vpn_credentials.yml` and input your settings.
4. Modify `inventory` and update it with the hostname of your NAS box.
5. Run the playbook - something like `ansible-playbook -i inventory nas.yml` should do you nicely.

## Migrating from FreeNAS

Assuming that your Ubuntu system disk is separate from your storage (it should be!):

1. Disconnect your drives.
2. Run Ansible NAS against your server.
3. Reconnect your drives.
4. SSH to the server and run `zpool import` to determine available ZFS pools.
5. `zpool import <pool_name>` against the pools you want to attach.
6. `chown -R root:root /mnt/<volume>` to fix the ownership of the data 

## TODO
1. Handle Docker containers being enabled then subsequently disabled (i.e clean up afterwards)
2. SMART disk monitoring

## Contributing
Contributions welcome!
