package com.sdui

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.Promise
import com.nostratech.modula.getPlatform

class SduiModule(reactContext: ReactApplicationContext) :
  NativeSduiSpec(reactContext) {

  override fun multiply(a: Double, b: Double): Double {
    return a * b
  }

  // Example function mapping simple return to React Native
  override fun getPlatformName(promise: Promise) {
    promise.resolve(getPlatform().name)
  }

  companion object {
    const val NAME = NativeSduiSpec.NAME
  }
}
