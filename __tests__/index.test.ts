import postcss from 'postcss';
import tailwindcss, { Config } from 'tailwindcss';
import debugScreens from '../src/debug-screens';

import path from 'path';

const tailwindsConfig = path.resolve(__dirname, '../tailwind.config.js');

describe('debugScreens plugin', () => {
    it('should generate CSS rules for default screen', async () => {
        const config: Config = {
            plugins: [debugScreens],
            theme: {
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1280px',
                },
            },
            content: [],
        };
        const result = await postcss(tailwindcss(config)).process('@tailwind components;', {
            from: tailwindsConfig,
        });
        expect(result.css).toMatchSnapshot();
    });

    it('should generate CSS rules for custom screen', async () => {
        const config: Config = {
            content: [],
            plugins: [debugScreens],
            theme: {
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1280px',
                    xxl: '1600px',
                },
            },
        };
        const result = await postcss(tailwindcss(config)).process('@tailwind components;', {
            from: tailwindsConfig,
        });
        expect(result.css).toMatchSnapshot();
    });

    it('should generate CSS rules for custom screen with custom prefix', async () => {
        const config: Config = {
            content: [],
            plugins: [debugScreens],
            theme: {
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1280px',
                    xxl: '1600px',
                },
                debugScreens: {
                    prefix: 'screen-',
                },
            },
        };
        const result = await postcss(tailwindcss(config)).process('@tailwind components;', {
            from: tailwindsConfig,
        });
        expect(result.css).toMatchSnapshot();
    });

    it('should generate CSS rules for custom screen with custom position', async () => {
        const config: Config = {
            content: [],
            plugins: [debugScreens],
            theme: {
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1280px',
                    xxl: '1600px',
                },
                debugScreens: {
                    position: ['top', 'right'],
                },
            },
        };
        const result = await postcss(tailwindcss(config)).process('@tailwind components;', {
            from: tailwindsConfig,
        });
        expect(result.css).toMatchSnapshot();
    });
});