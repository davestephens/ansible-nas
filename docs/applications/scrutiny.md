# scrutiny

Homepage: <https://github.com/AnalogJ/scrutiny/>

scrutiny is a Hard Drive S.M.A.R.T Monitoring, Historical Trends & Real World Failure Thresholds.

## Usage

Set `scrutiny_enabled: true` in your `inventories/<your_inventory>/nas.yml` file.

The scrutiny web interface can be found at <http://ansible_nas_host_or_ip:8086>.

## Specific Configuration

To enable more disks to be scrutinized than just sda you'll need to edit your `inventories/<your_inventory>/nas.yml` file and add an override for the devices the scrutiny container can see. Example:

`scrutiny_devices:`  
` - /dev/sda:/dev/sda`   
` - /dev/sdb:/dev/sdb`   
` - /dev/sdc:/dev/sdc`   
` - /dev/sdd:/dev/sdd`  
` - /dev/sde:/dev/sde`  
` - /dev/sdf:/dev/sdf`  
` - /dev/sdg:/dev/sdg`  
` - /dev/sdh:/dev/sdh`  
` - /dev/sdi:/dev/sdi`  
` - /dev/sdj:/dev/sdj`  
` - /dev/sdk:/dev/sdk`  
` - /dev/sdl:/dev/sdl`  
` - /dev/sdm:/dev/sdm`  
` - /dev/sdn:/dev/sdn`  
` - /dev/nvme0n1:/dev/nvme0n1`  
