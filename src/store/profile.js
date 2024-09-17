import { defineStore } from "pinia";
import { ref } from "vue";
import {
  getStorage,
  ref as storageRef,
  uploadBytesResumable,
} from "firebase/storage";

export const useProfileStore = defineStore("profile", () => {
  const profilePicture = ref(null);

  const handleProfileUpload = (event) => {
    profilePicture.value = event.target.files[0];
  };

  const uploadImage = async () => {
    const storage = getStorage();
    const storageReference = storageRef(
      storage,
      "images/" + profilePicture.value.name
    );
    await uploadBytesResumable(storageReference, profilePicture.value);

    try {
      profilePicture.value.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done")
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          alert(error.message);
        },
        () => {
          getDownloadURL(profilePicture.value.snapshot.ref).then(
            (downloadURL) => {
              console.log("File available at", downloadURL);
            }
          );
        }
      );
    } catch (error) {
      console.error("An error occurred:", error);
    }

    // Get the download URL
    // const downloadURL = await storageReference.getDownloadURL(profilePicture);
    // profilePicture.value = downloadURL
  };

  return { profilePicture, handleProfileUpload, uploadImage };
});
