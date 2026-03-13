#!/bin/bash

# Konfigurasi
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR/.."

echo "🚀 Step 1: Building SDK XCFramework..."
./gradlew :modula:assembleModulaSDKXCFramework

echo "📦 Step 2: Syncing XCFramework to SDUI Package..."
mkdir -p packages/react-native-sdui/ios/Frameworks/
cp -R sdk/build/XCFrameworks/release/ModulaSDK.xcframework packages/react-native-sdui/ios/Frameworks/

echo "🏗️ Step 3: Preparing React Native SDUI Package..."
cd packages/react-native-sdui
yarn install
yarn run prepare
yarn pack
cd - > /dev/null

echo "📦 Step 4: Installing in Sample App..."
cd samples/react-native-app
npm install file:../../packages/react-native-sdui/package.tgz

echo "🍎 Step 5: CocoaPods Install..."
cd ios
pod install
cd ..

echo "📱 Step 6: Running iOS App..."
npm run ios

echo "✨ Done!"
