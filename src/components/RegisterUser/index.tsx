import { useState } from "react";

interface RegisterUserProps {
  onRegister: (email: string, password: string, isAdmin: boolean) => void;
  success: string;
  error: string;
}

const RegisterUser: React.FC<RegisterUserProps> = ({ onRegister, success, error }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const handleRegister = () => {
    onRegister(email, password, isAdmin);
    setEmail("");
    setPassword("");
    setIsAdmin(false);
  };

  return (
    <div className="register bg-white p-4 rounded shadow">
      <h3 className="text-xl font-semibold mb-4">Registrar Usuário</h3>
      {success && <p className="text-green-500 mb-4">{success}</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <input
        className="w-full p-2 mb-2 border rounded"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full p-2 mb-2 border rounded"
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label className="block mb-4">
        <input
          className="mr-2"
          type="checkbox"
          checked={isAdmin}
          onChange={() => setIsAdmin(!isAdmin)}
        />
        Admin
      </label>
      <button
        className="bg-brown text-white py-2 px-4 rounded hover:bg-brown-dark"
        onClick={handleRegister}
      >
        Registrar
      </button>
    </div>
  );
};

export default RegisterUser;
