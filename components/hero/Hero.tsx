import Image from "next/image";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[80vh] bg">
      <div className="flex justify-between items-center h-full px-10 border-orange-500">
        <div className="flex flex-col justify-center border-fuchsia-700 w-1/2 h-96">
          <h2 className="text-3xl font-bold text-gray-800">
            The best notebook <br /> collection 2024
          </h2>
          <p className="mt-2 text-lg">
            Exclusive offer <span className="text-red-600">-10% off</span> this
            week
          </p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-[8rem] rounded">
            Shop Now
          </button>
        </div>
        <div className="border-solid border-fuchsia-700 mb-24 ml-12 w-1/2">
          <Image
            src="/hero.png"
            alt="Hero"
            width={500}
            height={500}
            layout="responsive"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="absolute bottom-0 w-full bg-white py-4 border-orange-500">
        <div className="flex justify-center space-x-4">
          <div className="text-center flex flex-row">
            <Image
              src="/hero.png"
              alt="Free Delivery"
              width={50}
              height={50}
              layout="fixed"
            />
            <div className="flex flex-col text-left ml-4 ">
              <h4 className="font-bold mt-1">Free Delivery</h4>
              <p>Orders above 5000</p>
            </div>
          </div>
          <div className="text-center">
            <Image
              src="/shop.png"
              alt="Return & Refund"
              width={50}
              height={50}
              layout="fixed"
            />
            <p className="text-sm mt-1">Return & Refund</p>
          </div>
          <div className="text-center">
            <Image
              src="/shop.png"
              alt="Member Discount"
              width={50}
              height={50}
              layout="fixed"
            />
            <p className="text-sm mt-1">Member Discount</p>
          </div>
          <div className="text-center">
            <Image
              src="/shop.png"
              alt="Support 24/7"
              width={50}
              height={50}
              layout="fixed"
            />
            <p className="text-sm mt-1">Support 24/7</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
