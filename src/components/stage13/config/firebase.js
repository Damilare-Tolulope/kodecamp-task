import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
import { getAuth } from 'firebase/auth';

// measurementId: 'G-8491XD2Z4H',
const firebaseConfig = {
	apiKey: "AIzaSyDjOjyOcUurd8bbMgv_2XzhB_edQFTniYc",
	authDomain: "kodecamp-task.firebaseapp.com",
	projectId: "kodecamp-task",
	storageBucket: "kodecamp-task.appspot.com",
	messagingSenderId: "1098057900552",
	appId: "1:1098057900552:web:a3862c78407db2e77167bd"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export { auth, provider };
export default getFirestore();