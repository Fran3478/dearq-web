import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";

const Auth = () => {
  const { isAuthenticated, isAdmin, isTokenLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isTokenLoading) return;

    if (isAuthenticated()) {
      if (isAdmin()) return navigate("/admin/posts", { replace: true });
      return navigate("/home", { replace: true });
    } else {
      return navigate("/auth/login");
    }
  }, [isTokenLoading, isAuthenticated, isAdmin, navigate]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Auth;
