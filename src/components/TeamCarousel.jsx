import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import team4 from '../assets/team4.jpg';
import team5 from '../assets/team5.jpg';
import team6 from '../assets/team6.jpg';

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const teamMembers = [
    { name: "Ana Silva", role: "Professora de Teatro", image: team1 },
    { name: "Carlos Santos", role: "Professor de Música", image: team2 },
    { name: "Maria Oliveira", role: "Professora de Dança", image: team3 },
    { name: "João Costa", role: "Professor de Desenho", image: team4 },
    { name: "Lucia Ferreira", role: "Professora de Dublagem", image: team5 },
    { name: "Pedro Almeida", role: "Coordenador Pedagógico", image: team6 }
  ];

  const updateCarousel = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((newIndex + teamMembers.length) % teamMembers.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  const getCardPosition = (index) => {
    const offset = (index - currentIndex + teamMembers.length) % teamMembers.length;
    
    if (offset === 0) return 'center';
    if (offset === 1) return 'right-1';
    if (offset === 2) return 'right-2';
    if (offset === teamMembers.length - 1) return 'left-1';
    if (offset === teamMembers.length - 2) return 'left-2';
    return 'hidden';
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      updateCarousel(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
      updateCarousel(currentIndex + 1);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <section id="equipe" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16 relative">
          <h2 className="text-7xl md:text-8xl font-black uppercase tracking-tight absolute top-0 left-1/2 transform -translate-x-1/2 pointer-events-none whitespace-nowrap opacity-10 text-purple-600">
            NOSSOS ARTISTAS
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative z-10 pt-8">
            Nossos Artistas
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-6xl mx-auto h-96 perspective-1000">
          {/* Navigation Arrows */}
          <button
            onClick={() => updateCarousel(currentIndex - 1)}
            className="absolute left-5 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-purple-600 bg-opacity-60 hover:bg-opacity-80 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => updateCarousel(currentIndex + 1)}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-purple-600 bg-opacity-60 hover:bg-opacity-80 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards */}
          <div className="relative w-full h-full flex justify-center items-center preserve-3d">
            {teamMembers.map((member, index) => {
              const position = getCardPosition(index);
              
              return (
                <div
                  key={index}
                  onClick={() => updateCarousel(index)}
                  className={`absolute w-72 h-80 bg-white rounded-2xl shadow-xl cursor-pointer transition-all duration-700 ease-out transform-gpu ${
                    position === 'center' 
                      ? 'z-10 scale-110 translate-z-0' 
                      : position === 'left-1'
                      ? 'z-5 scale-90 -translate-x-48 translate-z-minus-100 grayscale opacity-90'
                      : position === 'left-2'
                      ? 'z-1 scale-80 -translate-x-96 translate-z-minus-300 grayscale opacity-70'
                      : position === 'right-1'
                      ? 'z-5 scale-90 translate-x-48 translate-z-minus-100 grayscale opacity-90'
                      : position === 'right-2'
                      ? 'z-1 scale-80 translate-x-96 translate-z-minus-300 grayscale opacity-70'
                      : 'opacity-0 pointer-events-none'
                  }`}
                  style={{
                    transform: position === 'center' 
                      ? 'scale(1.1) translateZ(0)' 
                      : position === 'left-1'
                      ? 'translateX(-200px) scale(0.9) translateZ(-100px)'
                      : position === 'left-2'
                      ? 'translateX(-400px) scale(0.8) translateZ(-300px)'
                      : position === 'right-1'
                      ? 'translateX(200px) scale(0.9) translateZ(-100px)'
                      : position === 'right-2'
                      ? 'translateX(400px) scale(0.8) translateZ(-300px)'
                      : undefined
                  }}
                >
                  <div className="w-full h-full overflow-hidden rounded-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        position === 'center' ? 'filter-none' : 'grayscale'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Member Info */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold text-purple-600 mb-2 relative inline-block">
            {teamMembers[currentIndex].name}
            <span className="absolute -left-24 top-1/2 w-20 h-0.5 bg-purple-600"></span>
            <span className="absolute -right-24 top-1/2 w-20 h-0.5 bg-purple-600"></span>
          </h3>
          <p className="text-xl text-gray-600 uppercase tracking-wider font-medium opacity-80">
            {teamMembers[currentIndex].role}
          </p>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-12">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => updateCarousel(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-purple-600 scale-125'
                  : 'bg-purple-200 hover:bg-purple-400'
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .translate-z-0 {
          transform: translateZ(0);
        }
        .translate-z-minus-100 {
          transform: translateZ(-100px);
        }
        .translate-z-minus-300 {
          transform: translateZ(-300px);
        }
      `}</style>
    </section>
  );
};

export default TeamCarousel;

