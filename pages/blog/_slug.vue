<template>
  <article v-if="blog" class="md:container p-4">
    <h1 class="text-4xl font-serif font-bold my-10 text-center">
      {{ blog.title }}
    </h1>
    <div class="lg:w-4/6 w-full mx-auto">
      <img :src="blog.image.url" alt="" />
    </div>
    <div class="lg:w-4/6 w-full mx-auto">
      <Contenido :html="blog.contenido.html" />
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, useContext, useRoute } from '@nuxtjs/composition-api'
import { useResult, useQuery } from '@vue/apollo-composable'
import BlogQ from '~/apollo/queries/Blog.gql'
import { Blog } from '~/types/@types'

export default defineComponent({
  layout: 'blog',
  setup() {
    const route = useRoute()
    const slug = route.value.params.slug
    const { app } = useContext()
    const { result } = useQuery(BlogQ, { slug, locale: app.i18n.locale })
    const blog = useResult(result, undefined, (data) => data?.blog as Blog)

    return {
      blog,
    }
  },
})
</script>
