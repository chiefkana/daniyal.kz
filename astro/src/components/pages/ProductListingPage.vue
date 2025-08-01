<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import axios from "axios";

import ProductCardGrid from "@/components/widgets/product-grid/features/ProductCardGrid.vue";

/* shadcn-vue */
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

/* i18n */
const { t, locale } = useI18n();

/* filters */
const selectedStyle = ref(null);
const selectedCategory = ref(null);

/* data */
const products = ref([]);

/* localized options */
const styleOptions = computed(() => [
  { value: "classical", label: t("filters.style.classical") },
  { value: "minimal",   label: t("filters.style.minimal") },
  { value: "cozy",      label: t("filters.style.cozy") },
]);
const categoryOptions = computed(() => [
  { value: "chairs",    label: t("filters.category.chairs") },
  { value: "sofas",     label: t("filters.category.sofas") },
  { value: "beds",      label: t("filters.category.beds") },
  { value: "wardrobes", label: t("filters.category.wardrobes") },
]);

/* Strapi URL */
const API_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

/* fetch helper */
async function fetchProducts() {
  try {
    const params = { locale: locale.value, populate: "*" };
    if (selectedStyle.value)
      params["filters[style][$eq]"] = selectedStyle.value;
    if (selectedCategory.value)
      params["filters[category][$eq]"] = selectedCategory.value;

    const { data } = await axios.get(`${API_URL}/api/furnitures`, {
      params,
    });
    products.value = data.data.map((item) => ({
      id: item.id,
      ...item.attributes,
    }));
  } catch (err) {
    console.error("Failed to load products:", err);
    products.value = [];
  }
}

/* initial + watch */
onMounted(fetchProducts);
watch([selectedStyle, selectedCategory], fetchProducts);
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="mb-8 text-3xl font-bold">{{ t("pages.plp.title") }}</h1>

    <!-- FILTER BAR -->
    <div class="flex flex-wrap items-center gap-4 mb-8">
      <!-- Style -->
      <Select v-model="selectedStyle">
        <SelectTrigger class="w-40">
          <SelectValue placeholder="— {{ t('filters.style.label') }} —" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem
            v-for="opt in styleOptions"
            :key="opt.value"
            :value="opt.value"
          >
            {{ opt.label }}
          </SelectItem>
        </SelectContent>
      </Select>

      <!-- Category -->
      <Select v-model="selectedCategory">
        <SelectTrigger class="w-40">
          <SelectValue
            placeholder="— {{ t('filters.category.label') }} —"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem
            v-for="opt in categoryOptions"
            :key="opt.value"
            :value="opt.value"
          >
            {{ opt.label }}
          </SelectItem>
        </SelectContent>
      </Select>

      <!-- Actions -->
      <Button variant="secondary" @click="fetchProducts">
        {{ t("filters.apply") }}
      </Button>
      <Button
        variant="ghost"
        @click="
          selectedStyle = null;
          selectedCategory = null;
          fetchProducts();
        "
      >
        {{ t("filters.clear") }}
      </Button>
    </div>

    <!-- USE THE GRID COMPONENT -->
    <ProductCardGrid :products="products" />
  </div>
</template>