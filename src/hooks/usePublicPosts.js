import { useContext, useEffect, useState } from "react";
import { PublicPostsContext } from "../context/publicPosts";
import axios from "axios";

const usePublicPosts = () => {
  const { data, setData } = useContext(PublicPostsContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          import.meta.env.VITE_BASE_URL +
            import.meta.env.VITE_PUBLIC_URL +
            import.meta.env.VITE_POST_URL,
        );
        setData({
          posts: response.data.rows,
          totalPosts: response.data.totalPosts,
          currentPage: response.data.currentPage,
          totalPages: response.data.totalPages,
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return { data, loading, error };
};

export default usePublicPosts;
