<template>
  <div>
    <h3 class="text-center bg-primary text-white p-2">Order Summary</h3>
    <div class="p-3">
      <table class="table table-sm table-striped">
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Product</th>
            <th class="text-end">Price</th>
            <th class="text-end">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="line in order.lines" :key="line.product.id">
            <td>{{ line.quantity }}</td>
            <td>{{ line.product.name }}</td>
            <td class="text-end">${{ line.product.price.toFixed(2) }}</td>
            <td class="text-end">${{ line.total.toFixed(2) }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th class="text-end" colSpan="3">Total:</th>
            <th class="text-end">${{ order.total.toFixed(2) }}</th>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="text-center">
      <router-link to="/products" class="btn btn-info m-1"> Back </router-link>
      <button
        class="btn btn-success m-1"
        :disabled="order.total == 0.0"
        @click="submit"
      >
        Submit Order
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Order } from "../data/entities";
import { HttpHandler } from "../data/httpHandler";

const store = useStore();
const order: Order = computed(() => store.state.order);
const router = useRouter();

const submit = () => {
  store.dispatch("storeOrder", (order: Order) => {
    return new HttpHandler().storeOrder(order).then((id) => {
      router.push("/summary");
      return id;
    });
  });
};
</script>