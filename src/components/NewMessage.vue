<script setup>
defineEmits(["close-modal"]);
defineProps({
  modalActive: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    v-show="modalActive"
    class="absolute w-full z-50 bg-[#000] bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8"
  >
    <div v-if="modalActive" class="p-4 bg-primary self-start mt-32 max-w-md">
      <font-awesome-icon
        @click="$emit('close-modal')"
        :icon="['fas', 'circle-xmark']"
        class="float-right mx-2 text-secondary text-xl cursor-pointer"
      />
      <slot />
    </div>
  </div>
</template>
