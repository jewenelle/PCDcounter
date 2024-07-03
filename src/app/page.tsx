import dynamic from "next/dynamic";
import React from "react";

const DynamicMain = dynamic(() => import("../components/Main/Main"), {
  ssr: false,
});
const Home = () => {
  return (
    <>
      <DynamicMain />
    </>
  );
};

export default Home;
