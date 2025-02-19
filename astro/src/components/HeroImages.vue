<script setup lang="ts">
import { ref, onMounted } from "vue";

interface StrapiImage {
  url: string;
  formats: {
    large?: { url: string };
    medium?: { url: string };
    small?: { url: string };
    thumbnail?: { url: string };
  };
}

interface StrapiProduct {
  Images: StrapiImage[];
}

const featuredImages = ref<string[]>([]);
const loading = ref(true);

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
  } catch (error) {
    console.error("Error fetching images:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(fetchImages);
</script>

<template>
  <div v-if="!loading" class="absolute inset-0 z-0">
    <div
      v-for="(img, index) in featuredImages"
      :key="index"
      class="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2"
      :class="index === -1 ? 'animate-fade-slide' : ''"
      :style="`animation-delay: ${index * 1}s`"
    >
      <img
        :src="`${url}${img}`"
        alt="Featured furniture"
        class="h-full w-full object-contain"
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
