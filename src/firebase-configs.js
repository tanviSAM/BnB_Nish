// import { getAuth } from "firebase/auth";
// import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBarivK1qyC3xdPzGH2UCnVYoBQ5eklqAs",
  authDomain: "nishhair-dev.firebaseapp.com",
  projectId: "nishhair-dev",
  storageBucket: "nishhair-dev.appspot.com",
  messagingSenderId: "145141259837",
  appId: "1:145141259837:web:2c7ce8dcdfa176d10d9454",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
