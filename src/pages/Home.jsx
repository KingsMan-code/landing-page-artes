import { Link } from "react-router-dom";
import { ArrowRight, Users, Award, Camera, Star } from "lucide-react";
import imgInicio from "../assets/inicio.jpg";
import { useState, useEffect } from "react";
import TeamCarousel from "../components/TeamCarousel";
import PhotoGallery from "@/components/PhotoGalley";

// Hook para animar contadores
function useCountUp(end, duration = 4000) {
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

const Home = () => {
  // Números animados para "Alunos Formados" e "Anos de História"
  const alunosFormados = useCountUp(500);
  const anosHistoria = useCountUp(9);

  return (
    <div className="pt-16">
      {/* Seção Início */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={imgInicio}
            alt="Teatro Paideia Artes"
            className="w-full h-full object-cover"
            style={{
              filter: "brightness(0.4) contrast(1.1)",
              mixBlendMode: "multiply",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-purple-800/70 to-pink-800/80"></div>
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight mb-8">
            <span className="gradient-anim-text">PAIDEIA ARTES</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            "A arte diz o indizível, exprime o inexprimível, traduz o
            intraduzível." Leonardo da Vinci
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/cursos"
              className="bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 hover:scale-105"
            >
              Conheça Nossos Cursos
            </Link>
            <a
              href="#quem-somos"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </section>

      {/* Seção Quem Somos */}
      <section
        id="quem-somos"
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quem{" "}
              <span className="bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
                Somos
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma escola de artes dedicada a formar artistas completos e
              transformar vidas através da educação artística
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Nossa História
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fundada em 2016, a Paideia Artes nasceu do sonho de democratizar
                o acesso à educação artística na Zona Norte do Rio de Janeiro.
                Desde então, temos formado centenas de artistas em diversas
                modalidades, sempre com foco na excelência e na transformação
                social.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nossa metodologia única combina técnica, criatividade e
                desenvolvimento pessoal, preparando nossos alunos não apenas
                como artistas, mas como cidadãos conscientes e transformadores
                da sociedade.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-teal-600">
                    {alunosFormados}+
                  </div>
                  <div className="text-gray-600">Alunos Formados</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-purple-600">
                    {anosHistoria}
                  </div>
                  <div className="text-gray-600">Anos de História</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/quem-somos.jpg"
                alt="Equipe Paideia Artes"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Conhece Nossa Escola */}
      <section id="conhece-escola" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Conhece Nossa{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Escola
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Espaços modernos e equipados para proporcionar a melhor
              experiência de aprendizado artístico
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Salas de Aula Modernas
              </h3>
              <p className="text-gray-600">
                Ambientes climatizados e equipados com tecnologia de ponta para
                proporcionar o melhor aprendizado.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Teatro Próprio
              </h3>
              <p className="text-gray-600">
                Um teatro completo com 200 lugares para apresentações e eventos,
                proporcionando experiência real de palco.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mb-6">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Estúdio de Gravação
              </h3>
              <p className="text-gray-600">
                Estúdio profissional para gravação de música, dublagem e
                produção audiovisual.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <img
              src="/escola-1.jpg"
              alt="Instalações da escola"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <img
              src="/escola-2.jpg"
              alt="Teatro da escola"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Seção Galeria */}
      {/* <section id="galeria" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">Galeria</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Momentos especiais e conquistas dos nossos alunos ao longo dos anos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={`/galeria-${item}.jpg`} 
                  alt={`Galeria ${item}`} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold">Apresentação {item}</h4>
                    <p className="text-sm text-gray-200">Teatro Paideia Artes</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105">
              Ver Mais Fotos
            </button>
          </div>
        </div>
      </section> */}

      <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nossa Galeria
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-orange-400 mx-auto"></div>
          </div>

          <div className="flex justify-center">
            <PhotoGallery />
          </div>
        </div>
      </section>

      {/* Seção Nossos Artistas */}
      {/* <section id="nossos-artistas" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossos <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Artistas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professores experientes e apaixonados pela arte, dedicados a formar a próxima geração de artistas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Ana Silva", specialty: "Teatro", experience: "15 anos" },
              { name: "Carlos Santos", specialty: "Música", experience: "12 anos" },
              { name: "Maria Oliveira", specialty: "Dança", experience: "10 anos" },
              { name: "João Costa", specialty: "Desenho", experience: "8 anos" }
            ].map((artist, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={`/professor-${index + 1}.jpg`} 
                    alt={artist.name} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{artist.name}</h3>
                  <p className="text-teal-600 font-semibold mb-1">{artist.specialty}</p>
                  <p className="text-gray-600 text-sm mb-4">{artist.experience} de experiência</p>
                  <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Interessado em fazer parte da nossa equipe?
            </p>
            <Link 
              to="/fale-conosco"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105"
            >
              Entre em Contato
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section> */}
      <TeamCarousel />
    </div>
  );
};

export default Home;
