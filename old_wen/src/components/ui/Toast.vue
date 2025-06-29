<!-- Toast.vue -->
<script setup lang="ts">
import { useToastStore } from "@/core/hooks/useToastStore";

const { toasts, dismissToast } = useToastStore();
</script>
<!-- Toast.vue -->
<template>
  <div class="fixed left-1/2 top-20 z-[9999] -translate-x-1/2">
    <transition-group
      name="toast"
      tag="div"
      class="flex flex-col-reverse items-center gap-2"
    >
      <div
        v-for="toast in toasts"
        :key="toast.id.toString()"
        class="relative flex w-[300px] items-center justify-between rounded-lg bg-background p-4 shadow-lg transition-all"
        :class="{
          'border-l-4 border-green-400': toast.type === 'success',
          'border-l-4 border-red-400': toast.type === 'error',
          'border-l-4 border-blue-400': toast.type === 'info',
        }"
      >
        <span class="flex-1 text-text">{{ toast.message }}</span>
        <button
          @click="dismissToast(toast.id)"
          class="ml-4 text-2xl text-text hover:text-accent"
        >
          ×
        </button>
      </div>
    </transition-group>
  </div>
</template>

<style>
.toast-enter-from {
  opacity: 0;
  transform: translateY(0);
}

.toast-enter-to {
  opacity: 1;
  transform: translateY(20px);
}

.toast-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
