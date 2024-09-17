import { defineStore } from "pinia";
import { ref, onMounted, watchEffect } from "vue";
import { db } from "../firebase/fbConfig"
import { collection, addDoc, onSnapshot } from "firebase/firestore";

export const useChatStore = defineStore("chats", () => {
  const isOnline = ref(false);
  const newMessage = ref(null);
  const messages = ref([]);


  const addMessage = () => {
    addDoc(collection(db, "chats"), {
      text: newMessage.value,
      userName: userName.value,
    });
    newMessage.value = "";
  };

 

  onMounted(() => {
    onSnapshot(collection(db, "chats"), (querySnapshot) => {
      const dbChats = [];
      querySnapshot.forEach((doc) => {
        const chat = {
          id: doc.id,
          text: doc.data().text,
          userName: doc.data().userName,
        };
        dbChats.push(chat);
      });
      messages.value = dbChats;
    })

   
  })


  return { newMessage, userName, likes, reply, messages, addMessage, like, isOnline };
});
