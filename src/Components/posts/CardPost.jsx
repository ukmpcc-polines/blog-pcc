// Library
import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Utils
import dateToString from "../../utils/dateToString";

const CardPost = ({ data }) => {
  return (
    <article className="py-6 border-b-2 border-gray-600 lg:border-0">
      <LazyLoadImage
        effect="blur"
        className="rounded h-52 object-fill"
        src={data.thumbnail.formats.small.url}
        alt="thumbnail"
        placeholderSrc="https://via.placeholder.com/"
      />
      <div className="flex items-center space-x-2 text-sm dark:text-gray-400 text-gray-600 mt-3 mb-2">
        <h4 className="uppercase">{data.category.name}</h4>
        <span>&bull;</span>
        <h4>{dateToString(data.created_at)}</h4>
      </div>
      <Link
        className="text-xl transition-all hover:underline cursor-pointer"
        to={`/detail/${data.slug}`}
      >
        {data.title}
      </Link>
      <p className="dark:text-gray-400 text-gray:600 mt-3">{data.headline}</p>
      <div className="flex items-center mt-3">
        <LazyLoadImage
          effect="blur"
          className="h-10 w-10 object-cover"
          src={data.author.avatar.url}
          alt="author-image"
          placeholderSrc="https://via.placeholder.com/"
        />
        <div className="ml-3">
          <h4>{data.author.name}</h4>
        </div>
      </div>
    </article>
  );
};

export default CardPost;
