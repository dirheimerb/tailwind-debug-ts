import type { Config } from 'tailwindcss';
import {debugScreens} from './src/index';

const config: Config = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './public/index.html',
        './public/asset/css/*.css',
    ],
    theme: {
        screens: {
            debug: '480px'
        },
        extend: {},
    },
    plugins: [
        debugScreens
    ]
};

export default config;
