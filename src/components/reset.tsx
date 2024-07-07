"use client";

import { faMapPin, faRefresh } from "@fortawesome/free-solid-svg-icons";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons/faDeleteLeft";
import { faEraser } from "@fortawesome/free-solid-svg-icons/faEraser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Reset = () => {
  const reset = () => {
    if (confirm("are you sure you want to reset?")) {
      localStorage.removeItem("senBirth");
      localStorage.removeItem("Ncenomar");
      localStorage.removeItem("Sencenomar");
      localStorage.removeItem("Senmarriage");
      localStorage.removeItem("Nmarriage");
      localStorage.removeItem("natBirth");
      localStorage.removeItem("Sendeath");
      localStorage.removeItem("Ndeath");
      localStorage.removeItem("seniorCounterNumber");
      localStorage.removeItem("nationalCounterNumber");
      window.location.reload();
    }
  };
  return (
    <div>
      <button
        className="items-center justify-center p-0.5 mb-2 mt-2 overflow-hidden text-lg transition-colors hover:text-orange-500 w-[150px] bg-blue-950 text-white rounded "
        onClick={reset}
      >
        <FontAwesomeIcon icon={faEraser} /> Reset
      </button>
    </div>
  );
};

export default Reset;
