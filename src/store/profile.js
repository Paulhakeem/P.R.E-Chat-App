import { defineStore } from "pinia"
import { getStorage, ref } from "firebase/storage";


export const useProfileStore = defineStore('profile', () => {
    const storage = getStorage()

    const imagesRef = ref(storage, 'images')
})
