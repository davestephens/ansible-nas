#!/bin/bash

# Creates a matrix of roles testable by Molecule for GitHub Actions to use

for f in ./roles/*; do
  if [[ -d "$f/molecule" ]]; then
    test_matrix="${test_matrix} $f"
  fi
done

echo "matrix=$(echo $test_matrix | jq -R -s -c 'sub("\n"; " ") | split(" ")[:-1]')" >> $GITHUB_OUTPUT
