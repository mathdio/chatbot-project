#!/bin/bash

# Change directory to "frontend"
cd backend || exit 1

# Run the "npm run start" command
npm run dev

# Change back to the original directory
cd - || exit 1
