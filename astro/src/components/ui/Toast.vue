<script setup lang="ts">
import { useToastStore } from "@/core/hooks/useToastStore";

const { queue, removeToast } = useToastStore();

type ToastType = "success" | "error" | "info";

const iconMap: Record<ToastType, string> = {
  success: "✅",
  error: "❌",
  info: "i️",
};

const typeClasses: Record<ToastType, string> = {
  success: "bg-green-100 border-green-400 text-green-700",
  error: "bg-red-100 border-red-400 text-red-700",
  info: "bg-blue-100 border-blue-400 text-blue-700",
};
</script>

<template>
  <div class="fixed right-24 top-24 z-50 min-w-[300px] space-y-2">
    <transition-group name="toast">
      <div
        v-for="toast in queue"
        :key="toast.id"
        class="flex items-start gap-3 rounded-lg border-l-4 p-4 shadow-lg"
        :class="typeClasses[toast.type]"
        role="alert"
      >
        <span class="text-xl">{{ iconMap[toast.type] }}</span>
        <p class="flex-1">{{ toast.message }}</p>
        <button
          @click="removeToast(toast.id)"
          class="text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </transition-group>
  </div>
</template>

<!-- Keep the same CSS transitions -->
