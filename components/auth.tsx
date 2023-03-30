import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../firebase/clientApp";
import React from "react";
import { BsGoogle } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsMicrosoft } from 'react-icons/bs'
import CountUp from "react-countup";

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
      freeRenders: 5,
    });
  }

  async function signInWithFacebook() {
    const userCredentials = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.FacebookAuthProvider());
      
      const { user } = userCredentials;

      firebase.firestore().collection("users").doc(user?.uid).set({
        uid: user?.uid,
        email: user?.email,
        name: user?.displayName,
        provider: user?.providerData[0]?.providerId,
        photoUrl: user?.photoURL,
        freeRenders: 5,
      });
    }

    async function signInWithMicrosoft() {
        const MicrosoftProvider = new firebase.auth.OAuthProvider('microsoft.com');
        const userCredentials = await firebase.auth().signInWithPopup(MicrosoftProvider);
    
        const { user } = userCredentials;
    
        firebase.firestore().collection("users").doc(user?.uid).set({
          uid: user?.uid,
          email: user?.email,
          name: user?.displayName,
          provider: user?.providerData[0]?.providerId,
          photoUrl: user?.photoURL,
          freeRenders: 5,
        });
      }
    
  return (
    <div className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mb-0 mb-8 background-gradient">
        <p
          className="border border-gray-700 rounded-lg py-2 px-4 text-gray-400 text-sm mb-5 transition duration-300 ease-in-out hover:text-gray-300"
        >
          Already{" "}<span className="span"><CountUp start={20000} end={24902} duration={2} separator="," /></span> rooms generated, and counting!
        </p>
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-white-100 sm:text-6xl mb-9">
          Sign-in, and let the <span className="pinkText">magic</span> begin
        </h1>
        <div className="flex sGoogle" onClick={() => signInWithGoogle()}>
        <BsGoogle className="googleIcon" />
      <h1 className="signIn">Sign-in with Google</h1>
      </div>
      <div className="flex sGoogle" onClick={() => signInWithFacebook()}>
        <BsFacebook className="googleIcon" />
      <h1 className="signIn">Sign-in with Facebook</h1>
      </div>
      <div className="flex sGoogle" onClick={() => signInWithMicrosoft()}>
        <BsMicrosoft className="googleIcon" />
      <h1 className="signIn">Sign-in with Microsoft</h1>
      </div>
    </div>
  );
};

export default myAuth;
