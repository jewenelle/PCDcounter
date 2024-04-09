import React from "react";
import AddB from "@/components/AddNID/AddB";
import Header from "@/components/Header/Header";
import AddM from "@/components/AddNID/AddM";
import AddD from "@/components/AddNID/AddD";
import AddC from "@/components/AddNID/AddC";

const Home = () => {
  return (
    <div className="mx-auto">
      <div className="flex flex-col items-center justify-center bg-gray-800 p-4 md:h-100 h-full">
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
