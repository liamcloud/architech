import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import { GiWideArrowDunk } from 'react-icons/gi';
import CountUp from "react-countup";
import Modal from "../components/modal"
import { useState } from "react";
import Auth from "../components/auth";
import firebase from "../firebase/clientApp"
import { createCheckoutSession } from "../stripe/createCheckoutSession";
import { useAuthState } from "react-firebase-hooks/auth"
import { useCollection } from "react-firebase-hooks/firestore"
import usePremiumStatus from "../stripe/usePremiumStatus";


const Home: NextPage = () => {

  const [user, userLoading] = useAuthState((firebase as any).auth())
  const userIsPremium = usePremiumStatus(user as any)

  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Architech</title>
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
        <p
          className="border border-gray-700 rounded-lg py-2 px-4 text-gray-400 text-sm mb-5 transition duration-300 ease-in-out hover:text-gray-300"
        >
          Already{" "}<span className="span"><CountUp start={20000} end={24902} duration={2} separator=","/></span> rooms generated, and counting!
        </p>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-white-300 sm:text-7xl">
          Generate your dream room{" "}
          <GiWideArrowDunk className="mx-auto mt-10 mb-7 text-gray-300"/>
          <span className="relative whitespace-nowrap">
            <SquigglyLines />
            <span className="relative">using AI</span>
          </span>
        </h1>
        <h2 className="mx-auto mt-12 max-w-xxl text-lg sm:text-gray-400  text-gray-500 leading-7">
          Take a picture of your room and see how your room woukd look like in different
          themes.
        </h2>
        <Link
          className="bg-blue-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 transition myClass"
          href="/dream"
        >
          Generate your dream room
        </Link>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col">
              <div>
                <h3 className="mb-1 font-medium text-lg">Original Room</h3>
                <Image
                  alt="Original photo of a room with roomGPT.io"
                  src="/livingroom.jpeg"
                  className="w-full object-cover h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h3 className="mb-1 font-medium text-lg">Generated Room</h3>
                <Image
                  alt="Generated photo of a room with roomGPT.io"
                  width={400}
                  height={400}
                  src="/livingroombis.png"
                  className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <div>
        {!user && userLoading && <h1>Loading...</h1>}
        {!user && !userLoading && <Auth />}
        {user && !userLoading && (
        <div>
          <h2>Welcome to Architech pro, {user.displayName}</h2>
          {!userIsPremium ? (
            <button onClick={() => createCheckoutSession(user.uid)}>Upgrade</button>
          ): (
            <h2>helferlo</h2>
          )}
        </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
