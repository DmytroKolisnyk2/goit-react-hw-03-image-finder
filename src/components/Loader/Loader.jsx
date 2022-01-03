import React from "react";
import "./Loader.scss";
import LoaderPart from "./LoaderPart/LoaderPart";

const Loader = () => {
  const arrayOfLoaderParts = [...Array(12).keys()];
  return (
    <>
      {arrayOfLoaderParts.map((item) => (
        <LoaderPart key={item} />
      ))}
    </>
  );
};

export default Loader;
