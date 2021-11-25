// Library
import React from "react";
import { useParams } from "react-router";

// Components
import BlogPage from "../../Components/page/BlogPage";

// API
import useAxios from "../../utils/useAxios";

const Category = () => {
  const { name } = useParams();

  const { posts, isLoading, isError } = useAxios(
    `${process.env.REACT_APP_API_URL}/posts?category.name=${name}&_sort=created_at:DESC`,
    `${name} - UKM PCC`
  );

  return (
    <>
      <title>{name} - PCC</title>
        <BlogPage
          data={posts}
          titleHeader={name}
          loading={isLoading}
          error={isError}
        />
    </>
  );
};

export default Category;
