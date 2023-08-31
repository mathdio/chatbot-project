#!/bin/bash

# List all files and folders in the current directory
ls

# Change directory to "frontend"
cd frontend || exit 1

# Run the "npm run start" command
npm run start
