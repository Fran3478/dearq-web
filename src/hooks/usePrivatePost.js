import { useContext, useState } from "react";
import { PrivatePostContext } from "../context/privatePost";
import usePrivatePosts from "./usePrivatePosts";
import axios from "axios";

const usePrivatePost = () => {
  const { post, setPost } = useContext(PrivatePostContext);
  const { updatePublishedPost } = usePrivatePosts();

  const [notif, setNotif] = useState(null);

  const getPost = async (id) => {
    try {
      const postFound = await axios.get(
        `${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_PRIVATE_URL}${import.meta.env.VITE_POST_URL}/${id}`,
      );
      setPost(postFound.data);
    } catch (err) {
      setNotif({
        type: "err",
        title: "Error al obtener la publicación",
        info: err.response.data.error,
      });
    }
  };

  const editPost = () => {};

  const publishPost = async (id) => {
    try {
      const publish = await axios.patch(
        `${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_PRIVATE_URL}${import.meta.env.VITE_POST_URL}${import.meta.env.VITE_PUBLISH_URL}/${id}`,
      );
      updatePublishedPost(id);
      setPost({ ...post, published: true });
      setNotif({ type: "ok", info: publish.data.message });
    } catch (err) {
      if (err.response.status === 409) {
        setNotif({
          type: "warn",
          title: "No se pudo publicar",
          info: err.response.data.error,
        });
      } else {
        setNotif({
          type: "err",
          title: "Error al publicar",
          info: err.response.data.error,
        });
      }
    }
  };

  const unpublishPost = async (id) => {
    try {
      const unpublish = await axios.patch(
        `${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_PRIVATE_URL}${import.meta.env.VITE_POST_URL}${import.meta.env.VITE_UNPUBLISH_URL}/${id}`,
      );
      updatePublishedPost(id);
      setPost({ ...post, published: false });
      setNotif({ type: "ok", info: unpublish.data.message });
    } catch (err) {
      if (err.response.status === 409) {
        setNotif({
          type: "warn",
          title: "No se pudo despublicar",
          info: err.response.data.error,
        });
      } else {
        setNotif({
          type: "err",
          title: "Error al publicar",
          info: err.response.data.error,
        });
      }
    }
  };

  const deletePost = async (id) => {
    try {
      const response = await axios.delete(
        import.meta.env.VITE_BASE_URL + `/blog/delete-post/${id}`,
      );
      setNotif({ type: "ok", info: response.data.message });
    } catch (err) {
      console.log(err);
      setNotif({ type: "err", info: err.response.data.error });
    }
  };

  console.log(notif);

  return {
    post,
    notif,
    setNotif,
    getPost,
    publishPost,
    unpublishPost,
    editPost,
    deletePost,
  };
};

export default usePrivatePost;
