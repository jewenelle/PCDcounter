"use client";
import React from "react";
import Link from "next/link";
import Reset from "../reset";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <>
      <h1 className="text-white">
        <span className="font-bold">Dexter Padillo</span> - Civil Administration
        Officer
      </h1>
      <p className="text-[14px] font-semibold text-white tracking-wider">
        PSA/CRS Dipolog City Zamboanga Del Norte
      </p>
      <div>
        <div className="flex justify-center items-center p-5">
          <Link
            href={"/senior"}
            className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 ${
              pathname === "/senior" ? "" : "opacity-20"
            }`}
          >
            <span
              className={`relative px-5 py-2.5 transition-all ease-in duration-75 bg-white ${
                pathname === "/senior" ? "dark:bg-blue-500" : "dark:bg-gray-900"
              }  rounded-md group-hover:bg-opacity-0`}
            >
              SC/PWD/SICK
            </span>
          </Link>
          <Link
            href={"/"}
            className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 ${
              pathname === "/" ? "" : "opacity-20 hover:none"
            }`}
          >
            <span
              className={`relative px-5 py-2.5 transition-all ease-in duration-75 bg-white ${
                pathname === "/" ? "dark:bg-blue-500" : "dark:bg-gray-900"
              }  rounded-md group-hover:bg-opacity-0`}
            >
              National ID
            </span>
          </Link>
          <Reset />
        </div>
      </div>
    </>
  );
};

export default Header;
