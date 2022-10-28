<script setup>
const props = defineProps(["placeHolder"]);
const emit = defineEmits(["filter"]);

const filter = (event) => {
  emit("filter", event.target.value);
};
</script>

<template>
  <input
    type="text"
    :placeholder="placeHolder"
    class="w-full border border-primary-grey rounded-[4px] p-2 focus:outline-none mr-3"
    @input="filter($event)"
  />
</template>
