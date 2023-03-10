// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['./assets/css/global.css'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'Workout Tracker App',
      meta: [
        { name: 'description', content: 'loren' },
      ],
    }
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': 'postcss-nesting',
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
    },
  },
})
