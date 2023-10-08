import Link from "next/link";
import React from "react";
import Number from "./Number";
import sense from "../../Assets/sense.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="container flex flex-col md:flex-row justify-between items-center py-16 md:py-24">
      <div className="text w-full md:w-1/2 md:ml-10 text-white">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Inventory Forecasting for Stock Management
        </h2>
        <p className="text-lg md:text-xl mb-8">
          An advanced inventory system to efficiently control and manage
          products in your warehouse, all in real-time and seamlessly integrated
          to help grow your business the ability to predict demand accurately is
          crucial for effective stock management.
        </p>
        <div className="mt-8 flex items-cente gap-x-6">
          <Link
            href="/dashboard"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Free Trial 1 Months
          </Link>
          <Link
            href="/about"
            className="text-sm font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="flex mt-8">
          <Number num="1K" text="Brand Owners" />
          <Number num="2K" text="Active Users" />
          <Number num="50+" text="Partners" />
        </div>
      </div>
      <div className="image w-full md:w-2/5">
        <Image
          src={sense}
          alt="Inventory"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
