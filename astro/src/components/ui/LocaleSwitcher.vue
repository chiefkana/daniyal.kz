<!-- LocaleSwitcher.vue -->
<script setup lang="ts">
import { ref } from "vue";
import type { Locales } from "@/core/hooks/useLocale";
import { useLocale } from "@/core/hooks/useLocale";

const { locale, setLocale } = useLocale();
const showDropdown = ref(false);

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}

function handleLocaleClick(newLocale: Locales) {
  setLocale(newLocale);
  showDropdown.value = false;
}
</script>

<template>
  <div class="relative inline-block">
    <button
      @click="toggleDropdown"
      class="flex items-center text-primary-900 transition-colors hover:text-accent-500 focus:outline-none"
    >
      <span class="ml-1 font-medium">{{ locale.toUpperCase() }}</span>
    </button>

    <!-- Dropdown menu -->
    <div
      v-if="showDropdown"
      class="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
    >
      <div class="py-1">
        <button
          v-for="(l, index) in ['ru', 'kk', 'en']"
          :key="index"
          @click="handleLocaleClick(l as Locales)"
          class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
        >
          {{ l.toUpperCase() }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* You can add additional transitions or styling if needed */
</style>
