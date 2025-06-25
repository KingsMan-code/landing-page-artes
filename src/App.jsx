import Navigation from './components/Navigation';
import CoursesSection from './components/CoursesSection';
import TeamCarousel from './components/TeamCarousel';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Navigation />
      
      {/* Hero Section */}
      <section id="inicio" className="pt-16 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              PAIDEIA ARTES
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              Formação artística completa para crianças, jovens e adultos na Zona Norte do Rio de Janeiro
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Conheça Nossos Cursos
              </button>
              <button className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quem Somos Section */}
      <section id="quem-somos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quem Somos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Somos artistas que em grupo decidiram propagar os conhecimentos artísticos adquiridos durante a vida. 
                Todos os profissionais atuantes dentro do mercado cultural.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nascemos em meados de 2016 atuando específicamente com a formação teatral de crianças, jovens e adolescentes. 
                Durante meses estruturamos nossa equipe para juntos expandirmos as modalidades artísticas.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Hoje nossos serviços de formação artística estão ligados a <strong>MÚSICA, TEATRO, DANÇA, DESENHO e DUBLAGEM</strong>.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-purple-800 mb-3">Missão</h3>
                <p className="text-gray-700">
                  Desenvolver, pesquisar e oferecer serviços de formação artística em crianças, jovens e adultos, 
                  de maneira holística onde a arte passe a ser um elemento que agrega valor na formação educacional e social.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pink-100 to-orange-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-pink-800 mb-3">Visão</h3>
                <p className="text-gray-700">
                  Ser referência na criação e entrega de serviços artísticos na zona norte do Rio de Janeiro.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-orange-800 mb-3">Valores</h3>
                <p className="text-gray-700">
                  Trabalho em grupo, crescimento pessoal e sensível do indivíduo, respeito pelas diferenças e individualidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos Section */}
      <CoursesSection />

      {/* Equipe Section */}
      <TeamCarousel />

      {/* Premiações Section */}
      <section id="premiacoes" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Premiações
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 p-8 text-center">
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-3xl font-bold text-white mb-2">Prêmio Mizinho 22</h3>
                <p className="text-yellow-100 text-lg">Festival Estudantil Paideia Artes</p>
              </div>
              
              <div className="p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    O Festival estudantil Paideia Artes – Prêmio Mizinho teve sua primeira edição em setembro de 2018. 
                    O Festival homenageia o artista <strong>Almir Rodrigues (Mizinho)</strong> eterno da COMBI – Cia. Brasileira de Interpretação 
                    e fundador do Projeto Paideia Artes e que faleceu em abril de 2018.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    O Festival promove a criação artística e reconhece o talento dos nossos estudantes, 
                    incentivando a continuidade dos estudos e o desenvolvimento das habilidades artísticas.
                  </p>
                  
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-purple-800 mb-3">Homenagem a Mizinho</h4>
                    <p className="text-gray-700">
                      Almir Rodrigues, carinhosamente conhecido como Mizinho, foi um artista fundamental 
                      na criação e desenvolvimento do Projeto Paideia Artes. Sua paixão pela arte e dedicação 
                      ao ensino continuam inspirando nossa missão de formar novos talentos artísticos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🎭</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Teatro</h4>
                <p className="text-gray-600">Apresentações e performances teatrais dos nossos alunos</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🎵</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Música</h4>
                <p className="text-gray-600">Recitais e apresentações musicais em diversas modalidades</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">💃</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Dança</h4>
                <p className="text-gray-600">Espetáculos de dança em diferentes estilos e técnicas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Paideia Artes</h3>
            <p className="text-gray-400 mb-6">
              Formação artística na Zona Norte do Rio de Janeiro
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
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
    </div>
  );
}

export default App;

