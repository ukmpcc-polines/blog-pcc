// Library
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";

// Components
import Layout from "../../Components/layout/Layout";
import SkeletonDetail from "../../Components/skeleton loading/SkeletonDetail";
import ErrorMessage from "../../Components/error message/ErrorMessage";

// API
import useAxios from "../../utils/useAxios";
import dateToString from "../../utils/dateToString";

const Detail = () => {
  const { slug } = useParams();

  const { posts, isLoading, isError } = useAxios(
    `${process.env.REACT_APP_API_URL}/posts?slug=${slug}`,
    `${slug} - Blog`
  );

  const post = posts[0];

  if (isError) {
    return <Layout>{isError && <ErrorMessage error={isError} />}</Layout>;
  }

  return (
    <Layout>
      <title>{slug} - PCC</title>
      {isLoading ? (
        <SkeletonDetail />
      ) : (
        <>
          <div className="w-full flex items-center justify-center py-4 px-2">
            <img
              className="object-cover w-10/12 rounded-lg"
              src={post.thumbnail.formats.small.url}
              alt="Thumbnail"
            />
          </div>
          <div className="w-10/12 flex justify-center mx-auto py-2 px-2">
            <div className="w-full md:w-5/12 flex justify-center space-x-2 text-gray-600 dark:text-gray-400 items-center">
              <h4 className="uppercase">{post.category.name}</h4>
              <span>&bull;</span>
              <h4>{dateToString(post.created_at)}</h4>
            </div>
          </div>
          <div className="w-10/12 flex justify-center mx-auto py-2 px-2">
            <div className="w-full flex justify-center">
              <h2 className="text-2xl lg:text-3xl text-center">{post.title}</h2>
            </div>
          </div>
          <div className="w-10/12 flex justify-center py-4 px-2 mx-auto dark:text-gray-400 text-gray-600 leading-relaxed text-justify">
            <div className="w-full">
              <p className="mb-4 text-lg">{post.headline}</p>
              <ReactMarkdown className="prose text-gray-600 dark:text-gray-400 text-lg">
                {post.contents}
              </ReactMarkdown>
            </div>
          </div>
          <div className="w-full flex justify-center py-4 px-2">
            <div className="w-8/12 flex justify-center items-center">
              <img
                className="h-14 w-14 object-cover"
                src={post.author.avatar.url}
                alt="DetailImage"
              />
              <div className="ml-3">
                <h4>{post.author.name}</h4>
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default Detail;
