<script setup lang="ts">
import { computed } from "vue";
import Datetime from "./Datetime.vue";
import { slugifyStr } from "@utils/slugify";

interface Frontmatter {
  title: string;
  pubDatetime: string | Date;
  modDatetime?: string | Date | null;
  description?: string;
}

const props = defineProps({
  href: String,
  frontmatter: {
    type: Object as () => Frontmatter,
    required: true,
  },
  secHeading: {
    type: Boolean,
    default: true,
  },
});

const headerStyle = computed(() => ({
  viewTransitionName: slugifyStr(props.frontmatter.title),
}));

const headerClass = "text-lg font-medium decoration-dashed hover:underline";
</script>

<template>
  <li class="my-6">
    <a
      :href="href"
      class="text-skin-accent inline-block text-lg font-medium decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
    >
      <template v-if="secHeading">
        <h2 :style="headerStyle" :class="headerClass">
          {{ frontmatter.title }}
        </h2>
      </template>
      <template v-else>
        <h3 :style="headerStyle" :class="headerClass">
          {{ frontmatter.title }}
        </h3>
      </template>
    </a>

    <Datetime
      :pub-datetime="frontmatter.pubDatetime"
      :mod-datetime="frontmatter.modDatetime"
    />

    <p v-if="frontmatter.description">{{ frontmatter.description }}</p>
  </li>
</template>
