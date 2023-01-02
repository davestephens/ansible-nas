#!/bin/bash
#
# Ansible-NAS role tester
#

# Exit on any individual command failure.
set -e

# Pretty colors.
red='\033[0;31m'
green='\033[0;32m'
neutral='\033[0m'

timestamp=$(date +%s)


for f in ./roles/*; do
  if [[ -d "$f/molecule" ]]; then
    pushd "$f"
      molecule -c ../../tests/molecule/base.yml test
    popd
  fi
done
