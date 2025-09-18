@echo off
echo Starting Full Stack Development Environment...
echo.

REM Check if node_modules exists
if not exist node_modules (
    echo Installing root dependencies...
    npm install
)

REM Check if web node_modules exists
if not exist web\node_modules (
    echo Installing web dependencies...
    cd web
    npm install
    cd ..
)

REM Check if api virtual environment exists
if not exist api\venv (
    echo Creating Python virtual environment...
    cd api
    python -m venv venv
    call venv\Scripts\activate
    pip install -r requirements.txt
    cd ..
) else (
    echo Activating Python virtual environment...
    cd api
    call venv\Scripts\activate
    cd ..
)

echo.
echo Starting development servers...
echo Web: http://localhost:3000
echo API: http://localhost:8000
echo API Docs: http://localhost:8000/docs
echo.

REM Start both servers concurrently
npm run dev