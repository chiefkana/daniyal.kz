<script setup lang="ts">
import { useProductStore } from "@/core/hooks/useProductStore";

const { updateFilters } = useProductStore();

const handleFilterChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  updateFilters({ [target.name]: target.value });
};
</script>

<template>
  <div
    class="flex items-center justify-center rounded-2xl bg-background-50 p-6 shadow-xl"
  >
    <form
      data-submit-form
      class="flex w-full max-w-6xl flex-col gap-4 sm:flex-row"
    >
      <select
        name="category"
        @change="handleFilterChange"
        class="w-full rounded-lg border border-secondary-200 bg-background-50 p-3 text-primary-900"
      >
        <option value="">Виды</option>
        <option value="Классическая">Классическая</option>
        <option value="Скандинавская">Скандинавская</option>
        <option value="Минимализм">Минимализм</option>
      </select>

      <select
        name="type"
        @change="handleFilterChange"
        class="w-full rounded-lg border border-secondary-200 bg-background-50 p-3 text-primary-900"
      >
        <option value="">Типы</option>
        <option value="Стульчики">Стульчики</option>
        <option value="Кресла">Кресла</option>
        <option value="Диваны">Диваны</option>
        <option value="Спальные">Спальные</option>
        <option value="Кровати">Кровати</option>
      </select>

      <button type="submit" class="hidden"></button>
    </form>
  </div>
</template>

<style></style>
