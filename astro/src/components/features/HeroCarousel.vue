<script setup lang="ts">
import Autoplay from "embla-carousel-autoplay";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const plugin = Autoplay({
  delay: 2300,
  stopOnMouseEnter: true,
  stopOnInteraction: false,
});
</script>

<template>
  <main>
    <Carousel
      class="relative w-full"
      :plugins="[plugin]"
      @mouseenter="plugin.stop"
      @mouseleave="[plugin.reset(), plugin.play(), console.log('Running')]"
    >
      <CarouselContent v-bind:class="'rounded-2xl'">
        <CarouselItem v-for="(_, index) in 5" :key="index">
          <div class="w-auto lg:w-full">
            <AspectRatio :ratio="16 / 9">
              <img
                src="https://images.unsplash.com/photo-1692216709176-7bc1f92aeb52?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Photo by Drew Beamer"
                class="rounded-md object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </main>
</template>
