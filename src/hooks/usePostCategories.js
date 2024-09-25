import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { PostCategoriesContext } from "../context/postCategories";

export const usePostCategories = () => {
  const { categories, setCategories } = useContext(PostCategoriesContext);

  const [notif, setNotif] = useState(null);

  const getCategories = async () => {
    try {
      const categoriesFound = await axios.get(
        import.meta.env.VITE_BASE_URL +
          import.meta.env.VITE_PUBLIC_URL +
          import.meta.env.VITE_CATEGORY_URL,
      );
      setCategories(categoriesFound.data);
    } catch (err) {
      setNotif({
        type: "err",
        title: "Error al obener las categorias",
        info: err.response.data.error,
      });
    }
  };

  useEffect(() => {
    if (!categories || categories.length === 0) {
      getCategories();
    }
  }, [categories]);

  return {
    categories,
    getCategories,
    notif,
  };
};
