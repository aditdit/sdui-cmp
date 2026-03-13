// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "ModulaUI",
    platforms: [
        .iOS(.v15)
    ],
    products: [
        // The library that other projects will import
        .library(
            name: "ModulaUI",
            targets: ["ModulaUI"]
        ),
    ],
    dependencies: [],
    targets: [
        // Our Swift wrapper code
        .target(
            name: "ModulaUI",
            dependencies: [
                .target(name: "ModulaSDK")
            ]
        ),
        // The underlying Kotlin Multiplatform binary (now local to the package)
        .binaryTarget(
            name: "ModulaSDK",
            path: "./Frameworks/ModulaSDK.xcframework"
        )
    ]
)
