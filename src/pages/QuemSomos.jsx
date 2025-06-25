const QuemSomos = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-6">
              Quem Somos
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nossa História
              </h2>
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
            
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-6xl mb-4">🎭</div>
                <h3 className="text-2xl font-bold text-purple-800 mb-4">Desde 2016</h3>
                <p className="text-gray-700 text-lg">
                  Formando artistas e transformando vidas através da arte na Zona Norte do Rio de Janeiro
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nossos Pilares
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-purple-800 mb-4">Missão</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-center">
                Desenvolver, pesquisar e oferecer serviços de formação artística em crianças, jovens e adultos, 
                de maneira holística onde a arte passe a ser um elemento que agrega valor na formação educacional e social.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-pink-800 mb-4">Visão</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-center">
                Ser referência na criação e entrega de serviços artísticos na zona norte do Rio de Janeiro.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-orange-800 mb-4">Valores</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-center">
                Trabalho em grupo, crescimento pessoal e sensível do indivíduo, respeito pelas diferenças e individualidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modalidades Artísticas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Modalidades Artísticas
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-5xl mb-4">🎭</div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">Teatro</h3>
              <p className="text-gray-700">Formação teatral completa para todas as idades</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-5xl mb-4">🎵</div>
              <h3 className="text-xl font-bold text-pink-800 mb-2">Música</h3>
              <p className="text-gray-700">Ensino musical em diversas modalidades</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-5xl mb-4">💃</div>
              <h3 className="text-xl font-bold text-orange-800 mb-2">Dança</h3>
              <p className="text-gray-700">Diferentes estilos e técnicas de dança</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Desenho</h3>
              <p className="text-gray-700">Técnicas de desenho e expressão artística</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-5xl mb-4">🎙️</div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Dublagem</h3>
              <p className="text-gray-700">Técnicas de dublagem e locução</p>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-indigo-800 mb-2">Formação Integral</h3>
              <p className="text-gray-700">Desenvolvimento artístico completo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nossa Localização
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Zona Norte do Rio de Janeiro</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Estamos estrategicamente localizados na Zona Norte do Rio de Janeiro, 
                    próximo à Vila da Penha, oferecendo fácil acesso para toda a região.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Fácil acesso por transporte público</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Ambiente seguro e acolhedor</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Instalações modernas e equipadas</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-xl">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📍</div>
                    <h4 className="text-xl font-bold text-purple-800 mb-2">Venha nos visitar!</h4>
                    <p className="text-gray-700">
                      Entre em contato conosco para agendar uma visita e conhecer nossas instalações.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuemSomos;

