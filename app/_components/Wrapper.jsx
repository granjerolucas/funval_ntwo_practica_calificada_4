import React from "react";

const Wrapper = ({ title = "[INSERT_TITLE]", children }) => {
  return (
    <div className="">
      <div className=" bg-gray-600 text-white text-2xl py-4 ">
        <h1 className="container mx-auto">{title}</h1>
      </div>
      <div className="container mx-auto py-10">{children}</div>
    </div>
  );
};

export default Wrapper;
