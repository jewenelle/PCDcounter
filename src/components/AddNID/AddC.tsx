"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceGrinTongueWink,
  faFunnelDollar,
} from "@fortawesome/free-solid-svg-icons";

const AddC = () => {
  const [addCenomar, setAddCenomar] = useState(() => {
    //get initial count
    const NmarStoreCount = localStorage.getItem("Ncenomar");
    return NmarStoreCount ? parseInt(NmarStoreCount, 10) : 0;
  });
  let min = 150;
  const percentage = Math.round((addCenomar / 150) * 100);
  //upadate the localstorage
  useEffect(() => {
    localStorage.setItem("Ncenomar", addCenomar.toString());
  }, [addCenomar]);

  const IncrementC = () => {
    if (percentage == 100) {
      setAddCenomar((prevcount) => (prevcount = 0));
      return setAddCenomar(addCenomar);
    } else {
      setAddCenomar((prevCount) => prevCount + 1);
    }
  };
  return (
    <div
      className="bg-gray-700 flex items-start h-28 md:w-40 w-60 justify-center px-4 mx-0.5 my-0.5 cursor-pointer"
      onClick={IncrementC}
    >
      <div className="flex-col">
        <div className="text-sm font-medium text-green-400 my-2">
          <FontAwesomeIcon icon={faFunnelDollar} className="mr-1" />
          CENOMAR
        </div>
        <div className="class flex items-center">
          <div className="text-3xl font-bold text-gray-200">{addCenomar}</div>
          <div className="flex items-center justify-between mx-2 px-0.5 py-0.5 rounded-xl text-green-500 font-medium ">
            <div></div>
            <div>{percentage}%</div>
          </div>
        </div>
        <div className="text-sm font-medium text-gray-400 text-center ">
          {percentage == 100
            ? "Slot are Full"
            : min - addCenomar + " vacant Slots"}
        </div>
      </div>
    </div>
  );
};

export default AddC;
