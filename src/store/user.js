import { defineStore } from "pinia"
import { ref, onMounted } from 'vue'
import { getAuth } from "firebase/auth"



export const useUserStore = defineStore("user", () => {
    
  const auth = getAuth()
  const user = ref(null);
 
    onMounted(() => {
      auth.onAuthStateChanged((firebaseUser) => {
        user.value = firebaseUser
      })
    })

  return { user };
  })
  