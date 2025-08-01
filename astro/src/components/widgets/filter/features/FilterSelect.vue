<!-- components/FilterSelect.vue -->
<script setup>
  import { computed } from "vue";
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { Label } from "@/components/ui/label"; // Used for the filter label

  const props = defineProps({
    label: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
      // Each option should have an 'id' and a 'label' object with 'en', 'ru', 'kz' keys
      validator: (value) =>
        value.every(
          (option) =>
            typeof option.id === "string" &&
            typeof option.label === "object" &&
            typeof option.label.en === "string" &&
            typeof option.label.ru === "string" &&
            typeof option.label.kz === "string",
        ),
    },
    currentLanguage: {
      type: String,
      required: true,
      validator: (value) => ["en", "ru", "kz"].includes(value),
    },
    modelValue: {
      type: String, // The ID of the selected option
      default: "", // Or null, depending on your preference for "no selection"
    },
  });

  const emit = defineEmits(["update:modelValue"]);

  const selectedValue = computed({
    get: () => props.modelValue,
    set: (value) => emit("update:modelValue", value),
  });

  // Display label for the filter category itself (e.g., "Style", "Type")
  const localizedLabel = computed(() => {
    // You might want to pass the localized label directly as a prop
    // or map it here if the parent passes an ID
    // For simplicity, we assume 'label' prop is already in the current language context
    return props.label; // Placeholder, in a real i18n setup, this would be translated
  });
</script>

<template>
  <div class="flex items-center gap-2">
    <Label :for="`${label.toLowerCase()}-filter`">{{ localizedLabel }}</Label>
    <Select v-model="selectedValue">
      <SelectTrigger class="w-[180px]">
        <SelectValue
          :placeholder="
            props.options.find((opt) => opt.id === selectedValue)?.label[
              props.currentLanguage
            ] || 'Select filter...'
          "
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <!-- Option for "All" or "Clear Filter" -->
          <SelectItem value="">
            {{
              props.currentLanguage === "en"
                ? "All"
                : props.currentLanguage === "ru"
                  ? "Все"
                  : "Барлығы"
            }}
          </SelectItem>
          <SelectItem
            v-for="option in props.options"
            :key="option.id"
            :value="option.id"
          >
            {{ option.label[props.currentLanguage] }}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</template>