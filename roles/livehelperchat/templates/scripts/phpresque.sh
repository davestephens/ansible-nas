#!/bin/sh
# live site cronjobs

echo "Running live site cronjobs"
cd /code
REDIS_BACKEND={{ livehelperchat_redis_container_name }}:6379 REDIS_BACKEND_DB=1 INTERVAL=1 COUNT=2 VERBOSE=0 QUEUE='*' /usr/local/bin/php resque.php 2>&1
