package com.sdui

import com.facebook.react.BaseReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider
import java.util.HashMap

import com.facebook.react.uimanager.ViewManager

class SduiPackage : BaseReactPackage() {
  override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
    return listOf(SduiViewManager())
  }
  override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? {
    return if (name == SduiModule.NAME) {
      SduiModule(reactContext)
    } else {
      null
    }
  }

  override fun getReactModuleInfoProvider() = ReactModuleInfoProvider {
    mapOf(
      SduiModule.NAME to ReactModuleInfo(
        name = SduiModule.NAME,
        className = SduiModule.NAME,
        canOverrideExistingModule = false,
        needsEagerInit = false,
        isCxxModule = false,
        isTurboModule = true
      )
    )
  }
}
