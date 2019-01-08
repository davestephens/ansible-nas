# Time Machine

Apple docs: [https://support.apple.com/en-us/HT201250](https://support.apple.com/en-us/HT201250)
Docker image: [https://github.com/mbentley/docker-timemachine](https://github.com/mbentley/docker-timemachine)

Time Machine is an application that allows you to backup files from you Mac.

## Usage

Set `timemachine_enabled: true` in your `group_vars/all.yml` file.

Set the Time Machine specific variables:

<dl>
  <dt><strong>timemachine_data_directory</strong></dt>
  <dd>The absolute path on Ansible NAS where the backup files will be stored</dd>
  <dt><strong>timemachine_volume_size_limit</strong></dt>
  <dd>The maximum amount of space Time Machine can use for the backups in units of MiB.  Set it to 0 for no limit.</dd>
  <dt><strong>timemachine_share_name</strong></dt>
  <dd>The name of the share as it will appear in the Time Machine application. Default is 'TimeMachine'</dd>
  <dt><strong>timemachine_password</strong></dt>
  <dd>The password used to access the share.  Default is 'timemachine'</dd>
  <dt><strong>timemachine_log_level</strong></dt>
  <dd>The verbosity of the logs.  'Error' is the default.</dd>
