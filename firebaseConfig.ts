// Importando Firebase (sintaxe modular)
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRjCyrYezn61H9-SnKKJOR4u8-WFAtDS0",
  authDomain: "brunavellasco-cbe03.firebaseapp.com",
  projectId: "brunavellasco-cbe03",
  storageBucket: "brunavellasco-cbe03.firebasestorage.app",
  messagingSenderId: "81284844292",
  appId: "1:81284844292:web:06925eb4ec3c535c46de51",
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);

// Exportando serviços
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
