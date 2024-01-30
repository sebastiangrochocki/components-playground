import React from "react";
import Lottie from "lottie-react";
import loaderAnimation from "./assets/loader.json";
import "./Spinner.scss";
import Flex from "./Flex";

const Spinner = () => {
  return (
    <Flex customClass="Spinner">
      <Lottie animationData={loaderAnimation} loop autoplay />
    </Flex>
  );
};

export default Spinner;
