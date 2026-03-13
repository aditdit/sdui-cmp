#!/bin/bash

# Konfigurasi
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR/.."

WORKSPACE_PATH="samples/ios-app/sample.xcworkspace"
SCHEME="sample"
SIMULATOR_NAME="iPhone 17 Pro"
BUNDLE_ID="com.nostratech.modula.sample"
DERIVED_DATA_PATH="build/ios"

echo "🚀 Step 1: Building SDK XCFramework..."
./gradlew :modula:assembleModulaSDKXCFramework

echo "📦 Step 1.1: Synchronizing SDK to Packages and Samples..."
# Path to the newly built XCFramework
SDK_SOURCE="sdk/build/XCFrameworks/debug/ModulaSDK.xcframework"

# Target paths
PACKAGE_TARGET="packages/ios-sdui/Frameworks/"
SAMPLE_PACKAGE_TARGET="samples/ios-app/Frameworks/ModulaUI/Frameworks/"

# Ensure target directories exist
mkdir -p "$PACKAGE_TARGET"
mkdir -p "$SAMPLE_PACKAGE_TARGET"

# Copy XCFramework to targets
cp -R "$SDK_SOURCE" "$PACKAGE_TARGET"
cp -R "$SDK_SOURCE" "$SAMPLE_PACKAGE_TARGET"

echo "🏗️ Step 2: Building iOS App ($SIMULATOR_NAME)..."
xcodebuild -workspace "$WORKSPACE_PATH" \
           -scheme "$SCHEME" \
           -configuration Debug \
           -destination "platform=iOS Simulator,name=$SIMULATOR_NAME" \
           clean build

if [ $? -eq 0 ]; then
    echo "✅ Build Successful!"
    
    echo "📱 Step 3: Preparing Simulator..."
    # Pastikan simulator jalan
    xcrun simctl boot "$SIMULATOR_NAME" 2>/dev/null
    open -a Simulator
    
    echo "📲 Step 4: Installing App..."
    # More robust search for the built app
    APP_PATH=$(find ~/Library/Developer/Xcode/DerivedData -name "sample.app" -path "*Build/Products/Debug-iphonesimulator/sample.app" | head -n 1)
    
    if [ -z "$APP_PATH" ]; then
        echo "❌ Error: Could not find built .app file"
        exit 1
    fi
    
    xcrun simctl install booted "$APP_PATH"
    
    echo "🏁 Step 5: Launching App..."
    xcrun simctl launch booted "$BUNDLE_ID"
    
    echo "✨ Done!"
else
    echo "❌ Build Failed!"
    exit 1
fi
