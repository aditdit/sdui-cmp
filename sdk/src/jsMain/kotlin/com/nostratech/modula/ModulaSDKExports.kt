package com.nostratech.modula

import kotlinx.serialization.json.Json

// ---- JS-exported data classes ----

@JsExport
data class JsSDUIStyle(
    val width: String?,
    val height: String?,
    val backgroundColor: String?,
    val align: String?,
    val arrangement: String?,
    val scrollable: Boolean?,
    val marginLeft: Double?,
    val marginTop: Double?,
    val marginRight: Double?,
    val marginBottom: Double?,
    val paddingLeft: Double?,
    val paddingTop: Double?,
    val paddingRight: Double?,
    val paddingBottom: Double?,
    val round: String?
)

@JsExport
data class JsSDUIComponent(
    val type: String,
    val text: String?,
    val fontSize: Int?,
    val color: String?,
    val label: String?,
    val action: String?,
    val children: Array<JsSDUIComponent>?,
    val style: JsSDUIStyle?
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (other !is JsSDUIComponent) return false
        return type == other.type &&
                text == other.text &&
                label == other.label &&
                action == other.action
    }

    override fun hashCode(): Int {
        var result = type.hashCode()
        result = 31 * result + (text?.hashCode() ?: 0)
        result = 31 * result + (label?.hashCode() ?: 0)
        result = 31 * result + (action?.hashCode() ?: 0)
        return result
    }
}

// ---- Conversion helpers ----

private fun SDUIStyle?.toJs(): JsSDUIStyle? = this?.let {
    JsSDUIStyle(
        width = it.width,
        height = it.height,
        backgroundColor = it.backgroundColor,
        align = it.align,
        arrangement = it.arrangement,
        scrollable = it.scrollable,
        marginLeft = it.margin?.left,
        marginTop = it.margin?.top,
        marginRight = it.margin?.right,
        marginBottom = it.margin?.bottom,
        paddingLeft = it.padding?.left,
        paddingTop = it.padding?.top,
        paddingRight = it.padding?.right,
        paddingBottom = it.padding?.bottom,
        round = it.round
    )
}

private fun SDUIComponent.toJs(): JsSDUIComponent = when (this) {
    is TextComponent -> JsSDUIComponent(
        type = "text",
        text = text,
        fontSize = fontSize,
        color = color,
        label = null,
        action = null,
        children = null,
        style = style.toJs()
    )
    is ButtonComponent -> JsSDUIComponent(
        type = "button",
        text = null,
        fontSize = null,
        color = null,
        label = label,
        action = action,
        children = null,
        style = style.toJs()
    )
    is ContainerComponent -> JsSDUIComponent(
        type = "container",
        text = null,
        fontSize = null,
        color = null,
        label = null,
        action = null,
        children = children.map { it.toJs() }.toTypedArray(),
        style = style.toJs()
    )
    is ColumnComponent -> JsSDUIComponent(
        type = "column",
        text = null,
        fontSize = null,
        color = null,
        label = null,
        action = null,
        children = children.map { it.toJs() }.toTypedArray(),
        style = style.toJs()
    )
    is RowComponent -> JsSDUIComponent(
        type = "row",
        text = null,
        fontSize = null,
        color = null,
        label = null,
        action = null,
        children = children.map { it.toJs() }.toTypedArray(),
        style = style.toJs()
    )
}

// ---- Public JS API ----

@JsExport
object ModulaSDK {

    private val parser = SduiParser()

    /**
     * Parse a JSON string and return an array of JsSDUIComponent.
     * Callable from JavaScript/TypeScript as:
     *   ModulaSDK.parse(jsonString)
     */
    fun parse(json: String): Array<JsSDUIComponent> {
        return parser.parse(json).map { it.toJs() }.toTypedArray()
    }

    /**
     * Returns mock data JSON string for demo/testing.
     */
    fun getMockData(): String {
        return parser.getMockData()
    }

    /**
     * Returns parsed mock data as JsSDUIComponent array.
     */
    fun getMockComponents(): Array<JsSDUIComponent> {
        return parse(parser.getMockData())
    }

    /**
     * Returns the platform name (always "Web with Kotlin/JS").
     */
    fun getPlatformName(): String {
        return getPlatform().name
    }
}
