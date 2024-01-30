import React from "react";
import Lottie from "lottie-react";
import loaderAnimation from "./assets/loader.json";
import "./Loader.scss";
import Flex from "./Flex";

const Loader = () => {
  return (
    <Flex customClass="Loader">
      <Lottie animationData={loaderAnimation} loop autoplay />
    </Flex>
  );
};

export default Loader;
