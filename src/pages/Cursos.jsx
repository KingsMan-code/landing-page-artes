import CoursesSection from '../components/CoursesSection';

const Cursos = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-6">
              Nossos Cursos
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra sua paixão artística com nossos cursos especializados. 
              Oferecemos formação completa em diversas modalidades artísticas para todas as idades.
            </p>
          </div>
        </div>
      </section>

      {/* Informações Gerais */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">Todas as Idades</h3>
              <p className="text-gray-700">Cursos para crianças a partir de 3 anos, jovens e adultos</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-pink-800 mb-2">Professores Qualificados</h3>
              <p className="text-gray-700">Equipe de profissionais atuantes no mercado cultural</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-orange-800 mb-2">Instalações Modernas</h3>
              <p className="text-gray-700">Espaços equipados e preparados para cada modalidade</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Cursos */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50">
        <CoursesSection />
      </div>

      {/* Metodologia */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nossa Metodologia
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Formação Artística Holística</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nossa metodologia é baseada no desenvolvimento integral do aluno, 
                onde a arte se torna um elemento transformador na formação educacional e social.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Desenvolvimento Criativo</h4>
                    <p className="text-gray-600">Estímulo à criatividade e expressão individual</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Técnica e Sensibilidade</h4>
                    <p className="text-gray-600">Equilíbrio entre conhecimento técnico e desenvolvimento sensível</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Trabalho em Grupo</h4>
                    <p className="text-gray-600">Valorização do trabalho colaborativo e respeito às diferenças</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-6xl mb-4">🎨</div>
                <h4 className="text-xl font-bold text-purple-800 mb-4">Arte Transformadora</h4>
                <p className="text-gray-700 leading-relaxed">
                  Acreditamos que a arte tem o poder de transformar vidas, 
                  desenvolvendo não apenas habilidades técnicas, mas também 
                  a sensibilidade, criatividade e expressão pessoal de cada aluno.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para Começar sua Jornada Artística?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar você a desenvolver seu talento artístico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Fale Conosco
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
              Agendar Visita
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cursos;

