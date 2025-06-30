import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              PAIDEIA ARTES
            </div>
            <p className="text-gray-300 mb-4">
              Formação artística completa para crianças, jovens e adultos na Zona Norte do Rio de Janeiro.
              Desenvolvendo talentos e transformando vidas através da arte desde 2016.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cursos" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Cursos
                </Link>
              </li>
              <li>
                <Link to="/premiacoes" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Premiações
                </Link>
              </li>
              <li>
                <Link to="/fale-conosco" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin size={16} className="text-cyan-400" />
                <span className="text-gray-300 text-sm">Zona Norte, Rio de Janeiro</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-cyan-400" />
                <span className="text-gray-300 text-sm">(21) 99999-9999</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-cyan-400" />
                <span className="text-gray-300 text-sm">contato@paideiaartes.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Paideia Artes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

