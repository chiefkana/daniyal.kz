<!-- components/ShadcnProductCard.vue -->
<script setup>
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { AspectRatio } from "@/components/ui/aspect-ratio";

  const props = defineProps({
    product: {
      type: Object,
      required: true,
      validator: (value) => {
        return (
          typeof value.id === "string" &&
          typeof value.name === "string" &&
          typeof value.price === "number" &&
          typeof value.imageUrl === "string" &&
          typeof value.description === "string"
        );
      },
    },
  });
</script>

<template>
  <Card class="flex h-full flex-col">
    <CardHeader class="pb-0">
      <AspectRatio :ratio="4 / 3" class="w-full overflow-hidden rounded-md">
        <img
          :src="props.product.imageUrl"
          :alt="props.product.name"
          class="h-full w-full object-cover"
        />
      </AspectRatio>
    </CardHeader>
    <CardContent class="flex-grow pt-4">
      <CardTitle class="mb-2 text-lg">
        {{ props.product.name }}
      </CardTitle>
      <CardDescription class="text-sm">
        {{ props.product.description }}
      </CardDescription>
    </CardContent>
    <CardFooter class="flex flex-col items-start gap-4 p-6 pt-4">
      <p class="text-xl font-semibold">
        $ {{ props.product.price.toFixed(2) }}
      </p>
      <Button class="w-full"> Add to Cart </Button>
    </CardFooter>
  </Card>
</template>