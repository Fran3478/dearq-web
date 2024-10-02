import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";

const ProtectedRoute = () => {
  const { isAuthenticated, isTokenLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isTokenLoading) return;
    if (!isAuthenticated()) {
      return navigate("/auth/login", { replace: true });
    }
  }, [isTokenLoading, isAuthenticated, navigate]);

  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
