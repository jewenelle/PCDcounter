import AddB from "@/components/AddSen/AddB";
import AddC from "@/components/AddSen/AddC";
import AddD from "@/components/AddSen/AddD";
import AddM from "@/components/AddSen/AddM";
import Header from "@/components/Header/Header";
import React from "react";

const Home = () => {
  return (
    <div className="mx-auto">
      <div className="flex flex-col items-center justify-center bg-gray-800 p-4 md:h-100">
        <Header />
        <div className="flex flex-col md:flex-row">
          <AddB />
          <AddM />
          <AddD />
          <AddC />
        </div>
        <p className="text-white text-[8px]">&copy;2024 archide.com</p>
      </div>
    </div>
  );
};

export default Home;
