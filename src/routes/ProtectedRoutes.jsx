import { Navigate } from "react-router-dom";
import { AppLayout } from "../components/AppLayout";
import { useAuthStore } from "../store/authStore";

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, checkAuth } = useAuthStore();

  // useEffect(() => {
  //   checkAuth();
  // }, [checkAuth]);

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />;
  }

  return (
    <AppLayout>
      <main className="flex-grow bg-whyte h-screen scroll-smooth overflow-y-auto">{children}</main>
    </AppLayout>
  );
};
