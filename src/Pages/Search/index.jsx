// library
import React from "react";
import {useLocation } from "react-router";
import queryString from "query-string"

// Components
import BlogPage from "../../Components/page/BlogPage";

// API
import useAxios from "../../utils/useAxios";

const Search = () => {
  const location = useLocation();
  const query = queryString.parse(location.search).title;

  const { posts, isLoading, isError } = useAxios(
    `${process.env.REACT_APP_API_URL}/posts?title_contains=` + query,
    "Search Post - Blog"
  );

  return (
    <>
      <title>you searched for {query} - PCC</title>
      <BlogPage
        data={posts}
        titleHeader="Search"
        loading={isLoading}
        error={isError}
        query={query}
      />
    </>
  );
};

export default Search;
