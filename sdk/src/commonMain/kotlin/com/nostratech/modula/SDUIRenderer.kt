package com.nostratech.modula

import androidx.compose.foundation.background
import androidx.compose.foundation.horizontalScroll
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.layout.wrapContentHeight
import androidx.compose.foundation.layout.wrapContentWidth
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun SDUIRenderer(components: List<SDUIComponent>) {
    Column {
        components.forEach { component ->
            SDUIComponentDispatcher(component)
        }
    }
}

@Composable
fun SDUIComponentDispatcher(component: SDUIComponent) {
    when (component) {
        is TextComponent -> TextRenderer(component)
        is ButtonComponent -> ButtonRenderer(component)
        is ContainerComponent -> ContainerRenderer(component)
        is ColumnComponent -> ColumnRenderer(component)
        is RowComponent -> RowRenderer(component)
    }
}

@Composable
fun TextRenderer(component: TextComponent) {
    val textAlign = when (component.style?.align) {
        "center" -> TextAlign.Center
        "end", "right" -> TextAlign.End
        "justify" -> TextAlign.Justify
        else -> TextAlign.Start
    }

    Text(
        text = component.text,
        fontSize = component.fontSize?.sp ?: 16.sp,
        color = component.color.toColor(),
        textAlign = textAlign,
        modifier = Modifier.fromStyle(component.style)
    )
}

@Composable
fun ButtonRenderer(component: ButtonComponent) {
    Button(
        onClick = { /* Handle action: component.action */ },
        contentPadding = PaddingValues(
            start = component.style?.padding?.left?.dp ?: 24.dp,
            top = component.style?.padding?.top?.dp ?: 12.dp,
            end = component.style?.padding?.right?.dp ?: 24.dp,
            bottom = component.style?.padding?.bottom?.dp ?: 12.dp
        ),
        shape = RoundedCornerShape(component.style?.round?.toIntOrNull()?.dp ?: 8.dp),
        colors = ButtonDefaults.buttonColors(
            containerColor = component.style?.backgroundColor.toColor(defaultColor = "#007AFF".toColor()),
            contentColor = Color.White
        ),
        modifier = Modifier.padding(
            start = component.style?.margin?.left?.dp ?: 0.dp,
            top = component.style?.margin?.top?.dp ?: 0.dp,
            end = component.style?.margin?.right?.dp ?: 0.dp,
            bottom = component.style?.margin?.bottom?.dp ?: 0.dp
        )
    ) {
        Text(
            text = component.label,
            fontSize = 16.sp,
            fontWeight = FontWeight.SemiBold
        )
    }
}

@Composable
fun ContainerRenderer(component: ContainerComponent) {
    Box(modifier = Modifier.fromStyle(component.style)) {
        Column {
            component.children.forEach { child ->
                SDUIComponentDispatcher(child)
            }
        }
    }
}

@Composable
fun ColumnRenderer(component: ColumnComponent) {
    val style = component.style
    val verticalArrangement = when (style?.arrangement) {
        "center" -> Arrangement.Center
        "end", "bottom" -> Arrangement.Bottom
        "space-between" -> Arrangement.SpaceBetween
        "space-around" -> Arrangement.SpaceAround
        "space-evenly" -> Arrangement.SpaceEvenly
        else -> Arrangement.Top
    }
    val horizontalAlignment = when (style?.align) {
        "center" -> Alignment.CenterHorizontally
        "end" -> Alignment.End
        else -> Alignment.Start
    }

    Column(
        modifier = Modifier
            .fromStyle(style)
            .then(
                if (style?.scrollable == true)
                    Modifier.verticalScroll(rememberScrollState())
                else
                    Modifier
            ),
        verticalArrangement = verticalArrangement,
        horizontalAlignment = horizontalAlignment
    ) {
        component.children.forEach { child ->
            SDUIComponentDispatcher(child)
        }
    }
}

@Composable
fun RowRenderer(component: RowComponent) {
    val style = component.style
    val horizontalArrangement = when (style?.arrangement) {
        "center" -> Arrangement.Center
        "end", "right" -> Arrangement.End
        "space-between" -> Arrangement.SpaceBetween
        "space-around" -> Arrangement.SpaceAround
        "space-evenly" -> Arrangement.SpaceEvenly
        else -> Arrangement.Start
    }
    val verticalAlignment = when (style?.align) {
        "center" -> Alignment.CenterVertically
        "bottom" -> Alignment.Bottom
        else -> Alignment.Top
    }

    Row(
        modifier = Modifier
            .fromStyle(style)
            .then(
                if (style?.scrollable == true)
                    Modifier.horizontalScroll(rememberScrollState())
                else
                    Modifier
            ),
        horizontalArrangement = horizontalArrangement,
        verticalAlignment = verticalAlignment
    ) {
        component.children.forEach { child ->
            SDUIComponentDispatcher(child)
        }
    }
}

@Composable
private fun Modifier.fromStyle(style: SDUIStyle?): Modifier {
    if (style == null) return this
    var modifier: Modifier = this

    // Margin (outer padding)
    style.margin?.let { m ->
        modifier = modifier.padding(
            start = m.left?.dp ?: 0.dp,
            top = m.top?.dp ?: 0.dp,
            end = m.right?.dp ?: 0.dp,
            bottom = m.bottom?.dp ?: 0.dp
        )
    }

    // Width
    val w = style.width
    modifier = when (w) {
        "match_parent", "fill" -> modifier.fillMaxWidth()
        "wrap_content" -> modifier.wrapContentWidth()
        null -> modifier
        else -> w.toIntOrNull()?.let { modifier.width(it.dp) } ?: modifier
    }

    // Height
    val h = style.height
    modifier = when (h) {
        "match_parent", "fill" -> modifier.fillMaxHeight()
        "wrap_content" -> modifier.wrapContentHeight()
        null -> modifier
        else -> h.toIntOrNull()?.let { modifier.height(it.dp) } ?: modifier
    }

    // Round / Radius (clip background)
    style.round?.let { r ->
        val radius = r.toIntOrNull()?.dp ?: 0.dp
        modifier = modifier.clip(RoundedCornerShape(radius))
    }

    // Background
    style.backgroundColor?.let { bgColor ->
        val parsedColor = bgColor.toColor()
        if (parsedColor != Color.Unspecified) {
            modifier = modifier.background(parsedColor)
        }
    }

    // Padding (inner padding)
    style.padding?.let { p ->
        modifier = modifier.padding(
            start = p.left?.dp ?: 0.dp,
            top = p.top?.dp ?: 0.dp,
            end = p.right?.dp ?: 0.dp,
            bottom = p.bottom?.dp ?: 0.dp
        )
    }

    return modifier
}

fun String?.toColor(defaultColor: Color = Color.Unspecified): Color {
    if (this.isNullOrBlank()) return defaultColor
    return try {
        val hex = this.removePrefix("#")
        val colorLong = when (hex.length) {
            6 -> "FF$hex".toLong(16)
            8 -> hex.toLong(16)
            3 -> { // Handle shorthand hex like #ABC
                val r = hex[0]
                val g = hex[1]
                val b = hex[2]
                "FF$r$r$g$g$b$b".toLong(16)
            }

            4 -> { // Handle shorthand ARGB like #ABCD
                val a = hex[0]
                val r = hex[1]
                val g = hex[2]
                val b = hex[3]
                "$a$a$r$r$g$g$b$b".toLong(16)
            }

            else -> return defaultColor
        }
        Color(colorLong)
    } catch (_: Exception) {
        defaultColor
    }
}
