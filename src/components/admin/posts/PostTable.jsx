import usePrivatePosts from "../../../hooks/usePrivatePosts";
import Pagination from "../../pagination/Pagination";
import { formatDate } from "../../../helpers/formatDate";

const PostTable = () => {
  const { data, getPosts } = usePrivatePosts();

  const handlePageChange = (page) => {
    getPosts({ page });
  };

  return (
    <div className="flex flex-col w-full shadow-md">
      <div className=""></div>
      <table className="table-auto rounded-md overflow-hidden">
        <thead className="text-center bg-[#fff2e7] text-[#ff8211] ">
          <tr>
            <th className="p-4">Imagen</th>
            <th className="p-4">Título</th>
            <th className="p-4">Estado</th>
            <th className="p-4">Categorías</th>
            <th className="p-4">Autor</th>
            <th className="p-4">Creado</th>
            <th className="p-4">Ultima modificación</th>
            <th className="p-4">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.posts.map((post) => (
            <tr key={post.id}>
              <td className="p-4">
                <img
                  className="w-16 h-9"
                  src={post.postView.img}
                  alt="no-image"
                />
              </td>
              <td className="p-4">{post.postView.title}</td>
              <td className="p-4">
                {post.published ? (
                  <span className="text-green-600 text-sm font-semibold p-1 bg-green-100 rounded-lg shadow-md">
                    publicado
                  </span>
                ) : (
                  <span className="text-red-600 text-sm font-semibold p-1 bg-red-100 rounded-lg shadow-md">
                    no publicado
                  </span>
                )}
              </td>
              <td className="p-4">
                {post.categories.map((cat) => cat.title).join(", ")}
              </td>
              <td className="p-4">Not implemented yet</td>
              <td className="p-4 text-center">
                {formatDate(post.created_date)}
              </td>
              <td className="p-4 text-center">
                {post.updated_date
                  ? formatDate(post.updated_date)
                  : "no se modificó"}
              </td>
              <td className="p-4">algo</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="my-6">
        <Pagination
          currentPage={data.currentPage}
          totalPages={data.totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default PostTable;
