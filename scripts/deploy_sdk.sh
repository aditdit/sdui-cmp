#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting SDUI SDK Deployment Flow..."

# 1. Publish to mavenLocal (Android)
echo "📦 Step 1: Publishing Android SDK to mavenLocal..."
./gradlew :modula:publishToMavenLocal

# 2. Compile XCFramework (iOS)
echo "🍏 Step 2: Compiling XCFramework for iOS..."
./gradlew :modula:assembleModulaSDKXCFramework

# 3. Handle Shared iOS Framework (ModulaUI Bundle)
echo "📦 Step 3: Bundling and syncing ModulaUI (Shared iOS Framework)..."

# 3.1 Create internal bundle in packages/ios-sdui
# Hapus folder lama agar tidak conflict
rm -rf packages/ios-sdui/Frameworks
mkdir -p packages/ios-sdui/Frameworks
cp -r sdk/build/XCFrameworks/release/ModulaSDK.xcframework packages/ios-sdui/Frameworks/

# 3.2 Sync the entire bundle to samples/ios-app (making it self-contained)
# Hapus folder lama agar bersih
rm -rf samples/ios-app/Frameworks/ModulaUI
mkdir -p samples/ios-app/Frameworks/ModulaUI
cp -r packages/ios-sdui/* samples/ios-app/Frameworks/ModulaUI/

echo "✅ iOS Framework bundled and synced to samples/ios-app"

# 4. Compile SDK for React Web (JS)
echo "🌐 Step 4: Compiling JS SDK for Web..."
./gradlew :modula:jsProductionLibraryDistribution

# 5. Pack and Install in Web Sample
echo "📦 Step 5: Packing and building React Web SDUI package..."
SD_JS_PATH="sdk/build/dist/js/productionLibrary"
if [ -d "$SD_JS_PATH" ]; then
    cd "$SD_JS_PATH"
    # Create the npm package for the Kotlin/JS core SDK
    npm pack
    cd - > /dev/null
    
    # Copy the packed tgz to the react-web-sdui package
    cp $SD_JS_PATH/modula-sdk-*.tgz packages/react-web-sdui/modula-sdk-1.0.1-SNAPSHOT.tgz
    
    # Build the react-web-sdui package
    echo "🏗️ Building react-web-sdui package..."
    cd packages/react-web-sdui
    npm install
    npm run build
    cd - > /dev/null
    
    # Install the package in the React Web App sample
    echo "⬇️ Installing react-web-sdui in react-web-app sample..."
    cd samples/react-web-app
    npm install
    cd - > /dev/null
fi

# 6. Distribute to React Native (Bridge)
echo "📱 Step 6: Preparing React Native TurboModule package..."
rm -rf packages/react-native-sdui/android/libs
rm -rf packages/react-native-sdui/ios/Frameworks
mkdir -p packages/react-native-sdui/android/libs
mkdir -p packages/react-native-sdui/ios/Frameworks

# Copy Android AAR
if [ -f "sdk/build/outputs/aar/modula-release.aar" ]; then
    cp sdk/build/outputs/aar/modula-release.aar packages/react-native-sdui/android/libs/
elif [ -f "sdk/build/outputs/aar/modula.aar" ]; then
    cp sdk/build/outputs/aar/modula.aar packages/react-native-sdui/android/libs/
fi

# Copy iOS XCFramework (Bridge still needs a local copy if not using SPM)
cp -r sdk/build/XCFrameworks/release/ModulaSDK.xcframework packages/react-native-sdui/ios/Frameworks/

# 7. Pack and Install in React Native Sample
echo "📦 Step 7: Packing and installing React Native SDUI package in sample app..."
cd packages/react-native-sdui
# Install dependencies and prepare (build) using yarn because create-react-native-library uses yarn
yarn install
yarn run prepare
# Pack the react-native-sdui package
yarn pack
cd - > /dev/null

echo "⬇️ Installing react-native-sdui in react-native-app sample..."
cd samples/react-native-app
# Instal tarball yang telah kita buat (Yarn pack will output package.tgz)
npm install file:../../packages/react-native-sdui/package.tgz
cd - > /dev/null

echo "✅ SDUI SDK Deployment Flow Completed!"
