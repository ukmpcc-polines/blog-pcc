// Library
import React from "react";

const SkeletonDetail = () => {
  return (
    <>
      <div className="w-10/12 bg-gray-300 mx-auto dark:bg-gray-900 mt-2 h-96 rounded-lg animate-pulse"></div>
      <div className="w-10/12 mt-2 px-2 mx-auto bg-gray-300 dark:bg-gray-900 h-96 rounded-lg animate-pulse p-3">
        <div className="w-4/12 bg-gray-100 dark:bg-gray-800 h-6 rounded-lg animate-pulse mx-auto"></div>
        <div className="w-10/12 bg-gray-100 dark:bg-gray-800 h-24 mt-5 rounded-lg animate-pulse mx-auto"></div>
        <div className="w-10/12 bg-gray-100 dark:bg-gray-800 h-48 mt-5 rounded-lg animate-pulse mx-auto"></div>
      </div>
    </>
  );
};

export default SkeletonDetail;
