#!/bin/sh

## exit immediately if uptime is lower than 120 seconds:
uptime_secs=$(cat /proc/uptime | /bin/cut -d"." -f1)
if (( ${uptime_secs} < 120 )); then
    echo "uptime lower than 120 seconds. Exit."
    exit 1
fi

fileCron='/scripts/.enable-cron'

if [ -f $fileCron ] && [ -f /code/settings/settings.ini.php ];
then

numberProcess=$(ps aux | grep "[0-9] resque-1.2: *" | awk '{print $2}' | wc -l)

if (( $numberProcess > 2 ));
then
  echo "To many running process..."
  exit 1
fi

fileLock="/code/cache/runresque.lock"

if [ -f $fileLock ];
then
    kill -9 $(ps aux | grep "[0-9] resque-1.2: *" | awk '{print $2}')
    cd /scripts/ && ./phpresque.sh
    rm -f $fileLock;
else
    PIDS=`ps aux | grep '[0-9] resque-1.2: *'`
    if [ -z "$PIDS" ]; then
       echo "Starting resque"
       cd /scripts/ && ./phpresque.sh
    fi
fi

fi
