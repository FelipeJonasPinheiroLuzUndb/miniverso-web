<script setup>
import '../assets/styles/ProjectCard.css'

defineProps({
  area: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true }
})
</script>

<template>
  <article class="project-card">
    <p class="project-area">{{ area }}</p>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <span class="project-link" aria-hidden="true">Explorar projeto ↗</span>
  </article>
</template>

