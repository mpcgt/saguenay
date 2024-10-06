const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/preline/dist/*.js',
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
    flowbite.plugin(),
  ],
}