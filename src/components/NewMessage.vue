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
  <Transition name="fade">

  <div
    v-show="modalActive"
    class="absolute w-full z-50 bg-[#000] bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8"
  >
  <Transition name="slide-fade">
    <div v-if="modalActive" class="p-4 bg-primary self-start mt-32 max-w-md">
      <font-awesome-icon
        @click="$emit('close-modal')"
        :icon="['fas', 'circle-xmark']"
        class="float-right mx-2 text-secondary text-xl cursor-pointer"
      />
      <slot />
    </div>
    </Transition>
  </div>
</Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
