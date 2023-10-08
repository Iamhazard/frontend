import React from "react";
import Image from "next/image";
//import Stock from "../../Assets/index";
import Stocks from "../../Assets/Stocks.svg";
import Link from "next/link";
import Hero from "./Hero";
const Nabar = () => {
  return (
    <div>
      <nab className="container py-4">
        <div className="flex justify-between h-20 px-10 shadow items-center">
          <div className="flex items-center space-x-2">
            <span className="text-xl lg:text-2xl font-bold cursor-pointer">
              <Image src={Stocks} alt="logo" width={40} height={40} />
            </span>
            <b className="mt-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
              tocksense
            </b>
          </div>
          <div className="flex space-x-4 items-center">
            <Link href="/register" className="text-gray-800 text-sm">
              Login
            </Link>
            <Link
              href="/login"
              className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">
              Register
            </Link>
            <Link
              href="/login"
              className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm">
              Dashboard
            </Link>
          </div>
        </div>
      </nab>
      <Hero />
    </div>
  );
};

export default Nabar;
