<template>
  <div>
    <Header :order="order" />
    <div class="container-fluid">
      <div class="row">
        <div class="col-3 p-2">
          <CategoryList
            :categories="categories"
            :selected="selectedCategory"
            @selectCategory="handleSelectCategory"
          />
        </div>
        <div class="col-9 p-2">
          <TransitionGroup name="list" tag="ul">
            <ProductItem
              v-for="p in filteredProducts"
              :key="p.id"
              :product="p"
              @addToCart="handleAddToCart"
            />
          </TransitionGroup>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { Product, Order, ProductSelection } from "../data/entities";
import ProductItem from "../components/ProductItem.vue";
import CategoryList from "../components/CategoryList.vue";
import Header from "../components/Header.vue";

const store = useStore();
const selectedCategory: string = computed(() => store.state.selectedCategory);
const products: Product[] = computed(() => store.state.products);
const order: Order = computed(() => store.state.order);
const categories: string[] = computed(() => store.getters.categories);
const filteredProducts: Product[] = computed(
  () => store.getters.filteredProducts
);

const handleSelectCategory = (category: string) => {
  store.commit("selectCategory", category);
};

const handleAddToCart = (selection: ProductSelection) => {
  store.commit("addToOrder", selection);
};
</script>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.25s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
}
.list-leave-active {
  position: absolute;
}
</style>