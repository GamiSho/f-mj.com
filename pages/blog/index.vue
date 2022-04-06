<template>
  <div class="w-full py-10">
    <section class="blog-hero py-10 mb-10">
      <BlogCardTop
        :slug="posts[0].slug"
        :title="posts[0].title"
        :category="posts[0].category"
        :image="posts[0].image"
      />
    </section>
    <section class="container grid gap-x-4 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <BlogCard
        v-for="post in posts"
        :key="post.id"
        :slug="post.slug"
        :title="post.title"
        :category="post.category"
        :image="post.image"
        :posted-at="post.postedAt"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'BlogPage',
  setup() {
    // TODO GraphQL で最初の1記事とそれ以降を分けて取得する
    const posts = [
      {
        id: 1,
        slug: 'test-slug',
        title: 'Artist Reyna Noriega Shares Her Best Self-Care Tips For Women',
        category: 'sample category',
        postedAt: '2022/01/12',
        image: 'https://f-mj.com/img/tours/Cusco/CUSCO.jpg'
      },
      {
        id: 2,
        slug: 'test-slug',
        title: 'Artist Reyna Noriega Shares Her Best Self-Care Tips For Women',
        category: 'sample category',
        postedAt: '2022/01/12',
        image: 'https://f-mj.com/img/tours/Cusco/CUSCO.jpg'
      },
      {
        id: 3,
        slug: 'test-slug',
        title: 'Artist Reyna Noriega Shares Her Best Self-Care Tips For Women',
        category: 'sample category',
        postedAt: '2022/01/12',
        image: 'https://f-mj.com/img/tours/Cusco/CUSCO.jpg'
      },
      {
        id: 4,
        slug: 'test-slug',
        title: 'Artist Reyna Noriega Shares Her Best Self-Care Tips For Women',
        category: 'sample category',
        postedAt: '2022/01/12',
        image: 'https://f-mj.com/img/tours/Cusco/CUSCO.jpg'
      },
      {
        id: 5,
        slug: 'test-slug',
        title: 'Artist Reyna Noriega Shares Her Best Self-Care Tips For Women',
        category: 'sample category',
        postedAt: '2022/01/12',
        image: 'https://f-mj.com/img/tours/Cusco/CUSCO.jpg'
      },
    ]

    return {
      posts,
    }
  },
  head() {
    return {
      title: this.$i18n.t('title.adventure').toString(),
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.$i18n.t('title.blog').toString(),
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

<style lang="scss" scoped>
.blog-hero {
  background: linear-gradient(60deg,#d8f1ff,#5ac5ff);
}
</style>
