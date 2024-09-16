import { useContext, useState } from "react";
import { PublicPostsContext } from "../context/publicPosts";
import axios from "axios";

const usePublicPosts = () => {
  const { data, setData } = useContext(PublicPostsContext);

  const [error, setError] = useState(null);

  const getPosts = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_PUBLIC_URL}${import.meta.env.VITE_POST_URL}`,
      );
      console.log(response);
      setData({
        posts: response.data.rows,
        totalPosts: response.data.totalPosts,
        currentPage: response.data.currentPage,
        totalPages: response.data.totalPages,
      });
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  return { data, getPosts, error };
};

export default usePublicPosts;
