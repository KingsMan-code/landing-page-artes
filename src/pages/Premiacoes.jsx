import { Trophy, Star, Award, Calendar, Users, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import imgPremiacoes from '../assets/premiacoes.jpg'; // Imagem de fundo para a seção Premiações

// Hook para animar contadores
function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(interval);
  }, [end, duration]);
  return count;
}

const Premiacoes = () => {
  const premios = [
    {
      ano: "2024",
      titulo: "Melhor Escola de Artes - Zona Norte",
      categoria: "Educação Artística",
      descricao: "Reconhecimento pela excelência no ensino artístico e formação de novos talentos.",
      imagem: "/premio-2024.jpg"
    },
    {
      ano: "2023",
      titulo: "Prêmio Mizinho - 1º Lugar Teatro Juvenil",
      categoria: "Teatro",
      descricao: "Nossa peça 'Sonhos de Papel' conquistou o primeiro lugar na categoria juvenil.",
      imagem: "/premio-mizinho-2023.jpg"
    },
    {
      ano: "2022",
      titulo: "Festival de Música Popular - Destaque",
      categoria: "Música",
      descricao: "Alunos do curso de canto receberam menção honrosa no festival regional.",
      imagem: "/premio-musica-2022.jpg"
    },
    {
      ano: "2021",
      titulo: "Mostra de Dança Contemporânea - 2º Lugar",
      categoria: "Dança",
      descricao: "Coreografia 'Movimentos da Alma' ficou em segundo lugar na mostra estadual.",
      imagem: "/premio-danca-2021.jpg"
    }
  ];

  const festivais = [
    {
      nome: "Festival Prêmio Mizinho",
      descricao: "Festival anual em homenagem ao fundador Almir Rodrigues (Mizinho)",
      modalidades: ["Teatro", "Música", "Dança", "Desenho"],
      proximaEdicao: "Dezembro 2025",
      local: "Teatro Paideia Artes"
    }
  ];

  // Valores numéricos para animação
  const premiosCount = useCountUp(15);
  const alunosCount = useCountUp(200);
  const anosCount = useCountUp(8);
  const apresentacoesCount = useCountUp(50);

  // Estatísticas para a seção de conquistas
  const conquistas = [
    {
      icone: Trophy,
      numero: `${premiosCount}+`,
      descricao: "Prêmios Conquistados"
    },
    {
      icone: Users,
      numero: `${alunosCount}+`,
      descricao: "Alunos Premiados"
    },
    {
      icone: Calendar,
      numero: `${anosCount}+`,
      descricao: "Anos de Tradição"
    },
    {
      icone: Star,
      numero: `${apresentacoesCount}+`,
      descricao: "Apresentações Realizadas"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgPremiacoes}
            alt="Premiações Paideia Artes"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.7) contrast(1.1)', mixBlendMode: 'multiply' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-pink-800/70 to-yellow-800/80"></div>
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nossas <span className="text-yellow-300">Premiações</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Celebrando a excelência artística e o talento dos nossos alunos ao longo dos anos
          </p>
          {/* Contadores animados */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
            <div>
              <span className="block text-3xl md:text-4xl font-extrabold text-white">{premiosCount}+</span>
              <span className="block text-white/80 text-sm md:text-base">Prêmios Conquistados</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-extrabold text-white">{alunosCount}+</span>
              <span className="block text-white/80 text-sm md:text-base">Alunos Premiados</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-extrabold text-white">{anosCount}+</span>
              <span className="block text-white/80 text-sm md:text-base">Anos de Tradição</span>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-extrabold text-white">{apresentacoesCount}+</span>
              <span className="block text-white/80 text-sm md:text-base">Apresentações Realizadas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Estatísticas (remova esta seção se não quiser duplicar os números animados) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {conquistas.map((conquista, index) => {
              const IconeComponent = conquista.icone;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconeComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{conquista.numero}</div>
                  <div className="text-gray-600">{conquista.descricao}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Prêmios Recentes */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Prêmios <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Recentes</span>
            </h2>
            <p className="text-xl text-gray-600">
              Nossos últimos reconhecimentos e conquistas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {premios.map((premio, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={premio.imagem} 
                    alt={premio.titulo} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                    {premio.ano}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Award className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="text-sm font-medium text-purple-600">{premio.categoria}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{premio.titulo}</h3>
                  <p className="text-gray-600">{premio.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Festival Prêmio Mizinho */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Festival <span className="bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">Prêmio Mizinho</span>
            </h2>
            <p className="text-xl text-gray-600">
              Nosso festival anual em homenagem ao fundador Almir Rodrigues (Mizinho)
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Uma Tradição de Excelência
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  O Festival Prêmio Mizinho é realizado anualmente em dezembro, reunindo alunos de todas as modalidades 
                  artísticas da escola. É um momento de celebração, reconhecimento e inspiração para toda a comunidade 
                  artística da Paideia Artes.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">Próxima edição: Dezembro 2025</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">Local: Teatro Paideia Artes</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">Aberto para todos os alunos</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Modalidades do Festival</h4>
                <div className="grid grid-cols-2 gap-3">
                  {festivais[0].modalidades.map((modalidade, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Star className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-medium text-gray-900">{modalidade}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Seja Parte da Nossa História de Sucesso
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Junte-se à Paideia Artes e faça parte da próxima geração de artistas premiados
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105">
              Inscreva-se Agora
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105">
              Saiba Mais
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Premiacoes;

