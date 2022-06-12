<template>
  <div class="m-2 text-center">
    <h2>Thanks!</h2>
    <p>Thanks for placing your order.</p>
    <p>Your order is #{{ store.state.storedId }}</p>
    <p>We'll ship your goods as soon as possible.</p>
    <router-link to="/products" class="btn btn-primary">OK</router-link>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore();
</script>