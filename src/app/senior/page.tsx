import dynamic from "next/dynamic";
import React from "react";
const DynamicMainSenior = dynamic(
  () => import("../../components/Main/MainSenior"),
  {
    ssr: false,
  }
);
const Home = () => {
  return (
    <>
      <DynamicMainSenior />
    </>
  );
};

export default Home;
