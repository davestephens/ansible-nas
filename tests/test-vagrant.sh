#!/bin/bash
DIR=$(dirname "$0")
PLAYBOOK_DIR=$DIR/..

header() {
    clear
    cat << EndOfMessage
 ▄▄▄       ███▄    █   ██████  ██▓ ▄▄▄▄    ██▓    ▓█████         ███▄    █  ▄▄▄        ██████
▒████▄     ██ ▀█   █ ▒██    ▒ ▓██▒▓█████▄ ▓██▒    ▓█   ▀         ██ ▀█   █ ▒████▄    ▒██    ▒
▒██  ▀█▄  ▓██  ▀█ ██▒░ ▓██▄   ▒██▒▒██▒ ▄██▒██░    ▒███          ▓██  ▀█ ██▒▒██  ▀█▄  ░ ▓██▄
░██▄▄▄▄██ ▓██▒  ▐▌██▒  ▒   ██▒░██░▒██░█▀  ▒██░    ▒▓█  ▄        ▓██▒  ▐▌██▒░██▄▄▄▄██   ▒   ██▒
 ▓█   ▓██▒▒██░   ▓██░▒██████▒▒░██░░▓█  ▀█▓░██████▒░▒████▒       ▒██░   ▓██░ ▓█   ▓██▒▒██████▒▒
 ▒▒   ▓▒█░░ ▒░   ▒ ▒ ▒ ▒▓▒ ▒ ░░▓  ░▒▓███▀▒░ ▒░▓  ░░░ ▒░ ░       ░ ▒░   ▒ ▒  ▒▒   ▓▒█░▒ ▒▓▒ ▒ ░
  ▒   ▒▒ ░░ ░░   ░ ▒░░ ░▒  ░ ░ ▒ ░▒░▒   ░ ░ ░ ▒  ░ ░ ░  ░       ░ ░░   ░ ▒░  ▒   ▒▒ ░░ ░▒  ░ ░
  ░   ▒      ░   ░ ░ ░  ░  ░   ▒ ░ ░    ░   ░ ░      ░             ░   ░ ░   ░   ▒   ░  ░  ░
      ░  ░         ░       ░   ░   ░          ░  ░   ░  ░                ░       ░  ░      ░
                                        ░
EndOfMessage
    sleep 5
}

log()  {
    printf "${TIME_FORMAT} %b\n" "$*";
}

fatal_error() {
    printf  "${TIME_FORMAT} \e[41mERROR:\033[0m %b\n" "$*" >&2;
    exit 1
}

test_needs() {
    command -v $1 >/dev/null 2>&1 || fatal_error "Testing Ansible-NAS requires $1 but it's not installed. Please install it and try again."
}

testing_init() {
    log "Checking Vagrant installation"
    test_needs vagrant
}

header
testing_init

log "Starting Vagrant and running playbook"
vagrant up

log "Vagrant up completed, you can connect to the VM at http://172.30.1.5:10080. When you've finished testing, run 'vagrant destroy' to kill the VM."