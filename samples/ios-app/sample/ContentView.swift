import SwiftUI
import UIKit
import ModulaUI

// SDUIRenderer is now moved to SDUIRenderer.swift for reusability


struct ContentView: View {
    @State private var components: [SDUIComponent] = []
    let parser = SduiParser()
    
    var body: some View {
        VStack {
            if !components.isEmpty {
                SDUIRenderer(components: components)
            } else {
                ProgressView()
            }
        }
        .onAppear {
            let json = parser.getMockData()
            self.components = parser.parse(json: json)
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
