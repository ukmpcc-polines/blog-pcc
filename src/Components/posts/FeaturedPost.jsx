// Library
import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Utils
import dateToString from "../../utils/dateToString";

const featuredPost = ({ data }) => {
  if (data === false) {
    return <></>;
  } else {
    return (
      <article className="box-border">
        <div className="flex flex-col px-4 py-6 lg:items-center lg:flex-row lg:px-0">
          <div className="w-full lg:w-8/12">
            <LazyLoadImage
              effect="blur"
              className="rounded"
              src={data.thumbnail.formats.medium.url}
              alt="featured Post"
            />
          </div>
          <div className="w-full py-3 text-center lg:w-4/12 lg:px-6 lg:text-left">
            <div className="flex justify-center items-center text-sm space-x-2 text-gray-600 dark:text-gray-400 lg:justify-start">
              <h4 className="uppercase">{data.category.name}</h4>
              <span>&bull;</span>
              <h4>{dateToString(data.created_at)}</h4>
            </div>
            <Link
              className="text-2xl mt-3 hover:underline cursor-pointer xl:mt-5 lg:text-left"
              to={`/detail/${data.slug}`}
            >
              {data.title}
            </Link>
            <p className="dark:text-gray-400 text-gray-600 mt-3">
              {data.headline}
            </p>
            <div className="flex mt-5 justify-center items-center letter-wide lg:mt-3 lg:justify-start">
              <LazyLoadImage
                effect="blur"
                className="h-10 w-10 object-cover"
                src={data.author.avatar.url}
                alt="author"
              />
              <div className="ml-3">{data.author.name}</div>
            </div>
          </div>
        </div>
      </article>
    );
  }
};

export default featuredPost;
