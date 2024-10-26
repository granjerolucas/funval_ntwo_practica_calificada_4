import React from "react";
import Spinner from "./Spinner";

const PageLoading = () => {
  return (
    <div className="flex justify-center items-center m-4 min-h-[calc(50vh)] w-full">
      <Spinner />
    </div>
  );
};

export default PageLoading;
