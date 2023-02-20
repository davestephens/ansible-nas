#!/bin/bash
# RClone Config file
RCLONE_CONFIG={{ rclone_config_location }}
export RCLONE_CONFIG
RCLONE_USER_AGENT=animosityapp
export RCLONE_USER_AGENT

# Local Drive
# This must be a local mount point on your server that is used for the source of files
# WARNING: If you make this your rclone Google Drive mount, it will create a move loop
# and delete your files!
# Make sure to this to the local path you are moving from!
LOCAL={{ mergerfs_rclone_local_mount | default('/mnt/local') }}

#exit if running
if [[ $(pidof -x "$(basename "$0")" -o %PPID) ]]; then exit; fi

#check for excludes file
if [[ ! -f /home/{{ rclone_service_user }}/.config/rclone/excludes ]] ; then
    echo ' excludes is not there, aborting.'
    exit 1
fi

#is $LOCAL actually a local disk?
if /bin/findmnt $LOCAL -o FSTYPE -n | grep fuse; then
	echo "fuse file system, exitting"
	exit 1
fi

# Move older local files to the cloud.
/usr/local/bin/rclone move $LOCAL {{ rclone_remote_to_mount }}: --log-file /var/log/cloud_upload.log -v --exclude-from /home/{{ rclone_service_user }}/.config/rclone/excludes --delete-empty-src-dirs --fast-list --drive-stop-on-upload-limit --drive-impersonate {{ rclone_impersonate_user }} --min-age {{ rclone_cloud_upload_min_age }}
