interface UserCardProps {
  user: {
    id: string;
    email: string;
    isAdmin: boolean;
  };
  onDelete: (userId: string) => void;
  onDetails: (userId: string) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onDelete, onDetails }) => {
  return (
    <div className="user-card bg-white p-4 rounded shadow">
      <p className="text-brown mb-2"><strong>Email:</strong> {user.email}</p>
      <p className="text-brown mb-2"><strong>Admin:</strong> {user.isAdmin ? "Sim" : "Não"}</p>
      <div className="flex flex-col sm:flex-row justify-between gap-2">
        <button
          className="bg-brown-light text-white py-2 px-4 rounded hover:bg-brown w-full sm:w-auto"
          onClick={() => onDetails(user.id)}
        >
          Ver Detalhes
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 w-full sm:w-auto"
          onClick={() => onDelete(user.id)}
        >
          Remover
        </button>
      </div>
    </div>
  );
};

export default UserCard;
