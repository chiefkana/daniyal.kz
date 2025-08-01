<!-- components/CartIcon.vue -->
<script setup lang="ts">
  import { defineProps, toRefs, withDefaults } from "vue";
  import { Button } from "@/components/ui/button"; // shadcn-vue Button
  import { Badge } from "@/components/ui/badge"; // shadcn-vue Badge

  const props = withDefaults(defineProps<{itemCount: number}>(), {itemCount: 0})
  const {itemCount} = toRefs(props)
</script>

<template>
  <!-- Wrap the button in an anchor tag for navigation -->
  <a href="/cart" class="relative">
    <Button variant="ghost" size="icon">
      <!-- Option 1: Using a simple SVG for the cart icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6"
      >
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
        <path d="M3 6h18"></path>
        <path d="M16 10a4 4 0 0 1-8 0"></path>
      </svg>

      <Badge
        v-if="itemCount > 0"
        variant="destructive"
        class="absolute -right-2 -top-2 flex h-5 min-w-[20px] items-center justify-center rounded-full p-0.5 text-xs"
      >
        {{ itemCount }}
      </Badge>
    </Button>
  </a>
</template>