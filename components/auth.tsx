import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../firebase/clientApp";
import React, { useEffect, useRef } from "react";

const myAuth = () => {
  async function signInWithGoogle() {
    const userCredentials = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());
    firebase.firestore().collection("users").doc(userCredentials.user.uid).set({
      uid: userCredentials.user.uid,
      email: userCredentials.user.email,
      name: userCredentials.user.displayName,
      provider: userCredentials.user.providerData[0].providerId,
      photoUrl: userCredentials.user.photoURL,
    });
  }
  return (
    <div>
      <h1>hello</h1>
      <button onClick={() => signInWithGoogle()}>singin</button>
    </div>
  );
};

export default myAuth;
