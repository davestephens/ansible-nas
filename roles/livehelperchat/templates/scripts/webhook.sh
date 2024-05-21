#!/bin/sh

fileCronHook='/code/running-webhook'

for i in {1..3}
do
    if [ ! -f $fileCronHook ];
    then
      touch $fileCronHook;
      cd /code && /usr/local/bin/php cron.php -s site_admin -c cron/webhook >> cache/webhook.log
      echo "$(tail -1000 cache/webhook.log)" > cache/webhook.log
      rm -f $fileCronHook;
    else
      if [ `stat --format=%Y $fileCronHook` -le $(( `date +%s` - 30 )) ]; then
        rm -f $fileCronHook;
      fi
      echo "Already running"
    fi
    sleep 20
done