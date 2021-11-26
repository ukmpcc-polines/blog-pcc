// Library
import React from "react";

// Components
import Layout from "../../Components/layout/Layout";
import FeaturedPost from "../../Components/posts/FeaturedPost";
import CardPost from "../../Components/posts/CardPost";
import Skeleton from "../../Components/skeleton loading/Skeleton";
import ErrorMessage from "../../Components/error message/ErrorMessage";

// Api
import useAxios from "../../utils/useAxios";

const Home = () => {
  // const [start, setStart] = useState(6);
  let featuredPost;

  // Fetching Data Featured Post From API
  const { posts: featured } = useAxios(
    `${process.env.REACT_APP_API_URL}/posts?featured=true`
  );

  // Fetching First Data Featured Post
  if (featured.length > 0) {
    featuredPost = featured[0];
  } else {
    featuredPost = false;
  }

  // Fetching Data Post From API
  const { posts, isLoading, isError } = useAxios(
    `${process.env.REACT_APP_API_URL}/posts?featured=false&_sort=created_at:DESC`,
    "Home - Blog"
  );

  // async function loadMore() {
  //   const req = await fetch(
  //     `${process.env.REACT_APP_API_URL}/posts?featured=false&_sort=created_at:DESC&_start=${start}&_limit=6`
  //   );
  //   const newPosts = await req.json();
  //   setPosts([...posts, ...newPosts]);
  //   setStart(start + 6);
  // }

  return (
    <Layout>
      <title>PCC - Share Your Knowledge</title>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <FeaturedPost data={featuredPost} />
          <div className="flex py-6 flex-wrap">
            {posts.map((post) => {
              return (
                <div className="w-full px-3 lg:w-4/12 md:w-6/12">
                  <CardPost data={post} key={post.id} />
                </div>
              );
            })}
            {/* <button
              onClick={loadMore}
              className={
                start > posts.length
                  ? "hidden"
                  : `bg-gray-800 text-gray-300 dark:bg-gray-100 dark:text-gray-900 px-4 py-2 rounded-full mx-auto mt-5 dark:hover:bg-purple-700 dark:hover:text-gray-100`
              }
            >
              Load More
            </button> */}
          </div>
        </>
      )}

      {isError && <ErrorMessage error={isError} />}
    </Layout>
  );
};

export default Home;
