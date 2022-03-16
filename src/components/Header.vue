<template>
  <div class="p-1 bg-black text-white text-end">
    {{ displayText }}
    <router-link to="/order" class="btn btn-info m-1">
      Submit Order
    </router-link>
    <button class="btn btn-warning m-1" @click="clear">Clear Order</button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const displayText: string = computed(() => {
  const count = store.state.order.productCount;
  return count === 0
    ? "(No Selection)"
    : `${count} product(s), ` + `$${store.state.order.total.toFixed(2)}`;
});

const clear = () => {
  store.commit("resetOrder");
};
</script>