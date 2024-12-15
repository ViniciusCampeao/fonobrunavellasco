import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log("Usuário autenticado:", user);

      const userDocRef = doc(db, "users", user.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        console.log("Dados do usuário:", userData);

        localStorage.setItem("isAdmin", userData?.isAdmin ? "true" : "false");

        navigate("/");
      } else {
        setError("Usuário não encontrado no Firestore.");
        console.error("Usuário não encontrado no Firestore:", user.uid);
      }
    } catch (error) {
      setError("Erro ao fazer login. Verifique suas credenciais.");
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <div>
      <Header />
    <div className="flex justify-center items-center min-h-screen bg-pastel-light text-brown-dark">
      <div className="w-full max-w-sm p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded border-brown-light"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded border-brown-light"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-brown text-white py-2 rounded hover:bg-brown-dark"
        >
          Entrar
        </button>
      </div>
    </div>
    </div>
  );
};

export default Login;
