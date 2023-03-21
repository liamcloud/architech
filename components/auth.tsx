import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../firebase/clientApp";
import React from "react";

const myAuth = () => {
  async function signInWithGoogle() {
    const userCredentials = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());

    const { user } = userCredentials;

    firebase.firestore().collection("users").doc(user?.uid).set({
      uid: user?.uid,
      email: user?.email,
      name: user?.displayName,
      provider: user?.providerData[0]?.providerId,
      photoUrl: user?.photoURL,
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
