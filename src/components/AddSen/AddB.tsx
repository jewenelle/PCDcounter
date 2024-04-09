/* eslint-disable react/jsx-no-undef */
"use client";

import { useEffect, useState } from "react";
import { addIcons } from "ionicons";
const AddB = () => {
  const [addBirth, setAddBirth] = useState(() => {
    //get initial coount
    const storedCount = localStorage.getItem("senBirth");
    return storedCount ? parseInt(storedCount, 10) : 0;
  });
  const percentage = Math.round((addBirth / 150) * 100);

  //update the localstorage
  useEffect(() => {
    //update localStorage whenever the count changes
    localStorage.setItem("senBirth", addBirth.toString());
  }, [addBirth]);

  const Increment = () => {
    setAddBirth((prevCount) => prevCount + 1);
  };
  return (
    <div
      className="bg-gray-700 flex items-start h-28 md:w-40 w-60 justify-center px-4 mx-0.5 my-0.5 cursor-pointer"
      onClick={Increment}
    >
      <div className="flex-col">
        <div className="text-sm font-medium text-gray-50 my-2">
          Birth Certificates
        </div>
        <div className="class flex items-center">
          <div className="text-3xl font-bold text-gray-200">{addBirth}</div>
          <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-gray-50 font-medium ">
            <div></div>
            <div>{percentage.toString()}%</div>
          </div>
        </div>
        <div className="text-sm font-medium text-gray-400 ">
          Last week 18.7k
        </div>
      </div>
    </div>
  );
};

export default AddB;
