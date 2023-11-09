<template>
  <div class="container py-20 bg-white px-2">
    <div>
      <h1 class="text-3xl mt-4">第一段階</h1>
      <h2 class="text-lg mb-20">
        まずはメール・Line・Whatsapp等でお客様のご旅行プランの確認を行います。
        <br />
        こちらからもご提案させていただきますので、ざっくりどのようなプランが良いのかご相談ください。
        <br />
        出発日・期間・訪れたい観光スポット・その他の情報を頂ければ、ご提案致します。
        <br />
        ペルーに住んでいる親戚の感覚で、お気軽にご相談ください。
      </h2>
      <div class="mb-10">
        <h3 class="text-xl font-medium mb-2">第二段階</h3>
        <p class="text-lg">
          次に、プランの相互確認を行い、確定した後、手配を開始します。
          <br />
          手配完了後、手配完了の旨をメールにてお知らせいたします。
        </p>
      </div>
      <div class="mb-10">
        <h3 class="text-xl font-medium mb-2">第三段階</h3>
        <p class="text-lg">
          ご出発日より35日前から30日前までにお客様より支払いを頂き、パスポート情報/フライト情報をお送りいただきます。
          <br />
          ご出発日より30日以内に手配のご依頼を頂いた際は、お支払いを頂き、パスポート情報をお送り頂いた後に手配を開始致します。
          <br />
          お支払いを頂く前に弊社の約款を必ずご確認下さい。
        </p>
      </div>
      <div class="mb-10">
        <h3 class="text-xl font-medium mb-2">第四段階</h3>
        <p class="text-lg">
          ご出発15日前頃に最終日程表及び、チケット類をメールにてお送り致します。
        </p>
      </div>
      <div class="mb-10">
        <h3 class="text-xl font-medium mb-2">お支払い方法</h3>
        <p class="text-lg">
          -クレジットカードの場合、こちらで決済リンクをお送り致しますので、ご自身で決済を行いください。
          <br />
          -銀行振り込みの場合、振込先はペルー/USDとなります。下記銀行情報です。振り込みの手数料はお客様負担となります。*銀行振り込みの場合、25USDを追加でお支払い頂いております。
        </p>
      </div>
      <div class="mb-10">
        <h3 class="text-xl font-medium mb-2">銀行振り込み先：</h3>
        <p class="text-lg">
          銀行名: BBVA PERU
          <br />
          住 所: Av. República de Panamá 3055, San Isidro, Lima, Peru
          <br />
          Swiftコード: BCONPEPL
          <br />
          口座番号：.011-083-000100013331-32
        </p>
        <div class="pt-4">
          <NuxtLink
            class="bg-blue text-white font-bold w-28 py-3 px-4 rounded-full flex justify-between items-center"
            :to="localePath({ path: `/${$t('route.tours')}` })"
          >
            <span class="mr-4">Tours</span>
            <img
              class="transform -rotate-90"
              src="~/assets/arrow-down.svg"
              alt=""
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext, useMeta } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ComoReservarPage',
  setup() {
    const { title } = useMeta()
    const { app } = useContext()
    const localMessages = app.i18n.messages[app.i18n.locale]
    title.value = localMessages['title.blog'].toString()
  },
  head() {
    return {
      title: 'Como reservar',
      titleTemplate: '',
      meta: [
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Find my journey',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: window.location.origin + window.location.pathname,
        },
      ],
    }
  },
})
</script>
