import config from '../tailwind.config';
import { DefaultColors } from "./default-colors";

export enum ScreenSize {
    sm = '640px',
    md = '768px',
    lg = '1024px',
    xl = '1280px'
}

export type ScreenKeys = keyof typeof ScreenSize;
export type ScreenConfig = Record<ScreenKeys, string>;
export const twConfig = Object.defineProperty(config, 'theme', {
    value: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        }
    }
});

export interface DebugScreensOptions {
    style?: Record<string, string | number>; 
    ignore?: string[];
    prefix?: string;
    selector?: string;
    position?: string[];
}




export type Expand<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: Expand<O[K]> }
    : never
  : T
export type KeyValuePair<K extends keyof any = string, V = string> = Record<K, V>


export interface PluginUtils {
  colors: DefaultColors
  theme(path: string, defaultValue?: unknown): any
  breakpoints<I = Record<string, unknown>, O = I>(arg: I): O
  rgb(arg: string): (arg: Partial<{ opacityVariable: string; opacityValue: number }>) => string
  hsl(arg: string): (arg: Partial<{ opacityVariable: string; opacityValue: number }>) => string
}



export type ResolvableTo<T> = T | ((utils: PluginUtils) => T)
export type Screen = { raw: string } | { min: string } | { max: string } | { min: string; max: string }
export type ScreensConfig = string[] | KeyValuePair<string, string | Screen | Screen[]>

export type ScreenThemeConfig = {
 screens: ResolvableTo<ScreensConfig>
 container: ResolvableTo<
    Partial<{
      screens: ScreensConfig
      center: boolean
      padding: string | Record<string, string>
    }>
  >
}