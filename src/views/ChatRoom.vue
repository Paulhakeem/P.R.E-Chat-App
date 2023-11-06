<script setup>
import { ref } from "vue";
import NewMessage from "../components/NewMessage.vue";
import { useChatStore } from "../store/chat.js";
// import {useUserStore} from "../store/user.js"


const chats = useChatStore();
// const user = useUserStore()

const modalActive = ref(null);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>

<template>
  <div class="border border-1 max-w-md m-auto border-secondary h-auto mt-8">
    <div class="bg-secondary justify-center text-center">
      <h2
        class="text-lg first-letter:uppercase tracking-wide p-2 font-semibold"
      >
        welcome {{ chats.userName }}
      </h2>
    </div>
    <div class="flex justify-between mx-2 my-4">
      <h2 class="text-primary font-semibold text-xl">Chats</h2>
      <font-awesome-icon
        :icon="['fas', 'bars']"
        class="text-primary text-xl cursor-pointer"
      />
    </div>
    <div v-auto-animate>
      <main
        v-for="message in chats.messages"
        :key="message.id"
        class="my-6 text-left mx-2"
      >
        <div
          class="bg-secondary w-auto h-auto p-2 rounded-tl-xl rounded-tr-lg rounded-br-lg"
        >
        <div class="flex gap-4">
          <img src="../assets/avatar.jpg" alt="" class="w-12 h-12 rounded-full">
          <div>
            <h1 class="font-semibold first-letter:uppercase">
            {{ message.userName }}
          </h1>
          <p class="first-letter:uppercase">{{ message.text }}</p>
          </div>
         
        </div>
        
          <div class="flex justify-between mx-6 pt-4">
            <div class="flex gap-2 cursor-pointer">
              <font-awesome-icon
                @click="chats.like"
                :icon="['fas', 'thumbs-up']"
                class="pt-1"
              />
              <p class="first-letter:uppercase tezt-sm font-light">
                {{ chats.likes }} likes
              </p>
            </div>
            <div class="flex gap-2 cursor-pointer">
              <font-awesome-icon :icon="['fas', 'comment']" class="pt-1" />
              <p class="first-letter:uppercase text-sm font-light">reply</p>
            </div>
          </div>
        </div>
      </main>
    </div>

    <NewMessage :modalActive="modalActive" @close-modal="toggleModal">
      <h1
        class="font-semibold text-center first-letter:uppercase text-xl text-[#000] tracking-wide"
      >
        start new chat
      </h1>
      <form @submit.prevent="chats.addMessage" class="mx-2 my-10">
        <label for="message" class="first-letter:uppercase"
          >write your message</label
        >
        <div class="flex gap-4 mb-4">
          <textarea
            v-model="chats.newMessage"
            name="message"
            id=""
            cols="30"
            rows="10"
            class="bg-primary outline-none focus:ring-0 border border-1 border-secondary rounded-md w-full h-12 text-[#000] p-2"
          ></textarea>
          <button class="bg-secondary p-2 w-14 rounded-md uppercase">
            send
          </button>
        </div>
      </form>
    </NewMessage>

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
          <span class="text-secondary">{{ chats.messages.length }}</span> Chats
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
