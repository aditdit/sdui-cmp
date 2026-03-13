import type { CSSProperties } from 'react';
import type { SDUIComponent, SDUIStyle } from './sdk/ModulaSDK';

// ---- Style conversion ----
function toReactStyle(style: SDUIStyle | null | undefined): CSSProperties {
  if (!style) return {};
  const css: CSSProperties = {};

  // Margin
  if (style.marginTop) css.marginTop = `${style.marginTop}px`;
  if (style.marginBottom) css.marginBottom = `${style.marginBottom}px`;
  if (style.marginLeft) css.marginLeft = `${style.marginLeft}px`;
  if (style.marginRight) css.marginRight = `${style.marginRight}px`;

  // Padding
  if (style.paddingTop) css.paddingTop = `${style.paddingTop}px`;
  if (style.paddingBottom) css.paddingBottom = `${style.paddingBottom}px`;
  if (style.paddingLeft) css.paddingLeft = `${style.paddingLeft}px`;
  if (style.paddingRight) css.paddingRight = `${style.paddingRight}px`;

  // Width
  if (style.width === 'match_parent' || style.width === 'fill') {
    css.width = '100%';
  } else if (style.width === 'wrap_content') {
    css.width = 'fit-content';
  } else if (style.width) {
    css.width = `${style.width}px`;
  }

  // Height
  if (style.height === 'match_parent' || style.height === 'fill') {
    css.height = '100%';
  } else if (style.height === 'wrap_content') {
    css.height = 'fit-content';
  } else if (style.height) {
    css.height = `${style.height}px`;
  }

  // Background
  if (style.backgroundColor) css.backgroundColor = style.backgroundColor;

  // Border radius
  if (style.round) css.borderRadius = `${style.round}px`;

  // Text align
  if (style.align === 'center') css.textAlign = 'center';
  if (style.align === 'end' || style.align === 'right') css.textAlign = 'right';

  return css;
}

// ---- Component Dispatcher ----
export function SDUIRenderer({ components }: { components: SDUIComponent[] }) {
  return (
    <div className="sdui-root">
      {components.map((comp, i) => (
        <SDUIComponentView key={i} component={comp} />
      ))}
    </div>
  );
}

function SDUIComponentView({ component }: { component: SDUIComponent }) {
  switch (component.type) {
    case 'text': return <TextView component={component} />;
    case 'button': return <ButtonView component={component} />;
    case 'container': return <ContainerView component={component} />;
    case 'column': return <ColumnView component={component} />;
    case 'row': return <RowView component={component} />;
    default:
      console.warn('Unknown SDUI component type:', component.type);
      return null;
  }
}

// ---- Text ----
function TextView({ component }: { component: SDUIComponent }) {
  const baseStyle: CSSProperties = {
    fontSize: component.fontSize ? `${component.fontSize}px` : '16px',
    color: component.color ?? '#000000',
    margin: 0,
    lineHeight: 1.5,
    ...toReactStyle(component.style),
  };
  return <p style={baseStyle}>{component.text}</p>;
}

// ---- Button ----
function ButtonView({ component }: { component: SDUIComponent }) {
  const style = component.style;
  const btn: CSSProperties = {
    backgroundColor: style?.backgroundColor ?? '#007AFF',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: style?.round ? `${style.round}px` : '8px',
    paddingTop: style?.paddingTop ? `${style.paddingTop}px` : '12px',
    paddingBottom: style?.paddingBottom ? `${style.paddingBottom}px` : '12px',
    paddingLeft: style?.paddingLeft ? `${style.paddingLeft}px` : '24px',
    paddingRight: style?.paddingRight ? `${style.paddingRight}px` : '24px',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    marginTop: style?.marginTop ? `${style.marginTop}px` : 0,
    marginBottom: style?.marginBottom ? `${style.marginBottom}px` : 0,
    marginLeft: style?.marginLeft ? `${style.marginLeft}px` : 0,
    marginRight: style?.marginRight ? `${style.marginRight}px` : 0,
    transition: 'all 0.2s ease',
  };
  return (
    <button
      style={btn}
      onClick={() => console.log('SDUI action:', component.action)}
      onMouseEnter={e => {
        (e.currentTarget as HTMLButtonElement).style.opacity = '0.85';
        (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLButtonElement).style.opacity = '1';
        (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
      }}
    >
      {component.label}
    </button>
  );
}

// ---- Container (Box) ----
function ContainerView({ component }: { component: SDUIComponent }) {
  const css: CSSProperties = {
    position: 'relative',
    boxSizing: 'border-box',
    ...toReactStyle(component.style),
  };
  return (
    <div style={css}>
      {component.children?.map((child, i) => (
        <SDUIComponentView key={i} component={child} />
      ))}
    </div>
  );
}

// ---- Column ----
function ColumnView({ component }: { component: SDUIComponent }) {
  const style = component.style;
  const justifyContent = (() => {
    switch (style?.arrangement) {
      case 'center': return 'center';
      case 'end':
      case 'bottom': return 'flex-end';
      case 'space-between': return 'space-between';
      case 'space-around': return 'space-around';
      case 'space-evenly': return 'space-evenly';
      default: return 'flex-start';
    }
  })();
  const alignItems = (() => {
    switch (style?.align) {
      case 'center': return 'center';
      case 'end': return 'flex-end';
      default: return 'flex-start';
    }
  })();
  const css: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent,
    alignItems,
    boxSizing: 'border-box',
    overflowY: style?.scrollable ? 'auto' : 'visible',
    ...toReactStyle(style),
  };
  return (
    <div style={css}>
      {component.children?.map((child, i) => (
        <SDUIComponentView key={i} component={child} />
      ))}
    </div>
  );
}

// ---- Row ----
function RowView({ component }: { component: SDUIComponent }) {
  const style = component.style;
  const justifyContent = (() => {
    switch (style?.arrangement) {
      case 'center': return 'center';
      case 'end':
      case 'right': return 'flex-end';
      case 'space-between': return 'space-between';
      case 'space-around': return 'space-around';
      case 'space-evenly': return 'space-evenly';
      default: return 'flex-start';
    }
  })();
  const alignItems = (() => {
    switch (style?.align) {
      case 'center': return 'center';
      case 'bottom': return 'flex-end';
      default: return 'flex-start';
    }
  })();
  const css: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent,
    alignItems,
    boxSizing: 'border-box',
    overflowX: style?.scrollable ? 'auto' : 'visible',
    ...toReactStyle(style),
  };
  return (
    <div style={css}>
      {component.children?.map((child, i) => (
        <SDUIComponentView key={i} component={child} />
      ))}
    </div>
  );
}
