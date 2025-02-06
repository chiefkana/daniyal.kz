<template>
  <div class="relative">
    <img :src="mainImage" class="object-cover" />
    <div class="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col space-y-2">
      <img
        v-for="(img, index) in thumbnails"
        :key="index"
        :src="img"
        class="w-16 cursor-pointer hover:scale-105 transition"
        @click="mainImage = img"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const mainImage = ref('/images/chair-hero.png');
const thumbnails = [
  '/images/chair-thumb1.png',
  '/images/chair-thumb2.png',
  '/images/chair-thumb3.png',
];
</script>
