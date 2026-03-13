import SwiftUI
import UIKit
@_exported import ModulaSDK

/**
 * SwiftUI Wrapper for SDUIViewController.
 * This makes the usage on iOS identical to Android:
 * SDUIRenderer(components: components)
 */
public struct SDUIRenderer: UIViewControllerRepresentable {
    public let components: [SDUIComponent]
    
    public init(components: [SDUIComponent]) {
        self.components = components
    }
    
    public func makeUIViewController(context: Context) -> UIViewController {
        // Calling the Kotlin implementation
        return MainViewControllerKt.SDUIViewController(components: components)
    }

    public func updateUIViewController(_ uiViewController: UIViewController, context: Context) {}
}
