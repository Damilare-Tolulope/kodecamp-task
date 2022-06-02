import * as firebase from 'firebase/app'

const App = () => firebase.initializeApp({
    apiKey: "AIzaSyDjOjyOcUurd8bbMgv_2XzhB_edQFTniYc",
	authDomain: "kodecamp-task.firebaseapp.com",
	projectId: "kodecamp-task",
	storageBucket: "kodecamp-task.appspot.com",
	messagingSenderId: "1098057900552",
	appId: "1:1098057900552:web:a3862c78407db2e77167bd"
})
export default App;