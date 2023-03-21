import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Stripe | null;

const initializeStripe = async () => {
  if (!stripePromise) {
    stripePromise = await loadStripe(
      "pk_test_51MmMPuA7labGJjOi9o3JM2W2gc5HqJZV9whmdSWw3Ap5dfsuKMBOVST9XhDCbKhi973AQnYtM48qv6mvAwKb70xJ00OZCLMUtg"
    );
  }
};

export default initializeStripe
