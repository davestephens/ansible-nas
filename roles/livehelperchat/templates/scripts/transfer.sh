#!/bin/sh
fileCron='/code/running-workflow-transfer'

for i in {1..30}
do
    if [ ! -f $fileCron ];
    then
      touch $fileCron;
      cd /code && /usr/local/bin/php cron.php -s site_admin -c cron/transfer_workflow >> cache/transfer.log
      echo "$(tail -1000 cache/transfer.log)" > cache/transfer.log
      rm -f $fileCron;
    else
      if [ `stat --format=%Y $fileCron` -le $(( `date +%s` - 30 )) ]; then
        rm -f $fileCron;
      fi
      echo "Already running"
    fi
    sleep 2
done