import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    // setTimeout(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(url);
        const posts = response.data;
        setPosts(posts);
        setIsLoading(false);
      } catch (err) {
        err.message = "gagal mengambil data dari API";
        setIsError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
    // }, 3000);
  }, [url]);

  return { posts, setPosts, isLoading, isError };
};

export default useAxios;
