import paideiaLogo from '../assets/logo_paideia_v5.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img
              src={paideiaLogo}
              alt="Paideia Artes"
              className="h-14 w-auto"
            />
          </div>
          <h3 className="text-2xl font-bold mb-2">Paideia Artes</h3>
          <p className="text-gray-400 mb-6">
            Formação artística na Zona Norte do Rio de Janeiro
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://instagram.com/paideiaartes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com/paideiaartes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://wa.me/5521999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              WhatsApp
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400">
              © 2024 Paideia Artes. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;