import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Cursos', path: '/cursos' },
    { name: 'Premiações', path: '/premiacoes' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent gradient-anim-text">
              PAIDEIA ARTES
            </div>
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative flex flex-col items-center">
                <Link
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-cyan-600 bg-cyan-50'
                      : 'text-gray-700 hover:text-cyan-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
                {/* Linha neon animada embaixo do item ativo */}
                {isActive(item.path) && (
                  <span className="absolute -bottom left-1/2 -translate-x-1/2 w-4/5 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-600 animate-neon-glow"></span>
                )}
              </div>
            ))}
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-cyan-600 focus:outline-none focus:text-cyan-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-cyan-600 bg-cyan-50'
                      : 'text-gray-700 hover:text-cyan-600 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* Neon Line Effect - ocupa toda a largura do navbar */}
      <div className="absolute left-0 right-0 bottom-0 h-1 pointer-events-none">
        <div className="w-full h-full animate-neon-glow bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-600 rounded-full blur-[2px] opacity-80"></div>
        <div className="w-full h-[2px] bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-600 absolute top-1/2 left-0"></div>
      </div>
    </nav>
  );
};

export default Navigation;

