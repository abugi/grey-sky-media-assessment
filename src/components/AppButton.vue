<template>
  <button
    class="flex-shrink-0 px-[16px] py-[11px] text-white rounded-[4px] text-xs"
    @click="$emit('triggerAction')"
  >
    <slot name="button-text"></slot>
  </button>
</template>
