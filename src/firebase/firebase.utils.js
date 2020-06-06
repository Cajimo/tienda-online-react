import firebase from "firebase/app";
import "firebase/firebase-firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAnLW6CpKSx35iTmZdCW8Pda9_M_B4wRgA",
  authDomain: "crwn-db-feaa4.firebaseapp.com",
  databaseURL: "https://crwn-db-feaa4.firebaseio.com",
  projectId: "crwn-db-feaa4",
  storageBucket: "crwn-db-feaa4.appspot.com",
  messagingSenderId: "343442298780",
  appId: "1:343442298780:web:2a5c6b5dd2b82d79851a59",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.iud}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  console.log(snapShot);
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
