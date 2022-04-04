import { NuxtConfig } from '@nuxt/types'
import * as dotenv from 'dotenv'

dotenv.config()

const config: NuxtConfig = {
  target: 'static',
  ssr: false,
  head: {
    title: 'fmj',
    titleTemplate: '%s - Find my journey',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Find my journey' },
      { hid: 'og:type', property: 'og:type', content: 'article' },
    ],
    link: [
      { rel: 'icon', sizes: '48x48', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/manifest.json' },
    ],
  },
  css: ['~/assets/css/tailwind.css'],
  plugins: [
    '~/plugins/apollo',
  ],
  components: [
    '~/components',
    '~/components/buttons',
    '~/components/tailblocks',
  ],
  buildModules: [
    '@nuxt/postcss8',
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/dotenv',
    '@nuxtjs/google-fonts',
    '@nuxtjs/stylelint-module',
  ],
  modules: [
    '@nuxtjs/apollo',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/firebase',
  ],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
      },
    },
  },
  env: {},
  i18n: {
    locales: [
      {
        code: 'es',
        iso: 'ja-JP',
        file: 'common/ja.json',
        name: 'ES',
        language: 'Español',
      },
      {
        code: 'en',
        iso: 'en-US',
        file: 'common/en.json',
        name: 'EN',
        language: 'English',
      },
    ],
    strategy: 'prefix',
    defaultLocale: 'en',
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: 'en',
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    vueI18nLoader: true,
  },
  generate: {
    fallback: true,
  },
  telemetry: false,
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.GRAPHCMS_ENDPOINT,
        httpLinkOptions: {
          headers: {
            authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
          },
        },
      },
    },
    includeNodeModules: true,
  },
  firebase: 
  {
    config: {
      apiKey: "AIzaSyDfZLB-3c85wXbZJCV4hLfsLL5SggemI_g",
      authDomain: "fmj-site.firebaseapp.com",
      projectId: "fmj-site",
      storageBucket: "fmj-site.appspot.com",
      messagingSenderId: "307908233050",
      appId: "1:307908233050:web:705932be63b738e9121563",
      measurementId: "G-XRY52CDVDQ"
    },
    services: {
      analytics: true,
    },
  },
  googleFonts: {
    families: {
      Poppins: {
        wght: [200, 300, 400, 600, 700],
        ital: [300],
      },
    },
    display: 'swap',
    inject: false,
  },
  sitemap: {
    hostname: 'https://f-mj.com',
    gzip: true,
    i18n: true,
    filter({ routes }: { routes: any[] }) {
      // localeの含まれないpathをsitemap.xmlから除外
      return routes.filter((route) => /___/.test(route.name))
    },
  },
}

export default config
