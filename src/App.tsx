import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contato from './pages/Contact';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contato />} />
    </Routes>
  );
}

export default App;
