import plugin from 'tailwindcss/plugin';
import { ThemeConfig } from 'tailwindcss/types/config';
import { ResolvableTo, ScreenConfig, ScreenKeys, ScreensConfig } from "./types";
/**
 * Debug screens plugin
 * @description Debug screens plugin for Tailwind CSS
 * @param {Function} addComponents
 * @param {ThemeConfig} theme
 * @returns {void}
 */
const debugScreens = plugin(({ addComponents, theme }) => {
  const screens: ThemeConfig['screens'] = theme('screens');
  const userStyles = theme('debugScreens.style', {});
  const ignoredScreens = theme('debugScreens.ignore', ['dark']);
  const prefix = theme('debugScreens.prefix', 'screen: ');
  const selector = theme('debugScreens.selector', '.debug-screens');

  const defaultPosition = ['bottom', 'left'];
  const position = theme('debugScreens.position', defaultPosition);
  const positionY = position[0] || defaultPosition[0];
  const positionX = position[1] || defaultPosition[1];
  

const Screens: ResolvableTo<ScreensConfig> = screens as ResolvableTo<ScreensConfig>;
  const components = {
    [`${selector}::before`]: {
      position: 'fixed',
      zIndex: '2147483647',
      [positionY]: '0',
      [positionX]: '0',
      Padding: '.3333333em .5em',
      fontSize: '12px',
      lineHeight: '1',
      fontFamily: 'sans-serif',
      backgroundColor: '#000',
      color: '#fff',
      boxShadow: '0 0 0 1px #fff',
      content: `'${prefix}_'`,
    }
    };
    console.log('components', JSON.stringify(components));
    
Object.entries(screens)
    .filter(([screen]) => !ignoredScreens.includes(screen))
    .forEach(([screen]) => {
        components[`@screen ${screen}`] = {
            position: 'fixed',
            zIndex: '2147483647',
            Padding: '.3333333em .5em',
            fontSize: '12px',
            lineHeight: '1',
            fontFamily: 'sans-serif',
            backgroundColor: '#000',
            color: '#fff',
            boxShadow: '0 0 0 1px #fff',
            content: `'${prefix}${screen}'`,
        };
    });

    Object.entries(Screens).forEach(([key, value]) => {
        if (ignoredScreens.includes(key)) {
          console.log(`Ignoring screen: ${key}`)
          return;
        }

        const screenConfig: ScreenConfig = {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px'
        };
        const screen = screenConfig[key as ScreenKeys];
        const screenValue = typeof value === 'string' ? value : value.raw;
        const screenMin = screenValue.includes('min') ? screenValue.replace('min', '') : screen;
        const screenMax = screenValue.includes('max') ? screenValue.replace('max', '') : screen;
        const screenMinValue = screenMin ? `min-width: ${screenMin}` : '';
        const screenMaxValue = screenMax ? `max-width: ${screenMax}` : '';
        const screenValueString = `${screenMinValue}; ${screenMaxValue}`;
        components[`@media (${screenValueString})`] = {
            position: 'fixed',
            zIndex: '2147483647',
            Padding: '.3333333em .5em',
            fontSize: '12px',
            lineHeight: '1',
            fontFamily: 'sans-serif',
            backgroundColor: '#000',
            color: '#fff',
            boxShadow: '0 0 0 1px #fff',
            content: `'${prefix}${key}'`,
        };
    })
    addComponents(components);
});

export default debugScreens;