import firebase from "firebase/app";
import "firebase/firestore"

const config = {
	apiKey: "AIzaSyA6oJvGdUUKiacQgyqCuDHqXfiYTAFBKYk",
	authDomain: "picklehack-a4031.firebaseapp.com",
	databaseURL: "https://picklehack-a4031.firebaseio.com",
	projectId: "picklehack-a4031",
	storageBucket: "picklehack-a4031.appspot.com",
	messagingSenderId: "982436136572",
	appId: "1:982436136572:web:d8b14e3409439eec9e2bf9",
	measurementId: "G-8037CX1LDS",
};

firebase.initializeApp(config);


export const firestore = firebase.firestore()
export default firebase