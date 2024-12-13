import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
const Dashboard = () => {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const getUserData = async () => {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            if (userData?.isAdmin) {
              setIsAdmin(true);
            } else {
              setIsAdmin(false);
              navigate("/");
            }
          } else {
            setIsAdmin(false);
            navigate("/");
          }
        } catch (error) {
          console.error("Erro ao verificar os dados do usuário:", error);
          setIsAdmin(false);
          navigate("/");
        }
      };
      getUserData();
    } else {
      navigate("/login");
    }
  }, [navigate]);
  if (isAdmin === null) {
    return <div>Carregando...</div>;
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {" "}
      <div className="w-full max-w-3xl bg-white p-6 rounded shadow">
        {" "}
        <h1 className="text-3xl font-bold mb-4">
          Dashboard de Administrador
        </h1>{" "}
        {isAdmin ? (
          <div>
            {" "}
            <p>
              Bem-vinda, Fonoaudióloga! Você tem acesso ao painel de
              administração.
            </p>{" "}
            {/* Funcionalidades do dashboard */}{" "}
          </div>
        ) : (
          <p>Você não tem permissão para acessar esta página.</p>
        )}{" "}
      </div>{" "}
    </div>
  );
};
export default Dashboard;
