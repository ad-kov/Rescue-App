# Rescue-App
RescueCall is a web application designed for efficient coordination of rescue operations. It allows recording the location, time, status and description of the rescue operation.

## Requirements

Before starting the project, make sure you have installed:

- [Node.js](https://nodejs.org/)
- [.NET SDK 7.0 or higher](https://dotnet.microsoft.com/en-us/download)


## How to start the project

1. Clone or download the project
2. In the root directory of the project, run the file setup.bash

The application will run on:
- **Frontend:** `http://localhost:3000`
- **Backend (API):** `http://localhost:5206`

## Notes

- If you encounter an error with OpenSSL when starting the frontend, add to `rescue-frontend/package.json` in the `"scripts"` section:
```json
"start": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts start"
