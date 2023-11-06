import { defineStore } from "pinia"
import { ref, onMounted, watchEffect } from "vue"
import { db } from "../firebase/fbConfig"
import { doc, updateDoc, onSnapshot } from "firebase/firestore"


export const useUserStore = defineStore("user", () => {
    const isOnline = ref(false)


    const userRef = doc(db, 'users')

    onMounted(() => {
      onSnapshot(userRef, (snapshot) => {
        isOnline.value = snapshot.exists() && snapshot.data().online
      })
    })
   

      watchEffect(() => {
        updateDoc(db, 'users', { online: isOnline.value })
      })
      
    return {isOnline}
  })
  