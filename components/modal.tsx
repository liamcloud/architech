import { useState } from "react";
import SquigglyLines from "../components/SquigglyLines";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { createCheckoutSession } from "../stripe/createCheckoutSession";
import { createCheckout } from "../stripe/createCheckout29";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "../firebase/clientApp";
import usePremiumStatus from "../stripe/usePremiumStatus";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const Modal = ({ open, onClose }: ModalProps) => {
  if (!open) {
    return null;
  }
  const [user, userLoading] = useAuthState((firebase as any).auth());
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const handleButtonClick = () => {
    if (user) {
      setLoading(true);
      createCheckoutSession(user.uid, setLoading);
    } else {
      router.push("/dream");
      onClose();
    }
  };

  return (
    <div className="modal" onClick={onClose}>
      <div
        className="element"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2
          onClick={onClose}
          className="sm:text-3xl text-xl font-bold ml-2 tracking-tight text-right mr-5 cursor-pointer"
        >
          X
        </h2>
        <div className="flex pay">
          <div>
            <Image
              alt="Original photo of a room with roomGPT.io"
              src="/logo.png"
              className="logo"
              width={100}
              height={100}
            />
            <h1 className="sm:text-3xl text-xl font-bold ml-2 tracking-tight">
              Architech <span className="color">pro</span>
            </h1>
            <div className="flex al">
              <h2 className="price">
                <span className="text-white">€29</span>
              </h2>
              <p className="gray">
                per<br></br>month
              </p>
            </div>
            <div
              className="h2"
              onClick={() => {
                if (user) {
                  setLoading1(true);
                  createCheckout(user.uid, setLoading1);
                } else {
                  router.push("/dream");
                  onClose();
                }
              }}
            >
              {loading1 ? (
                <div className="spinner"></div>
              ) : (
                <h2 className="sub">Subscribe</h2>
              )}
            </div>
            <ul className="list">
              <li className="test flex">
                <AiOutlineCheckCircle className="gello" />
                Unlimited renders
              </li>
              <li className="test flex">
                <AiOutlineCheckCircle className="gello" />
                Faster & higher quality renders
              </li>
              <li className="test flex">
                <AiOutlineCheckCircle className="gello" />
                Keep originals & renders private
              </li>
              <li className="test flex">
                <AiOutlineCheckCircle className="gello" />
                30+ more styles and room types
              </li>
              <li className="test flex">
                <AiOutlineCheckCircle className="gello" />
                Newest AI models
              </li>
              <li className="test flex">
                <AiOutlineCheckCircle className="gello" />
                Premium support & request features
              </li>
              <li className="test flex">
                <AiOutlineCheckCircle className="gello" />
                Commercial usage license for 1 person
              </li>
            </ul>
          </div>
          <div>
            <Image
              alt="Original photo of a room with roomGPT.io"
              src="/logo.png"
              className="logo"
              width={100}
              height={100}
            />
            <h1 className="sm:text-3xl text-xl font-bold ml-2 tracking-tight">
              Architech <span className="color">pro </span>for teams
            </h1>
            <div className="flex al">
              <h2 className="price">
                <span className="text-white">€295</span>
              </h2>
              <p className="gray">
                per<br></br>month
              </p>
            </div>

            <div
  className="h2"
  onClick={handleButtonClick}
  onTouchEnd={(e) => {
    e.preventDefault(); // To prevent triggering both touch and click events.
    handleButtonClick();
  }}
>
  {loading ? (
    <div className="spinner"></div>
  ) : (
    <h2 className="sub">Subscribe</h2>
  )}
</div>
            <ul className="list">
              <li className="test flex">
                <AiOutlineCheckCircle className="gello" />
                Unlimited renders
              </li>
              <li className="test flex">
                <AiOutlineCheckCircle className="gello" />
                Faster & higher quality renders
              </li>
              <li className="test flex">
                <AiOutlineCheckCircle className="gello" />
                Keep originals & renders private
              </li>
              <li className="test flex">
                <AiOutlineCheckCircle className="gello" />
                30+ more styles and room types
              </li>
              <li className="test flex">
                <AiOutlineCheckCircle className="gello" />
                Newest AI models
              </li>
              <li className="test flex">
                <AiOutlineCheckCircle className="gello" />
                Premium support & request features
              </li>
              <li className="test flex">
                <AiOutlineCheckCircle className="gello" />
                Commercial usage license for 1 person
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
