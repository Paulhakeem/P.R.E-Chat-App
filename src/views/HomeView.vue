<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useChatStore } from "../store/chat.js"

const chats = useChatStore()


</script>

<template>
  <main
    class="m-auto justify-center h-auto text-center mt-20 max-w-md border-4 border-primary rounded-md select-none"
  >
    <h1 class="text-secondary font-medium text-2xl mt-8">P.R.E Chat App</h1>
    <form class="text-center my-8">
     
      <h2 class="text-primary text-xl">Enter your user name</h2>
      <div class="mx-4 my-2">
        <input
          v-model="chats.userName"
          type="text"
          class="outline-none focus:ring-0 w-full bg-[#000] border border-1 border-primary rounded-md text-primary p-2"
        />
      </div>
      <div class="mx-4 my-4">
        <RouterLink to='/chats'>
          <button
          class="uppercase text-xl bg-secondary text-primary w-full p-2 font-semibold"
        >
          save
        </button>
        </RouterLink>
        
      </div>
    </form>
  </main>
</template>
