// Library
import React from "react";

// Components
import SkeletonFeatured from "./SkeletonFeatured";
import SkeletonCards from "./SkeletonCards";

const Skeleton = () => {
  return (
    <>
      <SkeletonFeatured />
      <div className="flex py-6 flex-wrap transition-all">
        <SkeletonCards />
        <SkeletonCards />
        <SkeletonCards />
        <SkeletonCards />
        <SkeletonCards />
        <SkeletonCards />
      </div>
    </>
  );
};

export default Skeleton;
