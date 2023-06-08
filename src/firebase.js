// // Import the functions you need from the SDKs you need
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getStorage } from "firebase/storage";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAi1vLBjHhpeseCZp6YTX0zuLoovEbw8PI",
//   authDomain: "upload-react-aa753.firebaseapp.com",
//   projectId: "upload-react-aa753",
//   storageBucket: "upload-react-aa753.appspot.com",
//   messagingSenderId: "814937995882",
//   appId: "1:814937995882:web:ea9565c1a39f492182e813",
//   measurementId: "G-SFJ41SB7GP",
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const storage = getStorage(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBf5J5C793sT2erRpyA4TGep7nCoyuoMCY",
  authDomain: "post-image-f3eb5.firebaseapp.com",
  projectId: "post-image-f3eb5",
  storageBucket: "post-image-f3eb5.appspot.com",
  messagingSenderId: "548404520866",
  appId: "1:548404520866:web:01122c0ba6bcab204a74fb",
  measurementId: "G-P29D6QF76N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);
