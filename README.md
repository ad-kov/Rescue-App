# Rescue-App
RescueCall is a web application designed for efficient coordination of rescue operations. It allows recording the location, time, status and description of the rescue operation.

## Technologies used

### Frontend

React.js: Library for creating user interfaces.
Axios: Library for HTTP requests to the backend.

### Backend

.NET 8 (ASP.NET Core)
SQL Server: Used as a database system for storing data.
CORS: Cross-domain requests for communication between the frontend and backend during development.

## Requirements

Before starting the project, make sure you have installed:

- [Node.js](https://nodejs.org/)
- [.NET SDK 7.0 or higher](https://dotnet.microsoft.com/en-us/download)


## How to start the project

1. Clone or download the project
2. Inside the project, you will find a file named .env.example. Rename it to .env (without the .example extension). This file contains the environment variables required for the app to function correctly.
4. In the root directory of the project, run the file `setup.bat`

The application will run on:
- **Frontend:** `http://localhost:3000`
- **Backend (API):** `http://localhost:5206`


## Notes

- If you encounter an error with OpenSSL when starting the frontend, add to `rescue-frontend/package.json` in the `"scripts"` section:
```json
"start": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts start"
```

## Running the app without the `.bat` file

If you're unable to run the `.bat` file or would prefer to run the app manually, you can follow these steps:

### in CMD 
cd RescueCall
dotnet restore
dotnet tool install --global dotnet-ef  (if not installed already)
dotnet ef migrations add InitialCreate  (to create the initial migration)
dotnet ef database update  (to apply the migrations and create the database)
cd ../rescue-frontend
npm install
cd ../RescueCall
dotnet run
cd ../rescue-frontend
npm start
Open the application in a browser: http://localhost:3000
