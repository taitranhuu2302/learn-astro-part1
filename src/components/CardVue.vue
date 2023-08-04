<script setup lang="ts">
import "./../styles/card.css"
import {defineProps, onMounted} from 'vue'

const {title, body} = defineProps<{ title: string, body: string }>()

</script>

<template>
  <li class="link-card" @click="console.log('Vue Xin chao')">
    <a>
      <h2>
        {{ title }}
        <span>&rarr;</span>
      </h2>
      <p>
        {{ body }}
      </p>
    </a>
  </li>
</template>

<style scoped>

</style>