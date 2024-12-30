# installation

- installing node module 
    npm install

- installing dependency 
  * React router 
    npm install react-router

- Tailwind configuration 
  * installation 
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
  * Add the paths to all of your template files in your
    (tailwind.config.js file.)

    /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

  * Add the @tailwind directives for each of Tailwind’s layers to
    your ./src/index.css file.
 
     @tailwind base;
     @tailwind components;
     @tailwind utilities;


................