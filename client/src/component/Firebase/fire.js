import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  apiKey: "AIzaSyD3Bv21K97FPrQ9ddaGgxCiIVPFEgwGIBE",
  authDomain: "blockchain-traceit.firebaseapp.com",
  projectId: "blockchain-traceit",
  storageBucket: "blockchain-traceit.appspot.com",
  messagingSenderId: "1054944207689",
  appId: "1:1054944207689:web:4b1482d1030bb8f6e8b098",
  measurementId: "G-F8NVVLG6NW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
