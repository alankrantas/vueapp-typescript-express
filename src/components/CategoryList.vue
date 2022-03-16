<template>
  <div className="d-grid gap-2">
    <button
      v-for="c in categories"
      :key="c"
      :class="selected === c ? 'btn btn-primary' : 'btn btn-secondary'"
      @click="emit('selectCategory', c)"
    >
      {{ c }}
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  categories: string[];
  selected: string;
}

defineProps<Props>();

const emit = defineEmits<{
  (e: "selectCategory", category: string): void;
}>();
</script>