<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "vuex";
import { HttpHandler } from "./data/httpHandler";

const store = useStore();
const handler = new HttpHandler();
onMounted(() => store.dispatch("loadProducts", handler.loadProducts));
</script>