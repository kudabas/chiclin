/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}', 'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}', "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        blog: "url(/src/assets/home2.png)",
        why: "url(/src/assets/bgWhy.png)",
        cici: "url(/src/assets/cctv1.png)",
        cats: "url(/src/assets/Banner.png)",
        prod: "url(/src/assets/product.png)",
        home: "url(/src/assets/home1.png)",
        bgcc: "url(/src/assets/bgcc.png)",
        cc1: "url(/src/assets/cctv11.png)",
        j1: "url(/src/assets/journal/1ijesss.png)",
        wave1: "url(/src/assets/wave1.svg)",
        wave2: "url(/src/assets/wave2.svg)",
        puter: "url(/src/assets/footer.png)",
        puter2: "url(/src/assets/footer2.png)",
      },
      colors: {
        primary: '#BD2026',
        bodas: '#FFFFFF',
        hideung: '#000',
        abhu: '#787878',
        abhu2: '#525050',
        second: '#80B315',
        light: '#FFFCFC',
        lemon: '#E6F8BA'
      },
      spacing: {
        atas: '50px'
      },
      fontSize: {
        sm: '12px',
        base: '16px',
        md: '20px',
        lg: '40px',
        llg: '50px',
        xl: '60px',
        xxl: '70px'
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

