"use client";
import React, { useEffect, useState } from "react";

const AddM = () => {
  const [addMarriage, setAddMarriage] = useState(() => {
    //get initial count
    const NmarStoreCount = localStorage.getItem("Nmarriage");
    return NmarStoreCount ? parseInt(NmarStoreCount, 10) : 0;
  });
  const percentage = Math.round((addMarriage / 150) * 100);
  //upadate the localstorage
  useEffect(() => {
    localStorage.setItem("Nmarriage", addMarriage.toString());
  }, [addMarriage]);

  const IncrementMar = () => {
    setAddMarriage((prevCount) => prevCount + 1);
  };
  return (
    <div
      className="bg-gray-700 flex items-start h-28 md:w-40 w-60 justify-center px-4 mx-0.5 my-0.5 cursor-pointer"
      onClick={IncrementMar}
    >
      <div className="flex-col">
        <div className="text-sm font-medium text-pink-400 my-2">
          Marriage Contract
        </div>
        <div className="class flex items-center">
          <div className="text-3xl font-bold text-gray-200">{addMarriage}</div>
          <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-pink-500 font-medium ">
            <div></div>
            <div>{percentage}%</div>
          </div>
        </div>
        <div className="text-sm font-medium text-gray-400 ">
          Last week 20.2k
        </div>
      </div>
    </div>
  );
};

export default AddM;
