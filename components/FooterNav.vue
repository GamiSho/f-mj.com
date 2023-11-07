<template>
  <footer class="pt-7 lg:pt-12 px-8 text-white bg-blue">
    <div
      class="md:container flex flex-col md:flex-row justify-center gap-5 md:gap-10 font-medium text-md"
    >
      <NuxtLink
        class="block px-1 h-6 hover:opacity-60"
        :to="localePath({ path: `/${$t('route.tours')}` })"
        >{{ $t('title.tours') }}</NuxtLink
      >
      <NuxtLink
        class="block px-1 h-6 hover:opacity-60"
        :to="localeRoute({ path: `/${$t('route.about-us')}` })"
        >{{ $t('title.about-us') }}</NuxtLink
      >
      <NuxtLink
        class="block px-1 h-6 hover:opacity-60"
        :to="localePath({ path: `/${$t('route.booking')}` })"
        >{{ $t('title.booking') }}</NuxtLink
      >
    </div>
    <div class="md:w-80 h-px mx-auto my-6 bg-white"></div>
    <div
      class="md:container flex flex-col md:flex-row justify-center gap-5 md:gap-10 font-light text-base"
    >
      <NuxtLink
        class="hover:opacity-60"
        :to="localePath({ path: `/${$t('route.privacy')}` })"
      >
        {{ $t('title.privacy') }}
      </NuxtLink>
      <NuxtLink
        class="hover:opacity-60"
        :to="localePath({ path: `/${$t('route.contact')}` })"
      >
        {{ $t('title.contact') }}
      </NuxtLink>
    </div>
    <div class="mt-4 pb-10 text-center">
      <span
        class="text-sm font-light"
        :class="{ hidden: $i18n.locale === 'ja' }"
      >
        ©Find My Journey <br />
        WARAKU SERVICE S.R.L <br />
        SUNAT-RUC 20606923733
      </span>
      <span
        class="text-sm font-light"
        :class="{ hidden: $i18n.locale === 'es' }"
      >
        会社情報 <br />
        ペルー国税務省 (SUNAT) <br />
        納税登録番号 (RUC)<br />
        20606923733<br />

        会社名称 <br />
        ©Find My Journey <br />
        WARAKU SERVICE S.R.L
      </span>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {},
})
</script>

<style lang="scss" scoped>
.lang-select {
  li {
    display: none;
    &.is-active {
      display: block;
    }
  }
  &.open {
    & > li {
      display: block;
    }
    & > .is-active {
      text-decoration: underline;
    }
  }
}
</style>
