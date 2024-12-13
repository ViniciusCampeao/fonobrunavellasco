import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc, setDoc, getDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import UserCard from "../components/UserCard";
import RegisterUser from "../components/RegisterUser";
import Header from "../components/Header";

interface User {
  id: string;
  email: string;
  isAdmin: boolean;
}

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [success, setSuccess] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = collection(db, "users");
      const usersSnapshot = await getDocs(usersCollection);
      const usersList = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as User[];
      setUsers(usersList);
    };

    fetchUsers();
  }, [success]); // Atualiza a lista de usuários após um registro bem-sucedido

  const handleRegister = async (email: string, password: string, isAdmin: boolean) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Salvar dados do usuário no Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        isAdmin: isAdmin,
      });

      setSuccess("Usuário registrado com sucesso!");
      setError("");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError("Erro ao registrar usuário. " + error.message);
      } else {
        setError("Erro ao registrar usuário.");
      }
      setSuccess("");
    }
  };

  const handleDelete = async (userId: string) => {
    try {
      await deleteDoc(doc(db, "users", userId));
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
    }
  };

  const handleUserDetails = async (userId: string) => {
    const userDoc = await getDoc(doc(db, "users", userId));
    if (userDoc.exists()) {
      setSelectedUser(userDoc.data() as User);
    }
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-pastel-light text-brown-dark">
        <div className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Dashboard</h2>
          <RegisterUser onRegister={handleRegister} success={success} error={error} />
          <div className="user-list mt-8">
            <h3 className="text-2xl font-semibold mb-4">Usuários Registrados</h3>
            <div className="user-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {users.map(user => (
                <UserCard
                  key={user.id}
                  user={user}
                  onDelete={handleDelete}
                  onDetails={handleUserDetails}
                />
              ))}
            </div>
          </div>
          {selectedUser && (
            <div className="user-details bg-white p-4 rounded shadow mt-6">
              <h3 className="text-xl font-semibold mb-2">Detalhes do Usuário</h3>
              <p className="mb-2"><strong>Email:</strong> {selectedUser.email}</p>
              <p className="mb-2"><strong>Admin:</strong> {selectedUser.isAdmin ? "Sim" : "Não"}</p>
              <button
                className="bg-brown-light text-white py-2 px-4 rounded hover:bg-brown"
                onClick={() => setSelectedUser(null)}
              >
                Fechar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
