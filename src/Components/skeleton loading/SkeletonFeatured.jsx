// Library
import React from "react";

const SkeletonFeatured = () => {
  return (
    <article className="box-border z-0">
      <div className="flex flex-col px-3 py-6 lg:items-center lg:flex-row md:px-4 md:space-x-3">
        <div className="w-full rounded-lg lg:w-8/12 lg:h-96 bg-gray-300 dark:bg-gray-900 animate-pulse"></div>
        <div className="w-full py-3 lg:w-4/12 lg:px-6 bg-gray-100 dark:bg-gray-800 flex flex-col space-y-2">
          <div className="h-56 bg-gray-300 dark:bg-gray-900 animate-pulse rounded-lg"></div>
          <div className="h-16 bg-gray-300 dark:bg-gray-900 flex flex-row justify-start items-center p-5 animate-pulse rounded-lg">
            <div className="h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800"></div>
            <div className="h-5 w-32 bg-gray-100 dark:bg-gray-800 ml-2 rounded-lg"></div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SkeletonFeatured;
