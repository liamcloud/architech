import firebase from "../firebase/clientApp";
import { loadStripe } from "@stripe/stripe-js";

export async function createCheckoutSession(uid: string) {
  const firestore = firebase.firestore();

  const checkoutSessionRef = await firestore
    .collection("users")
    .doc(uid)
    .collection("checkout_sessions")
    .add({
      price: "price_1MnrEIA7labGJjOiyEFr4b78",
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });

  checkoutSessionRef.onSnapshot(async (snap) => {
    const data = snap.data();
    if (data) {
      const { sessionId } = data;
      if (sessionId) {
        const stripe = await loadStripe("pk_test_51MmMPuA7labGJjOi9o3JM2W2gc5HqJZV9whmdSWw3Ap5dfsuKMBOVST9XhDCbKhi973AQnYtM48qv6mvAwKb70xJ00OZCLMUtg");
        stripe?.redirectToCheckout({ sessionId });
      }
    }
  });
}

