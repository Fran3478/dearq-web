import { useAuth } from "../hooks/useAuth";
import NotAllow from "../components/errors/NotAllow";
import { PrivatePostsProvider } from "../context/privatePosts";
import { PrivatePostProvider } from "../context/privatePost";
import AdminLayout from "../pages/admin/AdminLayout";

const AdminRoute = () => {
  const { isAdmin } = useAuth();

  if (!isAdmin()) {
    return <NotAllow />;
  }

  return (
    <>
      <PrivatePostsProvider>
        <PrivatePostProvider>
          <AdminLayout />
        </PrivatePostProvider>
      </PrivatePostsProvider>
    </>
  );
};

export default AdminRoute;
