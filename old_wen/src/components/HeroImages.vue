<script setup lang="ts">
import type { StrapiProduct } from "@/core/types/strapi";
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";

const featuredImages = ref<string[]>([]);
const loading = ref(true);
const currentIndex = ref(0);
const slideStates = ref<Record<number, string>>({});
const timer = ref<number | null>(null);

const url = import.meta.env.VITE_STRAPI_URL;
const token = import.meta.env.VITE_STRAPI_TOKEN;

const fetchImages = async () => {
  try {
    const response = await fetch(
      `${url}/api/products?locale=en&filters[Featured][$eq]=true&populate=Images`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const { data } = (await response.json()) as { data: StrapiProduct[] };

    featuredImages.value = data
      .flatMap(product =>
        product.Images.map(img => img.formats.large?.url || img.url)
      )
      .slice(0, 3); // Take first 3 images

    // Initialize all slides to be waiting on the right
    featuredImages.value.forEach((_, index) => {
      slideStates.value[index] = index === 0 ? "active" : "waiting";
    });

    startSlideshow();
  } catch (error) {
    console.error("Error fetching images:", error);
  } finally {
    loading.value = false;
  }
};

const startSlideshow = () => {
  if (featuredImages.value.length <= 1) return;

  timer.value = window.setInterval(() => {
    const prevIndex = currentIndex.value;
    currentIndex.value = (currentIndex.value + 1) % featuredImages.value.length;

    // Current active slide starts leaving
    slideStates.value[prevIndex] = "leaving";

    // New slide becomes active
    slideStates.value[currentIndex.value] = "active";

    // After animation completes, move the leaving slide back to waiting position
    setTimeout(() => {
      // Only update if it's still in leaving state
      if (slideStates.value[prevIndex] === "leaving") {
        // Remove transition temporarily
        slideStates.value[prevIndex] = "no-transition";

        // Use nextTick to ensure the no-transition is applied first
        nextTick(() => {
          // Wait a tiny bit to ensure no-transition is processed
          setTimeout(() => {
            slideStates.value[prevIndex] = "waiting";
          }, 20);
        });
      }
    }, 1000); // Same duration as CSS transition
  }, 2000);
};

onMounted(fetchImages);

onBeforeUnmount(() => {
  if (timer.value !== null) {
    clearInterval(timer.value);
  }
});
</script>

<template>
  <div v-if="!loading" class="absolute inset-0 z-0 overflow-hidden">
    <div
      v-for="(img, index) in featuredImages"
      :key="index"
      class="absolute left-0 top-0 h-full w-full"
      :class="{
        'transition-all duration-1000 ease-in-out':
          slideStates[index] !== 'no-transition',
        'slide-active': slideStates[index] === 'active',
        'slide-leaving': slideStates[index] === 'leaving',
        'slide-waiting':
          slideStates[index] === 'waiting' ||
          slideStates[index] === 'no-transition',
      }"
    >
      <img
        :src="`${url}${img}`"
        alt="Featured furniture"
        class="h-full w-full object-cover"
        loading="eager"
        :srcset="`
          ${url}${img} 1200w,
          ${url}${img.replace('large', 'medium')} 800w,
          ${url}${img.replace('large', 'small')} 500w
        `"
        sizes="(max-width: 768px) 100vw, 1200px"
      />
    </div>
  </div>

  <div v-else class="absolute inset-0 z-0 animate-pulse bg-gray-100"></div>
</template>

<style scoped>
.slide-active {
  opacity: 1;
  transform: translateX(0);
  z-index: 2;
}

.slide-leaving {
  opacity: 0;
  transform: translateX(-100%);
  z-index: 1;
}

.slide-waiting {
  opacity: 0;
  transform: translateX(100%);
  z-index: 1;
}
</style>
