<script setup lang="ts">
import { computed } from "vue";
import { LOCALE, SITE } from "@config";
import type { PropType } from "vue";
import FormattedDatetime from "./FormattedDatetime.vue";
import EditPost from "./EditPost.vue";

interface DatetimesProps {
  pubDatetime: string | Date;
  modDatetime?: string | Date | null;
}

interface EditPostProps {
  editPost?: {
    url?: string;
    disabled?: boolean;
    appendFilePath?: boolean;
    text?: string;
  };
  postId?: string;
}

const props = defineProps({
  pubDatetime: {
    type: [String, Date] as PropType<string | Date>,
    required: true,
  },
  modDatetime: {
    type: [String, Date] as PropType<string | Date | null>,
    default: null,
  },
  size: {
    type: String as PropType<"sm" | "lg">,
    default: "sm",
  },
  className: {
    type: String,
    default: "",
  },
  editPost: Object as PropType<EditPostProps["editPost"]>,
  postId: String,
});

const showUpdated = computed(
  () =>
    props.modDatetime &&
    new Date(props.modDatetime) > new Date(props.pubDatetime)
);

const sizeClass = computed(() => ({
  "scale-90": props.size === "sm",
  "scale-100": props.size === "lg",
}));

const textSizeClass = computed(() =>
  props.size === "sm" ? "text-sm" : "text-base"
);
</script>

<template>
  <div :class="`flex items-center space-x-2 opacity-80 ${className}`.trim()">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :class="[
        'fill-skin-base inline-block h-6 w-6 min-w-[1.375rem]',
        sizeClass,
      ]"
      aria-hidden="true"
    >
      <path
        d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"
      />
      <path
        d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"
      />
    </svg>

    <span v-if="showUpdated" :class="`italic ${textSizeClass}`">Updated:</span>
    <span v-else class="sr-only">Published:</span>

    <span :class="`italic ${textSizeClass}`">
      <FormattedDatetime
        :pub-datetime="pubDatetime"
        :mod-datetime="modDatetime"
      />
      <EditPost v-if="size === 'lg'" :edit-post="editPost" :post-id="postId" />
    </span>
  </div>
</template>
