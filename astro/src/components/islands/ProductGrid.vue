<script setup lang="ts">
import { watchEffect, ref, onMounted, onUnmounted } from "vue";
import { useProductStore } from "@/core/hooks/useProductStore";
import ProductCard from "@components/islands/ProductCard.vue";
import ProductsFilter from "./ProductsFilter.vue";

const { state, loading, error, loadProducts } = useProductStore();
const observer = ref<IntersectionObserver | null>(null);
const sentinel = ref<HTMLElement | null>(null);

// Load products when filters or page changes
watchEffect(() => {
  loadProducts();
});

// Infinite scroll setup
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
</script>

<template>
  <div class="product-grid">
    <!-- Render product filter -->
    <ProductsFilter client:load />

    <!-- Display error if exists -->
    <div v-if="error" class="error-message">{{ error }}</div>

    <!-- Responsive grid layout: 1 col on mobile, 2 on small screens, 3 on large screens -->
    <div class="lg:grid-cols-3 grid grid-cols-1 gap-6 sm:grid-cols-3">
      <ProductCard
        client:load
        v-for="product in state.products"
        :key="product.id"
        :product="product"
      />
    </div>

    <!-- Loading state indication -->
    <div v-if="loading" class="loading-indicator">Загрузка...</div>

    <!-- Sentinel element for infinite scrolling -->
    <div ref="sentinel" class="scroll-sentinel" />
  </div>
</template>
