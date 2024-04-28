# Debug Screens Tailwind CSS Plugin

This plugin adds a visual overlay to your Tailwind CSS project to help developers see which media query is currently active. It's designed for development use to assist in responsive design debugging.

## Installation

Before you can use or test the plugin, you need to have Node.js installed. If you don't have Node.js installed, you can download and install it from [Node.js official website](https://nodejs.org/).

### Step 1: Install Dependencies

After setting up Node.js, you need to install the necessary dependencies. Run the following commands in your project directory:

```bash
npm install tailwindcss postcss autoprefixer jest postcss-js --save-dev
```

This will install Tailwind CSS, PostCSS, Autoprefixer (required by Tailwind CSS), Jest for testing, and postcss-js for running PostCSS in a JavaScript environment.

### Step 2: Configure Tailwind CSS

Create a `tailwind.config.js` file in your project root if you don't already have one:

```javascript
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [require('./path/to/debugScreens')],
};
```

Replace `./path/to/debugScreens` with the actual path to the plugin file.

### Step 3: Setup Jest

Create a `jest.config.js` file in your project root to configure Jest:

```javascript
module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};
```

This configuration sets up Jest to use the Node environment and transpile JavaScript files using Babel.

### Step 4: Running Tests

To run your tests, you can add a test script to your `package.json`:

```json
"scripts": {
  "test": "jest"
}
```

Then, execute the tests by running:

```bash
npm test
```

## Documentation

Refer to the source code for detailed comments on each part of the plugin's functionality. The plugin's primary features include creating a fixed overlay that indicates the active screen size based on your Tailwind CSS configuration.

## Notes

- This plugin is intended for development use only.
- Ensure that the plugin is not enabled in your production builds to avoid performance overhead.

Thank you for using the Debug Screens Tailwind CSS Plugin!
