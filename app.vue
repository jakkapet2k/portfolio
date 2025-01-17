<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Jakkapet Portfolio',
  ogTitle: 'Jakkapet - Full Stack Developer',
  description: 'Personal portfolio showcasing my work and experience in web development.',
  ogDescription: 'Full Stack Developer with expertise in Vue.js, Node.js, and modern web technologies.',
  ogImage: '/portfolio-preview.png',
  twitterCard: 'summary_large_image',
})
</script>
