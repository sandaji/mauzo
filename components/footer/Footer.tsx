import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

type Props = {};

const brands = [
  ["Adidas", "Cantu", "Epson", "Itel", "Maybelline", "Ramtons", "Sony", "USN"],
  [
    "AILYONS",
    "Coke",
    "Garnier",
    "Jameson",
    "Mika",
    "Roch",
    "TCL",
    "Vision Plus",
  ],
  [
    "Apple",
    "DELL",
    "Hisense",
    "L'Oréal Paris",
    "NIVEA",
    "Samsung",
    "Tecno",
    "Vitron",
  ],
  ["Asus", "Dove", "HP", "Lenovo", "Nunix", "Sandisk", "Transcend", "VON"],
  [
    "Bruhm",
    "Dr. Rashel",
    "Infinix",
    "Logitech",
    "Oppo",
    "Skyworth",
    "Tusker",
    "XIAOMI",
  ],
  ["Canon"],
];

const Footer = (props: Props) => {
  return (
    // components/Footer.tsx <footer className="bg-base-300 mt-4 shadow ">

    <footer className="bg-base-300 mt-4 shadow py-8">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        <div>
          <h3 className="font-bold mb-2">NEED HELP?</h3>
          <ul className="space-y-1">
            <li>
              <Link href="#">Chat with us</Link>
            </li>
            <li>
              <Link href="#">Help Center</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">USEFUL LINKS</h3>
          <ul className="space-y-1 text-[#c2c2c2] font-medium">
            <li>
              <Link href="#">Track Your Order</Link>
            </li>
            <li>
              <Link href="#">Shipping and delivery</Link>
            </li>
            <li>
              <Link href="#">Pick-up Stations</Link>
            </li>
            <li>
              <Link href="#">Return Policy</Link>
            </li>
            <li>
              <Link href="#">How to Order?</Link>
            </li>
            <li>
              <Link href="#">Dispute Resolution Policy</Link>
            </li>
            <li>
              <Link href="#">Corporate and Bulk Purchase</Link>
            </li>
            <li>
              <Link href="#">Advertise with Kopia</Link>
            </li>
            <li>
              <Link href="#">Report a Product</Link>
            </li>
            <li>
              <Link href="#">Kopia Payment Information Guidelines</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">ABOUT Kopia</h3>
          <ul className="space-y-1 font-normal text-white">
            <li>
              <Link href="#">About us</Link>
            </li>
            <li>
              <Link href="#">Returns and Refunds Policy</Link>
            </li>
            <li>
              <Link href="#">Kopia Careers</Link>
            </li>
            <li>
              <Link href="#">Kopia Express</Link>
            </li>
            <li>
              <Link href="#">Terms and Conditions</Link>
            </li>
            <li>
              <Link href="#">Store Credit Terms and Conditions</Link>
            </li>
            <li>
              <Link href="#">Privacy Notice</Link>
            </li>
            <li>
              <Link href="#">Cookies Notice</Link>
            </li>
            <li>
              <Link href="#">Flash Sales</Link>
            </li>
            <li>
              <Link href="#">Kopia Global</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">MAKE MONEY WITH Kopia</h3>
          <ul className="space-y-1 font-normal text-white">
            <li>
              <Link href="#">Sell on Kopia</Link>
            </li>
            <li>
              <Link href="#">Vendor Hub</Link>
            </li>
            <li>
              <Link href="#">Become a Sales Consultant</Link>
            </li>
            <li>
              <Link href="#">Become a Logistics Service Partner</Link>
            </li>
            <li>
              <Link href="#">Kopia City Partner Program</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Kopia INTERNATIONAL</h3>
          <ul className="space-y-1 font-normal text-white">
            <li>
              <Link href="#">Algeria</Link>
            </li>
            <li>
              <Link href="#">Nigeria</Link>
            </li>
            <li>
              <Link href="#">Ivory Coast</Link>
            </li>
            <li>
              <Link href="#">Senegal</Link>
            </li>
            <li>
              <Link href="#">Egypt</Link>
            </li>
            <li>
              <Link href="#">Tunisia</Link>
            </li>
            <li>
              <Link href="#">Ghana</Link>
            </li>
            <li>
              <Link href="#">Uganda</Link>
            </li>
            <li>
              <Link href="#">Morocco</Link>
            </li>
            <li>
              <Link href="#">Zando</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <h3 className="font-bold mb-2">JOIN US ON</h3>
        <div className="flex space-x-4 mb-4">
          <FaFacebook className="text-2xl" />
          <FaInstagram className="text-2xl" />
          <FaYoutube className="text-2xl" />
        </div>
        <h3 className="font-bold my-auto mb-2">POPULAR BRANDS</h3>
        <div className="container text-white font-normal mx-auto grid grid-cols-1 md:grid-cols-6 gap-4">
          {brands.map((col, colIndex) => (
            <div key={colIndex}>
              <ul className="space-y-1">
                {col.map((brand, index) => (
                  <li key={index}>{brand}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
