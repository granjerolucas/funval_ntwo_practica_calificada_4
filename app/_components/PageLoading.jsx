import React from "react";
import Spinner from "./Spinner";

const PageLoading = () => {
  return (
    <div className="flex justify-center items-center m-4 min-h-[calc(50vh)]">
      <Spinner />
    </div>
  );
};

export default PageLoading;
