import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD_pODSaeOlF5jIi0RaPISI7eZk8aDbJ0o",
  authDomain: "twitter-login-28bc8.firebaseapp.com",
  projectId: "twitter-login-28bc8",
  storageBucket: "twitter-login-28bc8.appspot.com",
  messagingSenderId: "562537462422",
  appId: "1:562537462422:web:72269f4559f99b8dd820b7"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);

