<script setup>
import { ref } from "vue";

const newMessage = ref(null)
const messages = ref ([
{id: 1, text: 'Hello there'},
{id: 1, text: 'Hello am hakeem'},
{id: 1, text: 'How are you hakeem'},
{id: 1, text: 'Am good, what about you?'}
])
</script>

<template>
  <div class="border border-1 max-w-md m-auto border-secondary h-auto mt-8">
    <div class="bg-secondary justify-center text-center">
      <h2
        class="text-lg first-letter:uppercase tracking-wide p-2 font-semibold"
      >
        welcome friend
      </h2>
    </div>
    <div class="flex justify-between mx-2 my-4">
      <h2 class="text-primary font-semibold text-xl">Chats</h2>
      <font-awesome-icon :icon="['fas', 'bars']" class="text-primary text-xl"/>
    </div>
    <main 
    v-for="message in messages"
    class="my-6 text-left mx-2">
    <div class="bg-secondary w-auto h-auto p-2 rounded-tl-xl rounded-tr-lg rounded-br-lg">
        <p>{{ message.text }}</p>
    </div>
      
    </main>

    <form class="mx-2">
      <label for="message" class="text-primary first-letter:uppercase"
        >write your message</label
      >
      <div class="flex gap-4 mb-4">
        <textarea
           v-model="newMessage"
          name="message"
          id=""
          cols="30"
          rows="10"
          class="bg-[#000] outline-none focus:ring-0 border border-1 border-primary rounded-md w-full h-12 text-primary p-2"
        ></textarea>
        <button class="bg-secondary p-2 w-14 rounded-md uppercase">send</button>
      </div>
    </form>

    <footer class="p-4 flex gap-4 justify-between bg-[#1b1b1b]">
    <font-awesome-icon :icon="['fas', 'phone']" class="text-primary text-4xl"/>
    <font-awesome-icon :icon="['fas', 'shield']" class="text-primary text-4xl"/>
    <font-awesome-icon :icon="['fas', 'circle-plus']" class="text-secondary text-4xl"/>
    <font-awesome-icon :icon="['fab', 'rocketchat']" class="text-primary text-4xl"/>
    <font-awesome-icon :icon="['fas', 'gear']" class="text-primary text-4xl"/>
  </footer>
  </div>
</template>
