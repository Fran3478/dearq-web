import { useState } from "react";
import SimpleSelect from "../../select/SimpleSelect";
import { usePostCategories } from "../../../hooks/usePostCategories";

const PostTableFilter = () => {
  const { categories } = usePostCategories();

  const statusOptions = [
    { id: 1, title: "Publicado", value: true },
    { id: 2, title: "No publicado", value: false },
  ];

  const [statusFilter, setStatusFilter] = useState({});
  const [categoriesFilter, setCategoriesFilter] = useState({});

  const handleCleanFilters = () => {
    setStatusFilter({});
    setCategoriesFilter({});
  };

  return (
    <div className="flex justify-between my-3">
      <div className="flex gap-5">
        <SimpleSelect
          text={"Estado"}
          options={statusOptions}
          value={statusFilter}
          setValue={setStatusFilter}
        />
        <SimpleSelect
          text={"Categoria"}
          options={categories}
          value={categoriesFilter}
          setValue={setCategoriesFilter}
        />
      </div>
      <button
        className="text-sm hover:text-gray-400 flex items-center"
        onClick={(e) => {
          e.stopPropagation();
          handleCleanFilters();
        }}
      >
        <span className="text-lg">&times;&nbsp;</span>Limpiar filtros
      </button>
    </div>
  );
};

export default PostTableFilter;
