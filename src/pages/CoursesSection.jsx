import React from 'react';
import { Clock, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CourseCard = ({ course }) => {
  const getCategoryColor = (category) => {
    const colors = {
      'Teatro': 'from-purple-500 to-purple-700',
      'Música': 'from-blue-500 to-blue-700',
      'Dança': 'from-pink-500 to-pink-700',
      'Desenho': 'from-orange-500 to-orange-700',
      'Dublagem': 'from-green-500 to-green-700'
    };
    return colors[category] || 'from-gray-500 to-gray-700';
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'Teatro': '🎭',
      'Música': '🎵',
      'Dança': '💃',
      'Desenho': '🎨',
      'Dublagem': '🎤'
    };
    return icons[category] || '🎨';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      <div className={`h-2 bg-gradient-to-r ${getCategoryColor(course.category)}`}></div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl">{getCategoryIcon(course.category)}</span>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(course.category)}`}>
            {course.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.ageGroup}</p>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{course.day}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span>{course.time}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="w-4 h-4 mr-2" />
            <span className="text-green-600 font-semibold">Vagas Disponíveis</span>
          </div>
        </div>
        
        <Button className={`w-full bg-gradient-to-r ${getCategoryColor(course.category)} hover:opacity-90 text-white`}>
          Tenho Interesse
        </Button>
      </div>
    </div>
  );
};

const CoursesSection = () => {
  const courses = [
    // Teatro
    {
      id: 1,
      title: "Teatro - Infantil",
      category: "Teatro",
      ageGroup: "(7 a 11 anos)",
      day: "Quartas",
      time: "18h às 19h30"
    },
    {
      id: 2,
      title: "Teatro - Infantil II",
      category: "Teatro",
      ageGroup: "(7 a 11 anos)",
      day: "Quintas",
      time: "18h às 19h30"
    },
    {
      id: 3,
      title: "Teatro - Infantil III",
      category: "Teatro",
      ageGroup: "(7 a 11 anos)",
      day: "Sábados",
      time: "13h30 às 15h"
    },
    {
      id: 4,
      title: "Teatro - Pré Adolescente",
      category: "Teatro",
      ageGroup: "(11 a 14 anos)",
      day: "Sábados",
      time: "15h às 16h30"
    },
    {
      id: 5,
      title: "Teatro - Adolescente",
      category: "Teatro",
      ageGroup: "(14 a 20 anos)",
      day: "Terças",
      time: "19h às 20h30"
    },
    {
      id: 6,
      title: "Teatro - Adulto",
      category: "Teatro",
      ageGroup: "(a partir de 21 anos)",
      day: "Segundas",
      time: "19h às 21h"
    },
    {
      id: 7,
      title: "Musicalização Infantil + Teatro Baby",
      category: "Teatro",
      ageGroup: "(3 a 6 anos)",
      day: "Segundas",
      time: "18h às 19h"
    },
    
    // Dublagem
    {
      id: 8,
      title: "Dublagem",
      category: "Dublagem",
      ageGroup: "(a partir de 12 anos)",
      day: "Sábados",
      time: "10h às 12h ou 12h30 às 14h30"
    },
    
    // Música
    {
      id: 9,
      title: "Canto Coletivo - Infantil",
      category: "Música",
      ageGroup: "",
      day: "Terças ou Quintas",
      time: "19h às 20h"
    },
    {
      id: 10,
      title: "Canto Coletivo - Jovem",
      category: "Música",
      ageGroup: "",
      day: "Quartas às 17h ou Quintas às 18h",
      time: ""
    },
    {
      id: 11,
      title: "Canto Coletivo - Adulto",
      category: "Música",
      ageGroup: "",
      day: "Quintas",
      time: "19h às 20h ou 20h às 21h"
    },
    {
      id: 12,
      title: "Bateria",
      category: "Música",
      ageGroup: "(aulas individuais - a partir de 7 anos)",
      day: "Terças, Quintas ou Sextas",
      time: "Consulte horários disponíveis"
    },
    {
      id: 13,
      title: "Piano ou Teclado",
      category: "Música",
      ageGroup: "(coletivo ou individual)",
      day: "Diversas turmas disponíveis",
      time: "Consulte para maiores informações"
    },
    {
      id: 14,
      title: "Violão",
      category: "Música",
      ageGroup: "(coletivo ou individual)",
      day: "Diversas turmas disponíveis",
      time: "Consulte para maiores informações"
    },
    {
      id: 15,
      title: "Demais Instrumentos Musicais",
      category: "Música",
      ageGroup: "(Guitarra, Flauta, Violino, Baixo, Ukulele)",
      day: "Diversas turmas disponíveis",
      time: "Consulte para maiores informações"
    },
    
    // Dança
    {
      id: 16,
      title: "Ballet Baby",
      category: "Dança",
      ageGroup: "(3 a 6 anos)",
      day: "Terças e Quintas",
      time: "18h às 18h50"
    },
    {
      id: 17,
      title: "Ballet Infantil",
      category: "Dança",
      ageGroup: "(7 a 10 anos)",
      day: "Terças e Quintas",
      time: "19h às 19h50"
    },
    {
      id: 18,
      title: "Ballet Adulto",
      category: "Dança",
      ageGroup: "",
      day: "Terças e Quintas",
      time: "20h às 21h"
    },
    {
      id: 19,
      title: "Jazz Livre",
      category: "Dança",
      ageGroup: "",
      day: "Terças e Quintas",
      time: "17h às 17h50"
    },
    {
      id: 20,
      title: "Jazz Adulto",
      category: "Dança",
      ageGroup: "",
      day: "Terças e Quintas",
      time: "15h30 às 16h30"
    },
    {
      id: 21,
      title: "Hip Hop (Dança de Rua)",
      category: "Dança",
      ageGroup: "",
      day: "Terças e Quintas",
      time: "16h às 17h"
    },
    {
      id: 22,
      title: "Dança Contemporânea",
      category: "Dança",
      ageGroup: "(Turma Jovem/Adulta)",
      day: "Sábados",
      time: "10h às 12h"
    },
    {
      id: 23,
      title: "Dança Livre - Jovem/Adulto",
      category: "Dança",
      ageGroup: "",
      day: "Terças e Quintas",
      time: "19h às 20h"
    },
    
    // Desenho
    {
      id: 24,
      title: "Desenho",
      category: "Desenho",
      ageGroup: "(Cartoon, Mangá, HQ, Realismo - a partir dos 7 anos)",
      day: "Segundas a Sábados",
      time: "Diversos horários disponíveis"
    }
  ];

  const categories = ['Todos', 'Teatro', 'Música', 'Dança', 'Desenho', 'Dublagem'];
  const [selectedCategory, setSelectedCategory] = React.useState('Todos');

  const filteredCourses = selectedCategory === 'Todos' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <section id="cursos" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossos Cursos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 mb-8">
            Descubra sua paixão artística com nossos cursos especializados
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Não encontrou o que procurava? Entre em contato conosco!
          </p>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg">
            Fale Conosco
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;

