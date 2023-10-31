<template>
  <div v-if="posts" class="w-full py-10">
    <section
      class="container grid gap-x-4 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    >
      <BlogCard
        v-for="post in posts"
        :key="post.id"
        :slug="post.slug"
        :title="post.title"
        :image="post.image ? post.image.url : ''"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'
import { useResult, useQuery } from '@vue/apollo-composable'
import BlogsQ from '~/apollo/queries/Blogs.gql'
import { Blog } from '~/types/@types'

export default defineComponent({
  layout: 'blog',
  name: 'BlogPage',
  setup() {
    const { app } = useContext()
    const { result } = useQuery(BlogsQ, { locale: app.i18n.locale })
    const posts = useResult(result, [], (data) => data?.blogs as Blog[])

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
  background: linear-gradient(60deg, #d8f1ff, #5ac5ff);
}
</style>
