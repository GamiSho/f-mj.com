<template>
  <div class="w-full py-10">
    <section v-if="postTop" class="blog-hero py-10 mb-10">
      <BlogCardTop
        :slug="postTop.slug"
        :title="postTop.title"
        :image="postTop.image.url"
      />
    </section>
    <section v-if="posts"  class="container grid gap-x-4 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <BlogCard
        v-for="post in posts"
        :key="post.id"
        :slug="post.slug"
        :title="post.title"
        :image="post.image.url"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { useResult, useQuery } from '@vue/apollo-composable'
import BlogsQ from '~/apollo/queries/Blogs.gql'
import { Blog } from '~/types/@types'

export default defineComponent({
  name: 'BlogPage',
  setup() {
    const { result } = useQuery(BlogsQ)
    const initPostTop: Blog = {
      id: '',
      title: '',
      slug: '',
      contenido: { html: '' },
    }
    const postTop = ref<Blog>(initPostTop)
    const posts = ref<Blog[]>([])
    const blogs = useResult(result, [], (data) => data?.blogs as Blog[])
    const [head, ...tail] = blogs.value
    postTop.value = head
    posts.value = tail

    return {
      postTop,
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
