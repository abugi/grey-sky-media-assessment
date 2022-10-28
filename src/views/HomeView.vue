<script setup>
import { reactive, ref } from "vue";
import AppButton from "../components/AppButton.vue";
import AppInput from "../components/AppInput.vue";
import ProductList from "../components/ProductList.vue";
import data from "../db/data.js";

const seachParameter = ref("");
let products = reactive({ data: data });

const filterProducts = (value) => {
  seachParameter.value = value;
};

const searchProducts = () => {
  const result = products.data.filter((tick) =>
    tick.name.toLowerCase().includes(seachParameter.value.toLowerCase())
  );

  products.data = result;
};
</script>

<template>
  <h1 class="text-2xl font-medium mb-[16px]">Products</h1>
  <section class="p-[16px] bg-white rounded-[8px] text-sm">
    <div class="flex items-center mb-[8px]">
      <AppInput placeHolder="Find a Product" @filter="filterProducts" />
      <app-button
        class="bg-primary-blue border border-primary-blue"
        @triggerAction="searchProducts"
      >
        components: { ProductList },
        <template v-slot:button-text>Search</template>
      </app-button>
    </div>
    <div class="flex items-center">
      <AppInput placeHolder="Product Name" />
      <app-button class="bg-primary-green border border-primary-green">
        <template v-slot:button-text>Add Product</template>
      </app-button>
    </div>
    <product-list :products="products.data"></product-list>
  </section>
  <section class="my-3 flex items-center justify-between text-xs">
    <div class="flex items-center">
      <span>page</span>
      <span class="font-bold mx-2">1</span>
      <span>of</span>
      <span class="font-bold mx-2">2</span>
    </div>
    <div>
      <span>Sort by</span>
      <span>Sort Order</span>
    </div>
    <div class="relative">
      <div class="flex items-center">
        <span class="font-bold mr-1.5">10</span>
        <img src="../assets/images/chevron-down.svg" alt="select page size" />
      </div>
      <ul>
        <li></li>
      </ul>
    </div>
  </section>
</template>
