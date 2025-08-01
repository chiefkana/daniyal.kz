<script setup>
import ProductCard from "./ProductCard.vue";

const props = defineProps({
  products: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>