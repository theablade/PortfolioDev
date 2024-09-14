/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Ativa o modo escuro com a classe 'dark'
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}' // Certifica-se de que todos os arquivos Vue.js e JS sejam processados
  ],
  theme: {
    extend: {
      colors: {
        'custom-pink': '#FF7789'
      },
      fontFamily: {
        'dm-sans': ['"DMSans"', 'sans-serif'] // Define a fonte normal
      }
    }
  },
  plugins: [
    // Adicione plugins do Tailwind CSS aqui, se necessário
  ]
}
