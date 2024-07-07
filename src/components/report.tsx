"use client";
import { useState } from "react";
import Reset from "./reset";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faClone } from "@fortawesome/free-solid-svg-icons/faClone";
import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";
const Report = () => {
  const senB = localStorage.getItem("senBirth");
  const Nce = localStorage.getItem("Ncenomar");
  const SCen = localStorage.getItem("Sencenomar");
  const senM = localStorage.getItem("Senmarriage");
  const Nmar = localStorage.getItem("Nmarriage");
  const Nb = localStorage.getItem("natBirth");
  const senD = localStorage.getItem("Sendeath");
  const Nd = localStorage.getItem("Ndeath");
  const senior = localStorage.getItem("seniorCounterNumber");
  const national = localStorage.getItem("nationalCounterNumber");
  const [openReport, setOpenReport] = useState(false);
  const Generate = () => {
    setOpenReport(true);
  };

  return (
    <div className="">
      <button onClick={Generate} className="text-white text-[14px] generate ">
        generate Report
      </button>
      {openReport && (
        <>
          <div className=" z-10 bg-white absolute flex justify-center min-w-[800px] h-[350px] p-2 gap-2 translate-y-[-1rem] translate-x-[-24.5rem]">
            <div className=" min-w-full flex ">
              <div className="flex-1 border-r-2 p-2">
                <div className="sen w-full flex flex-col">
                  <h2 className="text-center font-medium">
                    Priority
                    <span className="text-[12px] block">
                      senior citizen / buros / pwd / hospital req.
                    </span>
                    <span className="text-center block font-bold">
                      {" " + senior + " Clients"}
                    </span>
                  </h2>
                  <hr className="bg-black to-black" />
                  <div>
                    <table>
                      <tr>
                        <td className="text-sm">Birth certificate:</td>
                        <td className="text-center">{senB}</td>
                      </tr>
                      <tr>
                        <td className="text-sm">death certificate:</td>
                        <td className="text-center">{senD}</td>
                      </tr>
                      <tr>
                        <td className="text-sm">marriage contract:</td>
                        <td className="text-center">{senM}</td>
                      </tr>
                      <tr>
                        <td className="text-sm">Cenomar:</td>
                        <td className="text-center">{SCen}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>

              <div className="flex-1  p-2">
                <div className=" w-full flex flex-col">
                  <h2 className="text-center font-medium">
                    national Id
                    <span className="text-[12px] block">
                      Without online Appointment / with national ID
                    </span>
                    <span className="text-center block font-bold">
                      {" " + national + " Clients"}
                    </span>
                  </h2>
                  <hr className="bg-black to-black" />
                  <div className="text-right  h-full">
                    <table>
                      <tr>
                        <td className="text-sm">Birth certificate:</td>
                        <td>{Nb}</td>
                      </tr>
                      <tr>
                        <td className="text-sm">death certificate:</td>
                        <td>{Nd}</td>
                      </tr>
                      <tr>
                        <td className="text-sm">marriage contract:</td>
                        <td>{Nmar}</td>
                      </tr>
                      <tr>
                        <td className="text-sm">Cenomar:</td>
                        <td>{Nce}</td>
                      </tr>
                    </table>

                    <Reset />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between bg-white">
                <button
                  className="transition-all hover:text-blue-500 text-center w-full text-lg"
                  onClick={() => {
                    setOpenReport((prev) => !prev);
                  }}
                >
                  <FontAwesomeIcon icon={faClose} className="" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Report;
