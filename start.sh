#!/bin/bash

# Change directory to "frontend"
cd frontend || exit 1

# Run the "npm run start" command
npm run start

# Change back to the original directory
cd - || exit 1
