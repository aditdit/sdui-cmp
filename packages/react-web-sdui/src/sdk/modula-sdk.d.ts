// TypeScript declarations for Modula SDK (Kotlin/JS)

type Nullable<T> = T | null | undefined;

export interface SDUIStyle {
  width: Nullable<string>;
  height: Nullable<string>;
  backgroundColor: Nullable<string>;
  align: Nullable<string>;
  arrangement: Nullable<string>;
  scrollable: Nullable<boolean>;
  marginLeft: Nullable<number>;
  marginTop: Nullable<number>;
  marginRight: Nullable<number>;
  marginBottom: Nullable<number>;
  paddingLeft: Nullable<number>;
  paddingTop: Nullable<number>;
  paddingRight: Nullable<number>;
  paddingBottom: Nullable<number>;
  round: Nullable<string>;
}

export interface SDUIComponent {
  type: string;
  text: Nullable<string>;
  fontSize: Nullable<number>;
  color: Nullable<string>;
  label: Nullable<string>;
  action: Nullable<string>;
  children: Nullable<SDUIComponent[]>;
  style: Nullable<SDUIStyle>;
}

export interface ModulaSDKType {
  parse(json: string): SDUIComponent[];
  getMockData(): string;
  getMockComponents(): SDUIComponent[];
  getPlatformName(): string;
}

declare const modulaSDK: ModulaSDKType;
export default modulaSDK;
