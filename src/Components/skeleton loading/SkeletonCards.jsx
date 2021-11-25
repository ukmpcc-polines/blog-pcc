// Library
import React from "react";

export default function SkeletonCards() {
  return (
    <div className="w-full px-3 lg:w-4/12 md:w-6/12 transition-all z-0">
      <article className="text-white py-6 animate-pulse">
        <div className="bg-gray-300 dark:bg-gray-900 h-44 rounded-lg "></div>
        <div className="h-16 bg-gray-300 dark:bg-gray-900 flex flex-row justify-start items-center p-5 rounded-lg mt-2">
          <div className="h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800"></div>
          <div className="h-5 w-32 bg-gray-100 dark:bg-gray-800 ml-2 rounded-lg"></div>
        </div>
      </article>
    </div>
  );
}
