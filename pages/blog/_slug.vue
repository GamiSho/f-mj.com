<template>
  <article v-if="blog" class="container bg-white p-4">
    <h1 class="text-4xl font-bold my-10">{{ blog.title }}</h1>
    <div>
      <img :src="blog.image.url" alt="">
    </div>
    <Contenido :html="blog.contenido.html" />
  </article>
</template>

<script lang="ts">
import { defineComponent, useRoute } from '@nuxtjs/composition-api'
import { useResult, useQuery } from '@vue/apollo-composable'
import BlogQ from '~/apollo/queries/Blog.gql'
import { Blog } from '~/types/@types'

export default defineComponent({
  layout: 'blog',
  setup() {
    const route = useRoute()
    const slug = route.value.params.slug
    const { result } = useQuery(BlogQ, { slug })
    const blog = useResult(result, undefined, (data) => data?.blog as Blog)

    return {
      blog
    }
  }
})
</script>
