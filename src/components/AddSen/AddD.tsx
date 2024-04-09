"use client";
import React, { useEffect, useState } from "react";

const AddD = () => {
  const [addDeath, setAddDeath] = useState(() => {
    //get initial count
    const NmarStoreCount = localStorage.getItem("Sendeath");
    return NmarStoreCount ? parseInt(NmarStoreCount, 10) : 0;
  });
  const percentage = Math.round((addDeath / 150) * 100);
  //upadate the localstorage
  useEffect(() => {
    localStorage.setItem("Sendeath", addDeath.toString());
  }, [addDeath]);

  const IncrementD = () => {
    setAddDeath((prevCount) => prevCount + 1);
  };
  return (
    <div
      className="bg-gray-700 flex items-start h-28 md:w-40 w-60 justify-center px-4 mx-0.5 my-0.5 cursor-pointer"
      onClick={IncrementD}
    >
      <div className="flex-col">
        <div className="text-sm font-medium text-yellow-400 my-2">
          Death Certificates
        </div>
        <div className="class flex items-center">
          <div className="text-3xl font-bold text-gray-200">{addDeath}</div>
          <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-yellow-500 font-medium ">
            <div></div>
            <div>{percentage}%</div>
          </div>
        </div>
        <div className="text-sm font-medium text-gray-400 ">
          Last week 44.9k
        </div>
      </div>
    </div>
  );
};

export default AddD;
