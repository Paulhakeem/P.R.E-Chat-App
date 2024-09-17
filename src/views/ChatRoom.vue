<script setup>
import { ref } from "vue";
import ChatBody from "../components/ChatBody.vue";

</script>

<template>
  <div class="h-auto">
   
    <div>
      <ChatBody/>
    </div>

    <footer class="p-4 flex gap-4 justify-between bg-[#1b1b1b]">
      <div class="text-center">
        <font-awesome-icon
          :icon="['fas', 'phone']"
          class="text-primary text-xl cursor-pointer"
        />
        <p class="text-primary text-sm">Calls</p>
      </div>
      <div class="text-center">
        <font-awesome-icon
          :icon="['fas', 'shield']"
          class="text-primary text-xl cursor-pointer"
        />
        <p class="text-primary text-sm">Achive</p>
      </div>
      <div>
        <font-awesome-icon
          :icon="['fas', 'circle-plus']"
          @click="toggleModal"
          class="text-secondary text-4xl cursor-pointer"
        />
      </div>
      <div class="text-center">
        <font-awesome-icon
          :icon="['fab', 'rocketchat']"
          class="text-primary text-xl cursor-pointer"
        />
        <p class="text-primary text-sm">
          <span class="text-secondary">10</span> Chats
        </p>
      </div>
      <div class="text-center">
        <font-awesome-icon
          :icon="['fas', 'gear']"
          class="text-primary text-xl cursor-pointer"
        />
        <p class="text-primary text-sm">Settings</p>
      </div>
    </footer>
  </div>
</template>
