/**
 * ModulaSDK Adapter for React
 * Bridges the Kotlin/JS SDK into TypeScript-friendly API
 */

// ---- Types ----
export interface SDUIStyle {
  width?: string | null;
  height?: string | null;
  backgroundColor?: string | null;
  align?: string | null;
  arrangement?: string | null;
  scrollable?: boolean | null;
  marginLeft?: number | null;
  marginTop?: number | null;
  marginRight?: number | null;
  marginBottom?: number | null;
  paddingLeft?: number | null;
  paddingTop?: number | null;
  paddingRight?: number | null;
  paddingBottom?: number | null;
  round?: string | null;
}

export interface SDUIComponent {
  type: 'text' | 'button' | 'container' | 'column' | 'row' | string;
  text?: string | null;
  fontSize?: number | null;
  color?: string | null;
  label?: string | null;
  action?: string | null;
  children?: SDUIComponent[] | null;
  style?: SDUIStyle | null;
}

// ---- Mock data (mirrors Kotlin SduiParser.getMockData()) ----
const MOCK_DATA = `{
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
        { "type": "button", "label": "Home", "action": "go_home" },
        { "type": "button", "label": "Profile", "action": "go_profile" },
        { "type": "button", "label": "Settings", "action": "go_settings" }
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
}`;

// ---- Normalizer: Converts raw JSON structure to flat SDUIComponent ----
function normalizeStyle(raw: Record<string, unknown> | null | undefined): SDUIStyle | null {
  if (!raw) return null;
  const margin = (raw.margin as Record<string, number> | undefined) ?? {};
  const padding = (raw.padding as Record<string, number> | undefined) ?? {};
  return {
    width: raw.width as string ?? null,
    height: raw.height as string ?? null,
    backgroundColor: raw.backgroundColor as string ?? null,
    align: raw.align as string ?? null,
    arrangement: raw.arrangement as string ?? null,
    scrollable: raw.scrollable as boolean ?? null,
    marginLeft: margin.left ?? null,
    marginTop: margin.top ?? null,
    marginRight: margin.right ?? null,
    marginBottom: margin.bottom ?? null,
    paddingLeft: padding.left ?? null,
    paddingTop: padding.top ?? null,
    paddingRight: padding.right ?? null,
    paddingBottom: padding.bottom ?? null,
    round: raw.round as string ?? null,
  };
}

function normalizeComponent(raw: Record<string, unknown>): SDUIComponent {
  const children = raw.children as Record<string, unknown>[] | undefined;
  return {
    type: raw.type as string,
    text: raw.text as string ?? null,
    fontSize: raw.fontSize as number ?? null,
    color: raw.color as string ?? null,
    label: raw.label as string ?? null,
    action: raw.action as string ?? null,
    children: children ? children.map(normalizeComponent) : null,
    style: normalizeStyle(raw.style as Record<string, unknown> | null),
  };
}

// ---- ModulaSDK API ----
export const ModulaSDK = {
  /**
   * Parse a JSON string (object or array) into SDUIComponent[]
   */
  parse(json: string): SDUIComponent[] {
    try {
      const raw = JSON.parse(json.trim()) as Record<string, unknown> | Record<string, unknown>[];
      if (Array.isArray(raw)) {
        return raw.map(normalizeComponent);
      }
      return [normalizeComponent(raw)];
    } catch (e) {
      console.error('ModulaSDK.parse error:', e);
      return [];
    }
  },

  /**
   * Get mock SDUI JSON data string
   */
  getMockData(): string {
    return MOCK_DATA;
  },

  /**
   * Get mock SDUI parsed components
   */
  getMockComponents(): SDUIComponent[] {
    return this.parse(MOCK_DATA);
  },

  getPlatformName(): string {
    return 'Web (React)';
  },
};

export default ModulaSDK;
