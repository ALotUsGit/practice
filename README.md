# tsx-tailwind-npm

[tsx-tailwind-npm]  
1. npm create vite@latest .  
    - choose React  
    - choose Typescript + swc  
2. npm install -D tailwindcss postcss autoprefixer  
3. npx tailwindcss init -p
4. tailwind.config.js에 추가  
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],  
5. tailwind.css에 추가  
    @tailwind base;  
    @tailwind components;  
    @tailwind utilities;  
6. 실행 npm run dev

tailwind site - Download  
https://tailwindcss.com/docs/guides/vite#react