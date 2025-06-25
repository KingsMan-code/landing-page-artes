const Premiacoes = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-6">
              Premiações
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrando o talento e dedicação dos nossos alunos através do Festival Estudantil Paideia Artes
            </p>
          </div>
        </div>
      </section>

      {/* Prêmio Mizinho - Destaque Principal */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 p-12 text-center">
                <div className="text-8xl mb-6">🏆</div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Prêmio Mizinho</h2>
                <p className="text-2xl text-yellow-100 mb-2">Festival Estudantil Paideia Artes</p>
                <p className="text-xl text-yellow-200">Primeira edição: Setembro de 2018</p>
              </div>
              
              <div className="p-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-gray-900">Uma Homenagem Especial</h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      O Festival estudantil Paideia Artes – Prêmio Mizinho teve sua primeira edição em setembro de 2018. 
                      O Festival homenageia o artista <strong>Almir Rodrigues (Mizinho)</strong>, eterno da COMBI – Cia. Brasileira de Interpretação 
                      e fundador do Projeto Paideia Artes, que faleceu em abril de 2018.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      O Festival promove a criação artística e reconhece o talento dos nossos estudantes, 
                      incentivando a continuidade dos estudos e o desenvolvimento das habilidades artísticas.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h4 className="text-2xl font-bold text-purple-800 mb-4">Legado de Mizinho</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Almir Rodrigues, carinhosamente conhecido como Mizinho, foi um artista fundamental 
                        na criação e desenvolvimento do Projeto Paideia Artes. Sua paixão pela arte e dedicação 
                        ao ensino continuam inspirando nossa missão.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modalidades do Festival */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Modalidades do Festival
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O Festival Prêmio Mizinho celebra todas as modalidades artísticas oferecidas pela Paideia Artes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="text-6xl mb-6">🎭</div>
                <h3 className="text-2xl font-bold text-purple-800 mb-4">Teatro</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Apresentações e performances teatrais dos nossos alunos, 
                  demonstrando técnicas aprendidas e criatividade desenvolvida.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Monólogos</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Peças Coletivas</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Improvisação</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="text-6xl mb-6">🎵</div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Música</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Recitais e apresentações musicais em diversas modalidades, 
                  showcasing individual e coletivo dos talentos musicais.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Canto Solo</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Coral</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Instrumentos</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <div className="text-6xl mb-6">💃</div>
                <h3 className="text-2xl font-bold text-pink-800 mb-4">Dança</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Espetáculos de dança em diferentes estilos e técnicas, 
                  demonstrando a evolução e expressão corporal dos alunos.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Ballet</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Jazz</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Hip Hop</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outras Modalidades */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-6xl mb-6">🎨</div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">Desenho</h3>
                <p className="text-gray-700 leading-relaxed">
                  Exposição dos trabalhos artísticos desenvolvidos pelos alunos, 
                  incluindo cartoon, mangá, HQ e realismo, demonstrando a evolução técnica e criativa.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-6xl mb-6">🎙️</div>
                <h3 className="text-2xl font-bold text-indigo-800 mb-4">Dublagem</h3>
                <p className="text-gray-700 leading-relaxed">
                  Apresentações de dublagem e locução, mostrando as técnicas vocais 
                  e interpretativas desenvolvidas pelos alunos desta modalidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivos do Festival */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Objetivos do Festival
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Promover a Criação</h3>
              <p className="text-gray-600">Incentivar a criação artística e o desenvolvimento da criatividade</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Reconhecer Talentos</h3>
              <p className="text-gray-600">Valorizar e reconhecer o talento dos nossos estudantes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Incentivar Continuidade</h3>
              <p className="text-gray-600">Motivar a continuidade dos estudos artísticos</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Desenvolver Habilidades</h3>
              <p className="text-gray-600">Promover o desenvolvimento das habilidades artísticas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Faça Parte da Próxima Edição
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Inscreva-se em nossos cursos e participe do próximo Festival Prêmio Mizinho. 
            Mostre seu talento e celebre a arte conosco!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Inscreva-se nos Cursos
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
              Saiba Mais
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Premiacoes;

