<template>
  <div class="flex flex-wrap flex-grow">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script setup >
import usePost from '../composables/usePosts.js'
import PostCard from "../components/PostCard.vue"
const {posts, llegirPosts} = usePost()
llegirPosts("https://jsonplaceholder.typicode.com/posts")
</script>