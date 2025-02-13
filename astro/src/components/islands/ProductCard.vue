<script setup lang="ts">
import type { StrapiProduct } from "@/core/types/strapi.d";

defineProps<{
  product: StrapiProduct;
}>();

const formatPrice = (price: number) =>
  new Intl.NumberFormat("ru-RU").format(price);

const getDescription = (product: StrapiProduct) =>
  product.Description.flatMap(block => block.children)
    .map(child => child.text)
    .join("\n");
</script>

<template>
  <article class="product-card">
    <div class="card-header">
      <h3 class="product-name">{{ product.Name }}</h3>
      <span class="product-price">{{ formatPrice(product.Price) }} ₽</span>
    </div>

    <div class="color-swatches">
      <span
        v-for="(color, index) in product.Colors"
        :key="index"
        class="color-swatch"
        :style="{ backgroundColor: color }"
      />
    </div>

    <p class="product-description">{{ getDescription(product) }}</p>

    <button class="add-to-cart-button">В корзину</button>
  </article>
</template>
