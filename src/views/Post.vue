<template>
  <div v-if="post && user">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import usePosts from '../composables/usePosts'

const route = useRoute()
const postId = route.params.id
const {posts: post, users: user, llegirPosts, llegirUsers} = usePosts()

onMounted(async () => {
  await llegirPosts(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  await llegirUsers(`https://jsonplaceholder.typicode.com/users/${post.value.id}`)
})
</script>
