import path from 'path'
import { sync } from 'glob'
import Vue from 'vue'
import { config, RouterLinkStub } from '@vue/test-utils'
import locales from '@/locales/common/en.json'

// nuxt-link 対応
Vue.component('NuxtLink', RouterLinkStub)

// @nuxt/components 対応
sync(path.join(__dirname, '../../components/**/*.vue')).forEach((file) => {
  const name = file.match(/(\w*)\.vue$/)?.[1]
  if (name !== undefined) {
    Vue.component(name, require(file).default)
  }
})

const i18nMock = (key: string) => locales[key as keyof typeof locales]

Vue.config.silent = true
config.mocks.$t = i18nMock
config.mocks.localePath = (i: any) => i
