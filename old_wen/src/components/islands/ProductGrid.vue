<script setup lang="ts">
import { watchEffect, ref, onMounted, onUnmounted, computed } from "vue";
import { useProductStore } from "@/core/hooks/useProductStore";
import ProductCard from "@components/islands/ProductCard.vue";
import ProductsFilter from "./ProductsFilter.vue";

const { state, loading, error, loadProducts } = useProductStore();
const observer = ref<IntersectionObserver | null>(null);
const sentinel = ref<HTMLElement | null>(null);

// Load products whenever filters or page changes
watchEffect(() => {
  loadProducts();
});

// Set up infinite scroll via an IntersectionObserver
onMounted(() => {
  observer.value = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && state.pagination.hasMore && !loading.value) {
        state.pagination.page++;
      }
    },
    { threshold: 0.1 }
  );
  if (sentinel.value) observer.value.observe(sentinel.value);
});

onUnmounted(() => {
  observer.value?.disconnect();
});

// Set grid container classes conditionally.
// If there is only one product, add `justify-items-center` so that the single item is centered.
const gridClasses = computed(() => {
  const baseClasses = "grid grid-cols-1 lg:grid-cols-3 gap-6 py-4";
  return state.products.length === 1
    ? `${baseClasses} justify-items-center`
    : baseClasses;
});
</script>

<template>
  <div class="product-grid">
    <ProductsFilter client:load />

    <div v-if="error" class="error-message">{{ error }}</div>

    <div :class="gridClasses">
      <ProductCard
        client:load
        v-for="product in state.products"
        :key="product.id"
        :product="product"
      />
    </div>

    <div v-if="loading" class="loading-indicator">Загрузка...</div>
    <div ref="sentinel" class="scroll-sentinel" />
  </div>
</template>
