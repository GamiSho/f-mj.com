<template>
  <div class="container py-20 bg-white px-2">
    <div>
      <h2 class="text-3xl my-4">
        私たちFind My Journey (FMJ)は、ペルー在・邦人旅行会社です。
      </h2>
      <p class="mb-4 text-lg">
        FMJ の経営理念は、「お客様は家族」です。
        なので、ペルーに住んでいる親戚だと思っていただいて、お気軽にご相談ください！
        どんな要望でも親身になり、実現できるよう努力します。
      </p>
      <p class="mb-4 text-lg">
        8年前、私はペルーに着任し、日本から派遣された旅行会社の駐在員でした。
        その当時、大手旅行代理店からお仕事を受け、旅行者のスケジュール管理やサービスの監督を行っていました。
      </p>
      <p class="mb-4 text-lg">
        ある日、親しい友人がペルーを訪れることになり、彼らからのさまざまな要望や質問を受けました。
        その経験から、旅行会社にいながらも、個別の相談やアドバイスが不足していることに気付きました。
        現地の駐在員と旅行者との間には多くの仲介の部署や業者がありました。
        その関係上、直接の交流が不足しており、交流ができても立場上、自由にアドバイスができませんでした。
        <br />
        ...2021年パンデミックの影響で会社から日本への帰国要請がありました。
        それを受けて、私は元いた会社を退職し、自身のツアー会社・旅行代理店を設立しました。
        <br />
        多分、一生に一度になるペルー旅行を、思い出深い旅行にするため全力を尽くします。
        お客様を家族のように大切にし、ご帰国まで全力でサポートをします。
        <br />
        上野
      </p>
    </div>
    <div class="flex">
      <div class="lg:w-1/4 md:1/2">
        <a
          href="https://f-mj.imgix.net/1-Declaracion.pdf"
          download="Declaracion.pdf"
        >
          <img
            src="https://f-mj.imgix.net/declaracion.png?auto=compress,enhance,forma&w=256&h=363"
            alt=""
          />
        </a>
      </div>
      <div class="lg:w-1/4 md:1/2">
        <a href="https://f-mj.imgix.net/2-Licencia.pdf" download="Licencia.pdf">
          <img
            src="https://f-mj.imgix.net/licencia-1.png?auto=compress,enhance,format&w=256&h=363"
            alt=""
          />
        </a>
      </div>
      <div class="lg:w-1/4 md:1/2">
        <a href="https://f-mj.imgix.net/2-Licencia.pdf" download="Licencia.pdf">
          <img
            src="https://f-mj.imgix.net/licencia-2.png?auto=compress,enhance,format&w=256&h=363"
            alt=""
          />
        </a>
      </div>
      <div class="lg:w-1/4 md:1/2">
        <a
          href="https://f-mj.imgix.net/3-Constancia-de-Gercetur.pdf"
          download="Constancia-de-Gercetur.pdf"
        >
          <img
            src="https://f-mj.imgix.net/constancia-de-gercetur.png?auto=compress,enhance,format&w=256&h=363"
            alt=""
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext, useMeta } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'NosotrosPage',

  setup() {
    const { title } = useMeta()
    const { app } = useContext()
    const localMessages = app.i18n.messages[app.i18n.locale]
    title.value = localMessages['title.about-us'].toString()
  },
  head() {
    return {
      title: 'Nosotros',
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
