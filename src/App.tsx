import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contato from './pages/Contact';
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Game from './pages/Game';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contato />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}

export default App;
