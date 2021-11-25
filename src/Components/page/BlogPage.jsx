// Library
import React from "react";
import { useParams } from "react-router";

// Components
import Layout from "../layout/Layout";
import CardPost from "../posts/CardPost";
import SkeletonCards from "../skeleton loading/SkeletonCards";
import ErrorMessage from "../error message/ErrorMessage";

const BlogPage = ({ data, titleHeader, loading, error, query }) => {
  // Get Params Title from URL
  const { name } = useParams();
  console.log(name);

  return (
    <Layout>
      {loading ? (
        <div className="flex py-6 flex-wrap">
          <SkeletonCards />
          <SkeletonCards />
          <SkeletonCards />
          <SkeletonCards />
          <SkeletonCards />
          <SkeletonCards />
        </div>
      ) : (
        <div className={loading || error ? "hidden" : ""}>
          {data.length === 0 ? (
            name !== undefined ? (
              <>
                <div className="text-center py-52">
                  <h2 className="text-5xl">sorry, data not found 😥</h2>
                </div>
                {loading = false}
                </>
            ) : (
              <div className="text-center tracking-wide py-40">
                <h2 className="text-5xl">No result 😥</h2>
                <p className="text-lg">
                  Kami tidak dapat menemukan postingan dengan kata kunci `
                  <strong className="tracking-loose text-red-200">
                    {query}
                  </strong>
                  `.
                </p>
                <p className="text-lg"> Silakan coba kata kunci lain.</p>
              </div>
            )
          ) : (
            <>
              <h2 className="text-4xl text-center pt-10 pb-4 tracking wide">
                {name ? titleHeader : `${titleHeader} : ${query}`}
              </h2>
              <div className="flex py-4 px-2 flex-wrap lg:px=0">
                {data.map((post) => {
                  return (
                    <div className="w-full py-4 px-4 lg:w-4/12 md:w-6/12 md:px-2">
                      <CardPost key={post.id} data={post} />
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      )}
      {error && <ErrorMessage error={error} />}
    </Layout>
  );
};

export default BlogPage;
