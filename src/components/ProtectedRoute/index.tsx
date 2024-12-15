import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebaseConfig";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div>Carregando...</div>; 
  if (!user) return <Navigate to="/login" replace />;

  return children;
};

export default ProtectedRoute;
