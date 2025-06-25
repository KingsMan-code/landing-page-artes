import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import Cursos from './pages/Cursos';
import Premiacoes from './pages/Premiacoes';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/premiacoes" element={<Premiacoes />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

