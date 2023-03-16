import { useState } from "react";
import SquigglyLines from "../components/SquigglyLines";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineCheckCircle } from "react-icons/ai";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const Modal = ({ open, onClose }: ModalProps) => {
  if (!open) {
    return null;
  }
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
            <div className="h2">
              <Link
                href="https://buy.stripe.com/00g9Czcci34tdBS288"
                target="_blank"
              >
                <h2 className="sub">Subscribe</h2>
              </Link>
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
                Newest AI models w/ CLIP-guidance for less artefacts
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

            <div className="h2">
              <Link
                href="https://buy.stripe.com/bIY8yv6RY34tfK0fYZ"
                target="_blank"
              >
                <h2 className="sub">Subscribe</h2>
              </Link>
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
                Newest AI models w/ CLIP-guidance for less artefacts
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
