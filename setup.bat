@echo off
setlocal

REM .NET SDK
echo Checking .NET SDK...
dotnet --version >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo .NET SDK is not installed. Please install it from https://dotnet.microsoft.com/download
    pause
    exit /b
)

REM EF Core
echo Checking EF Core CLI...
dotnet ef --version >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo Installing EF Core CLI...
    dotnet tool install --global dotnet-ef
)

REM Node.js
echo Checking Node.js...
node -v >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo Node.js is not installed. Please install it from https://nodejs.org/
    pause
    exit /b
)

REM Backendu dependencies
echo Restoring backend dependencies...
cd RescueCall
dotnet restore

REM Frontend dependencies
echo Restoring frontend dependencies...
cd ../rescue-frontend
call npm install
call npm install react-scripts@latest


REM Database
echo Applying database migrations...
cd ../RescueCall
dotnet ef database update

REM Starting frontend a backend
echo Starting frontend and backend...
start cmd /k "cd ../rescue-frontend && npm start"
start cmd /k "cd ../RescueCall && dotnet run"

REM Open in browser
timeout /t 5 >nul
start http://localhost:3000

echo App should be running now.
pause
