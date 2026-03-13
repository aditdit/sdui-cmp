package com.sdui

import androidx.compose.ui.platform.ComposeView
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.module.annotations.ReactModule
import com.nostratech.modula.SDUIRenderer
import com.nostratech.modula.SduiParser

@ReactModule(name = SduiViewManager.NAME)
class SduiViewManager : SimpleViewManager<ComposeView>() {
  override fun getName() = NAME

  override fun createViewInstance(context: ThemedReactContext): ComposeView {
    return ComposeView(context)
  }

  @ReactProp(name = "sduiJson")
  fun setSduiJson(view: ComposeView, value: String?) {
    if (value != null) {
      view.setContent {
        val parser = SduiParser()
        val components = parser.parse(value)
        SDUIRenderer(components)
      }
    } else {
      view.setContent {}
    }
  }

  companion object {
    const val NAME = "SduiView"
  }
}
