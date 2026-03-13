#!/bin/bash

# Konfigurasi
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR/.."

echo "🚀 Step 1: Publishing SDK to mavenLocal..."
./gradlew :modula:publishToMavenLocal

echo "🏗️ Step 2: Running Android Native Sample App..."
cd samples/android-app
./gradlew installDebug

if [ $? -eq 0 ]; then
    echo "✅ Install Successful!"
    
    echo "📲 Step 3: Launching App..."
    adb shell am start -n com.nostratech.modula.sample/com.nostratech.modula.sample.MainActivity
    
    echo "✨ Done!"
else
    echo "❌ Build/Install Failed!"
    exit 1
fi
