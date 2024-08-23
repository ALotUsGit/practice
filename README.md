# tsx-tailwind-npm

[tsx-tailwind-npm]  
1. npm create vite@latest .  
    - choose React  
    - choose Typescript + swc  
2. npm install -D tailwindcss  
3. npx tailwindcss init  
4. tailwind.config.js에 추가  
    content: ["./src/**/*.{js,jsx,ts,tsx}"],  
5. tailwind.css에 추가  
    @tailwind base;  
    @tailwind components;  
    @tailwind utilities;  
6. 실행 npm run dev
