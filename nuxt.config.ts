import { NuxtConfig } from '@nuxt/types'
import * as dotenv from 'dotenv'

dotenv.config()

const config: NuxtConfig = {
  target: 'static',
  ssr: false,
  head: {
    title: 'f-mj.com',
    titleTemplate: '%s - Find my journey',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Find my journey',
      },
      { hid: 'og:type', property: 'og:type', content: 'article' },
    ],
    link: [
      { rel: 'icon', sizes: '48x48', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/manifest.json' },
    ],
  },
  css: ['~/assets/css/tailwind.css'],
  plugins: ['~/plugins/apollo'],
  components: [
    '~/components',
    '~/components/buttons',
    '~/components/tailblocks',
    '~/components/page-subs/blog',
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
      // {
      //   code: 'en',
      //   iso: 'en-US',
      //   file: 'common/en.json',
      //   name: 'EN',
      //   language: 'English',
      // },
      {
        code: 'es',
        iso: 'es-PE',
        file: 'common/es-PE.json',
        name: 'ESPAÑOL',
        language: 'Español',
      },
      {
        code: 'ja',
        iso: 'ja-JP',
        file: 'common/ja.json',
        name: '日本語',
        language: 'Japanese',
      },
    ],
    strategy: 'prefix_and_default',
    defaultLocale: 'es',
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: 'es',
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    vueI18nLoader: true,
    parsePages: false,
    // make sure to match this routes with locales/common/_lan_.json > route._prop file
    pages: {
      'about/about_es': {
        es: '/nosotros',
      },
      'about/about_ja': {
        ja: '/about-us',
      },
      'booking/booking_es': {
        es: '/como-reservar',
      },
      'booking/booking_ja': {
        ja: '/booking',
      },
      'contact/contact_es': {
        es: '/contactanos',
      },
      'contact/contact_ja': {
        ja: '/contact',
      },
      'terms-conditions/terms-conditions_ja': {
        ja: '/privacy-policy',
      },
      'terms-conditions/terms-conditions_es': {
        es: '/terminos-y-condiciones',
      },
    },
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
  firebase: {
    config: {
      apiKey: process.env.FIREBASE_CONFIG_API_KEY,
      authDomain: 'fmj-site.firebaseapp.com',
      projectId: 'fmj-site',
      storageBucket: 'fmj-site.appspot.com',
      messagingSenderId: '307908233050',
      appId: '1:307908233050:web:705932be63b738e9121563',
      measurementId: 'G-XRY52CDVDQ',
    },
    services: {
      analytics: true,
    },
  },
  googleFonts: {
    families: {
      'Noto+Sans': true,
      'Noto+Sans+JP': true,
      'Noto+Serif': true,
      'Noto+Serif+JP': true,
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
