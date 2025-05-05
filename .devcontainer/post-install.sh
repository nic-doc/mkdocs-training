#!/bin/sh
set -o errexit
set -o nounset

# Configure poetry if installed and pyproject.toml exists
if command -v poetry >/dev/null 2>&1 && [ -f pyproject.toml ]; then
    set -o xtrace
    poetry install --all-extras
    set +o xtrace    
else
    echo "Poetry not found or pyproject.toml not present."
fi