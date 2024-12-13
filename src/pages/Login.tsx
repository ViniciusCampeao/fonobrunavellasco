import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Tenta fazer login com as credenciais fornecidas
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log("Usuário autenticado:", user);

      // Obtém os dados do usuário do Firestore
      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        console.log("Dados do usuário:", userData);

        // Verifica se o usuário tem a permissão de admin
        if (userData?.isAdmin) {
          // Se for admin, redireciona para o Dashboard
          navigate("/dashboard");
        } else {
          // Se não for admin, exibe mensagem de erro e desloga o usuário
          setError("Você não tem permissão para acessar o dashboard.");
          await auth.signOut();
        }
      } else {
        // Se não encontrar o usuário no Firestore
        setError("Usuário não encontrado no Firestore.");
        console.error("Usuário não encontrado no Firestore:", user.uid);
      }
    } catch (error) {
      // Se ocorrer qualquer erro, exibe mensagem de erro
      setError("Erro ao fazer login. Verifique suas credenciais.");
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Login;
