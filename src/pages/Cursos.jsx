import React, { useState } from 'react';
import { Clock, Users, Calendar, Filter } from 'lucide-react';
import imgCursos from '../assets/cursos.jpg';

// Botão simples para exemplo (substitua pelo seu Button se desejar)
const Button = ({ className = '', children, ...props }) => (
  <button className={`rounded-lg font-bold py-3 px-6 transition-all duration-300 ${className}`} {...props}>
    {children}
  </button>
);

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

const CourseCard = ({ course }) => (
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

const courses = [
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
    title: "Violão Iniciante",
    category: "Música",
    ageGroup: "(8 a 12 anos)",
    day: "Terças e Quintas",
    time: "19h às 20h"
  },
  {
    id: 3,
    title: "Ballet Clássico",
    category: "Dança",
    ageGroup: "(4 a 16 anos)",
    day: "Segundas e Quartas",
    time: "17h às 18h30"
  },
  {
    id: 4,
    title: "Desenho Artístico",
    category: "Desenho",
    ageGroup: "(10 a 15 anos)",
    day: "Sábados",
    time: "9h às 11h"
  },
  {
    id: 5,
    title: "Dublagem Profissional",
    category: "Dublagem",
    ageGroup: "(14 anos acima)",
    day: "Domingos",
    time: "15h às 17h"
  },
  {
    id: 6,
    title: "Canto Popular",
    category: "Música",
    ageGroup: "(12 anos acima)",
    day: "Sextas",
    time: "18h às 19h"
  }
];

const categories = ['Todos', 'Teatro', 'Música', 'Dança', 'Desenho', 'Dublagem'];

const Cursos = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredCourses = selectedCategory === 'Todos'
    ? courses
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={imgCursos}
            alt="Cursos Paideia Artes"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.7) contrast(1.1)', mixBlendMode: 'multiply' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-purple-800/70 to-pink-800/80"></div>
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nossos <span className="text-teal-300">Cursos</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Descubra sua paixão artística com nossos cursos especializados para todas as idades
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-teal-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de Cursos */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((curso) => (
              <CourseCard key={curso.id} course={curso} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para Começar sua Jornada Artística?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Entre em contato conosco e descubra como podemos ajudar você a desenvolver seu talento
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105">
              Agendar Aula Experimental
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-teal-600 font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105">
              Falar com Consultor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cursos;

