<script setup lang="ts">
import { LOCALE } from "@config";
import { computed, type PropType } from "vue";

const props = defineProps({
  pubDatetime: {
    type: [String, Date] as PropType<string | Date>,
    required: true,
  },
  modDatetime: {
    type: [String, Date] as PropType<string | Date | null>,
    default: null,
  },
});

const myDatetime = computed(
  () =>
    new Date(
      props.modDatetime &&
      new Date(props.modDatetime) > new Date(props.pubDatetime)
        ? props.modDatetime
        : props.pubDatetime
    )
);

const date = computed(() =>
  myDatetime.value.toLocaleDateString(LOCALE.langTag, {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
);

const time = computed(() =>
  myDatetime.value.toLocaleTimeString(LOCALE.langTag, {
    hour: "2-digit",
    minute: "2-digit",
  })
);
</script>

<template>
  <time :datetime="myDatetime.toISOString()">{{ date }}</time>
  <span aria-hidden="true"> | </span>
  <span class="sr-only">&nbsp;at&nbsp;</span>
  <span class="text-nowrap">{{ time }}</span>
</template>
