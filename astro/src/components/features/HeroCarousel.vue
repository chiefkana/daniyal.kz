<script setup lang="ts">
import Autoplay from "embla-carousel-autoplay";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const plugin = Autoplay({
  delay: 1500,
  stopOnMouseEnter: false,
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
            <AspectRatio :ratio="16 / 9" class="bg-muted">
              <img
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
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
