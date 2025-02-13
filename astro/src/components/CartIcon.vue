<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const count = ref(0);
const isAnimating = ref(false);

const handleAddToCart = () => {
  isAnimating.value = true;
  count.value++;
  setTimeout(() => {
    isAnimating.value = false;
  }, 300);
};

onMounted(() => {
  document.addEventListener("add-to-cart", handleAddToCart);
});

onUnmounted(() => {
  document.removeEventListener("add-to-cart", handleAddToCart);
});
</script>

<template>
  <div :class="['relative', { 'animate-bump': isAnimating }]">
    <svg
      class="h-6 w-6 text-primary-900"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
    <span
      v-if="count > 0"
      class="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-accent-500 text-xs text-background-50"
    >
      {{ count }}
    </span>
  </div>
</template>

<style>
.animate-bump {
  animation: bump 300ms ease-out;
}

@keyframes bump {
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(0.9);
  }
  70% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
