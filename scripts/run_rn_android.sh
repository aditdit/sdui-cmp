#!/bin/bash

# Konfigurasi
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR/.."

echo "🚀 Step 1: Publishing SDK to mavenLocal..."
./gradlew :modula:publishToMavenLocal

echo "🏗️ Step 2: Preparing React Native SDUI Package..."
cd packages/react-native-sdui
# Ensure build is up to date
yarn install
yarn run prepare
yarn pack
cd - > /dev/null

echo "📦 Step 3: Installing in Sample App..."
cd samples/react-native-app
npm install file:../../packages/react-native-sdui/package.tgz

echo "📱 Step 4: Running Android App..."
npm run android

echo "✨ Done!"
