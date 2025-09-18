#!/bin/bash

echo "Starting Full Stack Development Environment..."
echo

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing root dependencies..."
    npm install
fi

# Check if web node_modules exists
if [ ! -d "web/node_modules" ]; then
    echo "Installing web dependencies..."
    cd web
    npm install
    cd ..
fi

# Check if api virtual environment exists
if [ ! -d "api/venv" ]; then
    echo "Creating Python virtual environment..."
    cd api
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    cd ..
else
    echo "Activating Python virtual environment..."
    cd api
    source venv/bin/activate
    cd ..
fi

echo
echo "Starting development servers..."
echo "Web: http://localhost:3000"
echo "API: http://localhost:8000"
echo "API Docs: http://localhost:8000/docs"
echo

# Start both servers concurrently
npm run dev