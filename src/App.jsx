import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Cursos from './pages/Cursos';
import Premiacoes from './pages/Premiacoes';
import FaleConosco from './pages/FaleConosco';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/premiacoes" element={<Premiacoes />} />
          <Route path="/fale-conosco" element={<FaleConosco />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

