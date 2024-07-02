/* eslint-disable react/jsx-no-undef */
"use client";

import { useEffect, useState } from "react";
import { addIcons } from "ionicons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross, faRing } from "@fortawesome/free-solid-svg-icons";
const AddB = () => {
  const [addBirth, setAddBirth] = useState(() => {
    //get initial coount
    const storedCount = localStorage.getItem("natBirth");
    return storedCount ? parseInt(storedCount, 10) : 0;
  });
  let min = 150;
  const percentage = Math.round((addBirth / min) * 100);
  const Percent = () => {
    if (percentage == 100 || percentage > 100) {
      return " Slots are full";
    } else {
      return min - addBirth + " Vacant Slots";
    }
  };

  //update the localstorage
  useEffect(() => {
    //update localStorage whenever the count changes
    localStorage.setItem("natBirth", addBirth.toString());
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
          <FontAwesomeIcon icon={faCross} className="block mr-2" />
          Birth Certificates
        </div>
        <div className="class flex items-center">
          <div className="text-3xl font-bold text-gray-200">{addBirth}</div>
          <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-gray-50 font-medium ">
            <div></div>
            <div>{percentage.toString()}%</div>
          </div>
        </div>
        <div className="text-sm font-medium text-gray-400">
          <p>
            <Percent />
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddB;
