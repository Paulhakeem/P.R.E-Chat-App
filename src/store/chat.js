import { defineStore } from "pinia"
import { ref, onMounted } from "vue"
import {db} from '../firebase/fbConfig'
import { collection, addDoc, onSnapshot } from "firebase/firestore";

export const useChatStore = defineStore('chats', () => {
   const newMessage = ref(null)
   const userName = ref(null)
   const likes = ref(0)
   const reply = ref(null)
   const messages = ref ([])


    const addMessage = () => {
        addDoc(collection(db, "chats"), {
           text: newMessage.value,
           userName: userName.value,
           likes: likes.value,
           reply: reply.value
          })
          newMessage.value = ''
    }

    const like = () => {
        likes.value++

    }

   onMounted(() => {
    onSnapshot(collection(db, "chats"), (querySnapshot) => {
        const dbChats = [];
        querySnapshot.forEach((doc) => {
            const chat = {
                id: doc.id,
                text: doc.data().text,
                userName: doc.data().userName,
                likes: doc.data().likes,
                reply: doc.data().reply
              }
              dbChats.push(chat)
            })
            messages.value = dbChats
        })
   })

    return { newMessage, userName, likes, reply, messages, addMessage, like }

  })