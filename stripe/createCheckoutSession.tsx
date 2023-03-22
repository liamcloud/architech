import firebase from "../firebase/clientApp";
import { loadStripe } from "@stripe/stripe-js";

export async function createCheckoutSession(uid: string) {
  const firestore = firebase.firestore();

  const checkoutSessionRef = await firestore
    .collection("users")
    .doc(uid)
    .collection("checkout_sessions")
    .add({
      price: "price_1MmQK9A7labGJjOif0QNKbnq",
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });

  checkoutSessionRef.onSnapshot(async (snap) => {
    const data = snap.data();
    if (data) {
      const { sessionId } = data;
      if (sessionId) {
        const stripe = await loadStripe("pk_live_51MmMPuA7labGJjOiQLSkb6acN1QLFOXdaGBPKXvMZFcQYFPmRJSYlymwDeFxXKfuJKhEdxk5WQhhaeow8OyTKFfd005OKv1YjY");
        stripe?.redirectToCheckout({ sessionId });
      }
    }
  });
}

