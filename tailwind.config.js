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
        selfChatBg: 'var(--self-chat-bg-color)',
        chatBoxHover: 'var(--chatbox-hover)',
        primary: 'rgb(var(--background-color-100))',
        fabBg: 'rgb(var(--background-color-300))',
        logout: 'rgb(var(--background-color-600))',
        replyBg: 'var(--reply-bg-color)',
      },
      borderColor: {
        activeLink: 'rgb(var(--background-color-200))',
        selfChatBg: 'var(--self-chat-bg-color)',
        primary: 'rgb(var(--background-color-100))',
        replyBorder: 'var(--reply-border-color)',
      },
    },
  },
  plugins: [],
}
