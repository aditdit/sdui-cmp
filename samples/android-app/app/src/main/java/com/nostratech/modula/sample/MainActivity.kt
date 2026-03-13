package com.nostratech.modula.sample

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import com.nostratech.modula.SDUIRenderer
import com.nostratech.modula.SduiParser
import com.nostratech.modula.sample.ui.theme.ModulaSampleTheme

val outerJson = """
{
    "type": "column",
    "style": {
      "width": "match_parent",
      "backgroundColor": "#F5F7FA",
      "padding": { "top": 40, "left": 16, "right": 16, "bottom": 40 }
    },
    "children": [
      {
        "type": "text",
        "text": "SDUI Unified Layout",
        "fontSize": 28,
        "color": "#1A1A1A",
        "style": { "margin": { "bottom": 8 } }
      },
      {
        "type": "text",
        "text": "Build once, render beautifully on Android, iOS, and Web.",
        "fontSize": 16,
        "color": "#666666",
        "style": { "align": "center", "margin": { "bottom": 32 } }
      },
      {
        "type": "row",
        "style": {
          "width": "match_parent",
          "arrangement": "space-between",
          "margin": { "bottom": 32 }
        },
        "children": [
          {
            "type": "button",
            "label": "Home",
            "action": "go_home"
          },
          {
            "type": "button",
            "label": "Profile",
            "action": "go_profile"
          },
          {
            "type": "button",
            "label": "Settings",
            "action": "go_settings"
          }
        ]
      },
      {
        "type": "column",
        "style": {
          "width": "match_parent",
          "backgroundColor": "#FFFFFF",
          "round": "16",
          "padding": { "top": 24, "bottom": 24, "left": 20, "right": 20 }
        },
        "children": [
          {
            "type": "text",
            "text": "Beautiful Containers",
            "fontSize": 20,
            "color": "#1A1A1A",
            "style": { "margin": { "bottom": 12 } }
          },
          {
            "type": "text",
            "text": "Containers support padding, margin, exact or responsive dimensions, layout arrangements, scaling, and rounded corners natively in the framework.",
            "fontSize": 16,
            "color": "#444444"
          }
        ]
      }
    ]
  }
""".trimMargin()

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            ModulaSampleTheme {
                val parser = remember { SduiParser() }
                val components = remember { parser.parse(outerJson) }

                Scaffold { innerPadding ->
                    Column(
                        modifier = Modifier
                            .background(Color.White)
                            .fillMaxSize()
                            .padding(innerPadding)
                    ) {
                        SDUIRenderer(
                            components = components
                        )
                    }
                }
            }
        }
    }
}
