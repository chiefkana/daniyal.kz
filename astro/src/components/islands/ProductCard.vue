<script setup lang="ts">
import type { StrapiProduct } from "@/core/types/strapi";
import { computed } from "vue";

const props = defineProps<{
  product: StrapiProduct;
}>();

const formatPrice = (price: number) =>
  new Intl.NumberFormat("ru-RU").format(price);

const mainImage = computed(() => {
  const images = props.product.Images;
  return (
    import.meta.env.VITE_STRAPI_URL +
    (images?.[0]?.formats?.medium?.url ||
      images?.[0]?.url ||
      "/placeholder.jpg")
  );
});
</script>

<template>
  <article
    class="group relative w-full rounded-xl bg-background-100 p-4 shadow-lg transition-shadow hover:shadow-xl"
  >
    <div class="mb-4 aspect-square overflow-hidden rounded-lg">
      <img
        :src="mainImage"
        :alt="product.Name"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
    </div>

    <div class="mb-3 flex items-start justify-between">
      <h3 class="line-clamp-2 text-lg font-semibold text-text">
        {{ product.Name }}
      </h3>
      <span class="whitespace-nowrap font-bold text-accent-500">
        {{ formatPrice(product.Price) }} ₽
      </span>
    </div>

    <div v-if="product.Colors?.length" class="mb-3 flex gap-2">
      <span
        v-for="(color, index) in product.Colors"
        :key="index"
        class="h-5 w-5 rounded-full border-2 border-secondary-200 shadow-sm"
        :style="{ backgroundColor: color }"
      />
    </div>

    <p
      v-if="product.Description"
      class="mb-4 line-clamp-3 text-sm text-secondary"
    >
      {{
        product.Description.flatMap(b => b.children)
          .map(c => c.text)
          .join(" ")
      }}
    </p>

    <button
      class="w-full rounded-lg bg-accent py-2.5 text-text transition-colors hover:bg-accent-600"
      @click="$emit('add-to-cart', product)"
    >
      В корзину
    </button>
  </article>
</template>

<style>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}
</style>
