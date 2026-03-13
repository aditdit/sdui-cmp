import Sdui from './NativeSdui';

export function multiply(a: number, b: number): number {
  return Sdui.multiply(a, b);
}

export function getPlatformName(): Promise<string> {
  return Sdui.getPlatformName();
}

export { default as SduiView } from './SduiViewNativeComponent';
