import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCVnedEWTlw7cWvnqZQOoNso51OPCxJtn0",
  authDomain: "finder-7deef.firebaseapp.com",
  projectId: "finder-7deef",
  storageBucket: "finder-7deef.appspot.com",
  messagingSenderId: "494776973010",
  appId: "1:494776973010:web:b9f784920da82de9c5df0b"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;
