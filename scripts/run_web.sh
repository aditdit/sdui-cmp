#!/bin/bash

# Exit on error
set -e

echo "🌐 Starting React Web App..."

# Navigate to the react web app sample directory
cd "$(dirname "$0")/../samples/react-web-app"

# Ensure dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Run the development server
echo "🚀 Running Vite Dev Server..."
npm run dev
