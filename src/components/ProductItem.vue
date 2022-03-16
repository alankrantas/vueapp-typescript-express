<template>
  <div class="card m-1 p-1 bg-light">
    <h4>
      {{ product.name }}
      <span class="badge rounded-pill bg-primary float-end">
        ${{ product.price.toFixed(2) }}
      </span>
    </h4>
    <div class="card-text bg-white p-1">
      <span class="text-muted">
        {{ product.description }}
      </span>
      <button class="btn btn-success btn-sm float-end" @click="handleAddToCart">
        Add To Cart
      </button>
      <select
        class="form-control-inline float-end m-1"
        v-model.number="quantity"
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Product, ProductSelection } from "../data/entities";

interface Props {
  product: Product;
}

const props = defineProps<Props>();
const quantity = ref<number>(1);

const emit = defineEmits<{
  (e: "addToCart", newLine: ProductSelection): void;
}>();

const handleAddToCart = () => {
  emit("addToCart", {
    product: props.product,
    quantity: quantity.value,
  });
};
</script>

