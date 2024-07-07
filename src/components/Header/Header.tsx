"use client";
import React from "react";
import Link from "next/link";
import Reset from "../reset";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Report from "../report";

const Header = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="w-full flex justify-around gap-2">
        <div className="flex justify-between items-center gap-3">
          <Image
            src={"/dex.jpg"}
            width={100}
            height={100}
            alt="Picture of the author"
            className="rounded-[100%] aspect-auto w-[70px] h-[70px]"
          />
          <h1 className="text-white">
            <span className="font-bold">Dexter Padillo</span> - Civil
            Administration Officer
          </h1>
        </div>
        <div className=" flex justify-between items-center gap-3">
          <h1 className="text-white text-right">
            <span className="font-bold">Jewenelle Archide</span> - Civil
            Administration Officer
          </h1>
          <Image
            src={"/me2.jpg"}
            width={100}
            height={100}
            alt="Picture of the author"
            className="rounded-[100%] aspect-auto w-[70px] h-[70px]"
          />
        </div>
      </div>

      <p className="text-[14px] font-semibold text-white tracking-wider">
        PSA/CRS Dipolog City Zamboanga Del Norte
      </p>
      <div>
        <div className="flex justify-center items-center p-5">
          <Link
            href={"/senior"}
            className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden hover:translate-y-[8%] transition duration-100 ease-in-out text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 ${
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
          <Report />
        </div>
      </div>
    </>
  );
};

export default Header;
