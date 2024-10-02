import { useContext, useEffect, useState } from "react";
import { PrivatePostsContext } from "../context/privatePosts";
import axios from "axios";

const usePrivatePosts = () => {
  const { data, setData } = useContext(PrivatePostsContext);

  const [loading, setLoading] = useState(true);
  const [notif, setNotif] = useState(null);

  const getPosts = async ({ page = 1 } = {}) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_PRIVATE_URL}${import.meta.env.VITE_POST_URL}`,
        {
          params: {
            page,
          },
        },
      );
      setData({
        posts: response.data.rows || [],
        totalPosts: response.data.totalPosts || 0,
        currentPage: response.data.currentPage || 1,
        totalPages: response.data.totalPages || 1,
      });
    } catch (err) {
      console.log(err);
      setNotif(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const updatePublishedPost = (id) => {
    const updateList = data.posts.map((post) =>
      post.id === id ? { ...post, published: !post.published } : post,
    );
    setData({ ...data, posts: updateList });
  };

  return { data, loading, notif, getPosts, updatePublishedPost };
};

export default usePrivatePosts;
