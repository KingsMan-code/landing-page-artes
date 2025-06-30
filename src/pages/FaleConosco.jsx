import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, MessageCircle } from 'lucide-react';
import imgQuemSomos from '../assets/quemsomos.jpg'; // Imagem de fundo para a seção Fale Conosco

const FaleConosco = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio do formulário
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: ''
    });
  };

  const contatos = [
    {
      icone: Phone,
      titulo: "Telefone",
      info: "(21) 99999-9999",
      descricao: "Segunda a Sexta, 9h às 18h"
    },
    {
      icone: Mail,
      titulo: "E-mail",
      info: "contato@paideiaartes.com.br",
      descricao: "Respondemos em até 24h"
    },
    {
      icone: MapPin,
      titulo: "Endereço",
      info: "Rua das Artes, 123 - Vila da Penha",
      descricao: "Rio de Janeiro - RJ"
    },
    {
      icone: Clock,
      titulo: "Horário de Funcionamento",
      info: "Segunda a Sábado",
      descricao: "8h às 22h"
    }
  ];

  const redesSociais = [
    { icone: Instagram, nome: "Instagram", link: "#", cor: "from-pink-500 to-purple-500" },
    { icone: Facebook, nome: "Facebook", link: "#", cor: "from-blue-600 to-blue-700" },
    { icone: MessageCircle, nome: "WhatsApp", link: "#", cor: "from-green-500 to-green-600" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={imgQuemSomos}  
            alt="Fale Conosco - Paideia Artes" 
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.7)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/30 to-purple-600/30"></div>
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Fale <span className="text-teal-300">Conosco</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Estamos aqui para ajudar você a dar o primeiro passo na sua jornada artística
          </p>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Entre em <span className="bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">Contato</span>
            </h2>
            <p className="text-xl text-gray-600">
              Escolha a forma mais conveniente para falar conosco
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contatos.map((contato, index) => {
              const IconeComponent = contato.icone;
              return (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconeComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{contato.titulo}</h3>
                  <p className="text-teal-600 font-semibold mb-1">{contato.info}</p>
                  <p className="text-gray-600 text-sm">{contato.descricao}</p>
                </div>
              );
            })}
          </div>

          {/* Redes Sociais */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Siga-nos nas Redes Sociais</h3>
            <div className="flex justify-center space-x-6">
              {redesSociais.map((rede, index) => {
                const IconeComponent = rede.icone;
                return (
                  <a
                    key={index}
                    href={rede.link}
                    className={`w-12 h-12 bg-gradient-to-r ${rede.cor} rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg`}
                  >
                    <IconeComponent className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Envie sua <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Mensagem</span>
            </h2>
            <p className="text-xl text-gray-600">
              Preencha o formulário abaixo e entraremos em contato em breve
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                    placeholder="(21) 99999-9999"
                  />
                </div>
                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-2">
                    Assunto *
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="informacoes-cursos">Informações sobre Cursos</option>
                    <option value="matricula">Matrícula</option>
                    <option value="aula-experimental">Aula Experimental</option>
                    <option value="trabalhe-conosco">Trabalhe Conosco</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Conte-nos como podemos ajudar você..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Mapa e Localização */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossa <span className="bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">Localização</span>
            </h2>
            <p className="text-xl text-gray-600">
              Venha nos visitar e conheça nossa estrutura
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-teal-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Como Chegar</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-teal-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Endereço:</p>
                    <p className="text-gray-600">Rua das Artes, 123 - Vila da Penha<br />Rio de Janeiro - RJ, CEP: 21111-000</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Horário de Funcionamento:</p>
                    <p className="text-gray-600">Segunda a Sexta: 8h às 22h<br />Sábado: 8h às 18h<br />Domingo: Fechado</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-3">Transporte Público:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Ônibus: Linhas 123, 456, 789</li>
                  <li>• Metrô: Estação Vila da Penha (10 min a pé)</li>
                  <li>• BRT: Estação Central (5 min a pé)</li>
                </ul>
              </div>
            </div>

            <div className="h-96 bg-gray-200 rounded-2xl flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg font-medium">Mapa Interativo</p>
                <p className="text-sm">Integração com Google Maps</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaleConosco;

