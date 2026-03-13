package com.nostratech.modula
import kotlin.test.Test
import kotlin.test.assertTrue

class SduiTest {
    @Test
    fun testParse() {
        val parser = SduiParser()
        val mock = parser.getMockData()
        val result = parser.parse(mock)
        println("Result size: ${result.size}")
        assertTrue(result.isNotEmpty())
    }
}
