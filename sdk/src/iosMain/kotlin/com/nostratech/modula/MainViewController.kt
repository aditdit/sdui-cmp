package com.nostratech.modula

import androidx.compose.ui.window.ComposeUIViewController
import platform.UIKit.UIViewController

/**
 * Entry point for iOS to render the SDUI content.
 */

/**
 * Membungkus SDUIRenderer Composable ke dalam UIViewController.
 * Dinamai SDUIViewController untuk menghindari konflik nama dengan fungsi Composable.
 */
fun SDUIViewController(components: List<SDUIComponent>): UIViewController = ComposeUIViewController(
    configure = { enforceStrictPlistSanityCheck = false }
) {
    SDUIRenderer(components = components)
}

/**
 * Merender SDUI menggunakan String JSON.
 */
fun MainViewController(json: String): UIViewController = ComposeUIViewController(
    configure = { enforceStrictPlistSanityCheck = false }
) {
    val parser = SduiParser()
    val components = parser.parse(json)
    SDUIRenderer(components = components)
}
