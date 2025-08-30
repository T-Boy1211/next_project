'use client'

import axios from "axios";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const Home = () => {
  // try {
  //   const res = axios.get("http://localhost:5773/");
  // } catch (error) {}
  return (
    <>
      <Navbar />
      <div className="bg-cover bg-gradient-to-tr from-20% from-blue-800 via-60% via-cyan-400 to-95% to-purple-900 min-h-screen flex flex-col justify-center items-center">
        <Link href="/signup" className="bg-transparent rounded-3xl py-2 px-3 m-5 font-extralight italic capitalize">signup</Link>
        <h1 className="text-7xl font-extrabold font-mono capitalize text-center">
          welcome to the smart store
        </h1>
        <Link href="/login" className="bg-transparent rounded-3xl py-2 px-3 m-5 font-extralight italic capitalize">login</Link>
      </div>
    </>
  );
};

export default Home;
