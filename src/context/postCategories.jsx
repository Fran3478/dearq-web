import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const PostCategoriesContext = createContext();

export const PostCategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState(null);

  return (
    <PostCategoriesContext.Provider value={{ categories, setCategories }}>
      {children}
    </PostCategoriesContext.Provider>
  );
};

PostCategoriesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
