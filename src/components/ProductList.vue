<script setup>
const props = defineProps(["products"]);

const toggleState = (index) => {
  const product = props.products[index];

  if (product.status === "green") {
    product.status = "yellow";
  } else if (product.status === "yellow") {
    product.status = "red";
  } else if (product.status === "red") {
    product.status = "green";
  }
};
</script>

<template>
  <ul
    class="my-6 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 xl:gap-16 lg:gap-16 md:gap-16 gap-0"
  >
    <li
      v-for="(product, index) in products"
      :key="index"
      class="flex items-center justify-between border-b border-primary-grey py-3"
    >
      <div class="flex items-center">
        <div class="flex-shrink-0 w-[24px] h-[24px] bg-primary-grey">
          <img v-if="product.image" :src="product.image" :alt="product.name" />
        </div>
        <div
          class="flex-shrink-0 w-[9.3px] h-[9.3px] rounded-full mx-3 cursor-pointer"
          :style="{ backgroundColor: product.status }"
          @click="toggleState(index)"
        ></div>
        <div class="mr-6">{{ product.name }}</div>
      </div>
      <div class="flex-shrink-0 flex items-center">
        <div class="mr-3">
          {{
            new Date(product.date) != "Invalid Date"
              ? new Date(product.date).toLocaleDateString()
              : ""
          }}
        </div>
        <img
          src="../assets/images/chevron-down.svg"
          alt="View product"
          class="ml-2"
        />
      </div>
    </li>
  </ul>
</template>
