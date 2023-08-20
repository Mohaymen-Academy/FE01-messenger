/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        custom: ['Vazir'],
      },
      textColor: {
        primary: 'rgb(var(--background-color-500))',
        secondary: 'rgb(var(--background-color-50))',
        activeLink: 'rgb(var(--background-color-200))',
      },
      backgroundColor: {
        chatBg: 'rgb(var(--background-color-50))',
        selfChatBg: 'rgb(var(--self-chat-bg-color))',
        chatBoxHover: 'var(--chatbox-hover)',
        primary: 'rgb(var(--background-color-100))',
        secondary: 'rgb(var(--background-color-300))',
        logout: 'rgb(var(--background-color-600))',
        tabButton: 'rgb(var(--background-color-700))',
      },
      borderColor: {
        activeLink: 'rgb(var(--background-color-300))',
        selfChatBg: 'rgb(var(--self-chat-bg-color))',
        primary: 'rgb(var(--background-color-100))',
      },
    },
  },
  plugins: [],
}
