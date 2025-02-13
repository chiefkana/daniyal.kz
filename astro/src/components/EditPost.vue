<script setup lang="ts">
import { computed, type PropType } from "vue";
import { SITE } from "@config";

const props = defineProps({
  editPost: Object as PropType<{
    url?: string;
    disabled?: boolean;
    appendFilePath?: boolean;
    text?: string;
  }>,
  postId: String,
});

const editPostUrl = computed(
  () => props.editPost?.url ?? SITE?.editPost?.url ?? ""
);

const showEditPost = computed(
  () => !props.editPost?.disabled && editPostUrl.value.length > 0
);

const finalEditPostUrl = computed(() => {
  const append =
    props.editPost?.appendFilePath ?? SITE?.editPost?.appendFilePath ?? false;
  return append && props.postId
    ? `${editPostUrl.value}/${props.postId}`
    : editPostUrl.value;
});

const editPostText = computed(
  () => props.editPost?.text ?? SITE?.editPost?.text ?? "Edit"
);
</script>

<template>
  <template v-if="showEditPost">
    <span aria-hidden="true"> | </span>
    <a
      class="space-x-1.5 hover:opacity-75"
      :href="finalEditPostUrl"
      rel="noopener noreferrer"
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icons-tabler-outline icon-tabler-edit fill-skin-base inline-block !scale-90"
        aria-hidden="true"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
        <path
          d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"
        />
        <path d="M16 5l3 3" />
      </svg>
      <span class="text-base italic">{{ editPostText }}</span>
    </a>
  </template>
</template>
