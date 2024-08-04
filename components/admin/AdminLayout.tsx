// components/AdminLayout.tsx
import { auth } from "@/lib/auth";
import Link from "next/link";
import { MdBorderColor } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import { PiIntersectFill } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import React from "react";

interface AdminLayoutProps {
  activeItem: string;
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = async ({
  activeItem = "dashboard",
  children,
}) => {
  const session = await auth();

  if (!session || !session.user.isAdmin) {
    return (
      <div className="relative flex flex-grow p-4">
        <div>
          <h1 className="text-2xl bg-red-300">Unauthorized</h1>
          <p>Admin permission required</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-grow">
      <div className="w-full grid md:grid-cols-5">
        <div className="bg-base-200">
          <ul className="menu">
            <li>
              <Link
                href="/admin/dashboard"
                className={`dashboard grid ${
                  activeItem === "dashboard" ? "active font-bold" : ""
                }`}
              >
                <div className="gap-2 text-[#e3e5e9] text-lg leading-5 flex items-center w-[120px]">
                  <PiIntersectFill className="text-violet-400" />
                  <span>Dashboard</span>
                </div>
              </Link>
            </li>
          </ul>

          <div className="ms-5">
            <h3 className="relative">Ecommerce functions</h3>
          </div>
          <ul className="menu flex flex-col grow h-[90vh]">
            <div>
              <li className="space-x-2 rounded my-1">
                <Link
                  href="/admin/orders"
                  className={`grid  orders ${
                    activeItem === "orders" ? "active font-bold" : ""
                  }`}
                >
                  <div className="text-[#e3e5e9] text-lg leading-5 flex items-center w-[120px] px-2 gap-3 ">
                    <MdBorderColor className="text-violet-400" />
                    <span
                      className={` orders ${
                        activeItem === "orders" ? "active text-yellow-400" : ""
                      }`}
                    >
                      Orders
                    </span>
                  </div>
                </Link>
              </li>

              <li className=" my-1">
                <Link
                  href="/admin/products"
                  className={`grid products ${
                    activeItem === "products" ? "active font-bold " : ""
                  }`}
                >
                  <div className="text-[#e3e5e9] text-lg leading-5 flex items-center w-[120px] gap-3">
                    <AiOutlineProduct className="text-violet-400" />
                    <span
                      className={` products ${
                        activeItem === "products"
                          ? "active font-bold text-yellow-400"
                          : ""
                      }`}
                    >
                      Products
                    </span>
                  </div>
                </Link>
              </li>

              <li className="space-x-2 rounded my-1">
                <Link
                  href="/admin/users"
                  className={`grid users ${
                    activeItem === "users" ? "active font-bold" : ""
                  }`}
                >
                  <div className="text-[#e3e5e9] text-lg leading-5 flex items-center w-[120px] gap-3">
                    <FaRegUser className="text-violet-500" />
                    <span
                      className={` users ${
                        activeItem === "users"
                          ? "active font-bold text-yellow-400"
                          : ""
                      }`}
                    >
                      Users
                    </span>
                  </div>
                </Link>
              </li>

              <li className="space-x-2 rounded my-1">
                <Link
                  href="/admin/users"
                  className={`grid users ${
                    activeItem === "users" ? "active font-bold" : ""
                  }`}
                >
                  <div className="text-[#e3e5e9] text-lg leading-5 flex items-center w-[120px] gap-3">
                    <FaRegUser className="text-violet-500" />
                    <span
                      className={` users ${
                        activeItem === "users"
                          ? "active font-bold text-yellow-400"
                          : ""
                      }`}
                    >
                      Users
                    </span>
                  </div>
                </Link>
              </li>

              <li className="space-x-2 rounded my-1">
                <Link
                  href="/admin/users"
                  className={`grid users ${
                    activeItem === "users" ? "active font-bold" : ""
                  }`}
                >
                  <div className="text-[#e3e5e9] text-lg leading-5 flex items-center w-[120px] gap-3">
                    <FaRegUser className="text-violet-500" />
                    <span
                      className={` users ${
                        activeItem === "users"
                          ? "active font-bold text-yellow-400"
                          : ""
                      }`}
                    >
                      Users
                    </span>
                  </div>
                </Link>
              </li>

              <li className="space-x-2 rounded my-1">
                <Link
                  href="/admin/users"
                  className={`grid users ${
                    activeItem === "users" ? "active font-bold" : ""
                  }`}
                >
                  <div className="text-[#e3e5e9] text-lg leading-5 flex items-center w-[120px] gap-3">
                    <FaRegUser className="text-violet-500" />
                    <span
                      className={` users ${
                        activeItem === "users"
                          ? "active font-bold text-yellow-400"
                          : ""
                      }`}
                    >
                      Users
                    </span>
                  </div>
                </Link>
              </li>
            </div>
          </ul>
        </div>
        <div className="md:col-span-4 px-4">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
