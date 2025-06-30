# Paideia Artes - Site Oficial

Site oficial da escola de artes Paideia Artes, localizada na Zona Norte do Rio de Janeiro.

## 🎨 Sobre o Projeto

Este é um site multi-página desenvolvido em React que apresenta a escola de artes Paideia Artes, seus cursos, premiações e informações de contato. O site foi reestruturado a partir de uma landing page para um site completo com navegação entre páginas.

## 🌈 Tema de Cores

O site utiliza um tema de cores vibrante baseado em:
- **Ciano/Turquesa**: #00CED1, #1ABC9C
- **Roxo**: #9B59B6, #8E44AD, #BB6BD9
- **Coral/Vermelho**: #FF6B6B, #FF4444
- **Magenta/Rosa**: #E91E63, #F06292
- **Azul**: #3498DB, #2980B9

## 📱 Estrutura do Site

### Páginas Principais:
1. **Home** - Página inicial com seções:
   - Quem Somos
   - Conhece Nossa Escola
   - Galeria
   - Nossos Artistas

2. **Cursos** - Catálogo completo de cursos com filtros por categoria

3. **Premiações** - Histórico de prêmios e reconhecimentos

4. **Fale Conosco** - Formulário de contato e informações

### Navegação:
- Menu responsivo sem botão "Fale Conosco" (conforme solicitado)
- Links para todas as páginas no footer
- Navegação suave e intuitiva

## 🚀 Como Executar

### Pré-requisitos:
- Node.js 18+ instalado
- npm ou pnpm

### Instalação:
1. Clone ou baixe o projeto
2. Navegue até o diretório do projeto:
   ```bash
   cd paideia-artes-site
   ```

3. Instale as dependências:
   ```bash
   pnpm install
   # ou
   npm install
   ```

4. Execute o servidor de desenvolvimento:
   ```bash
   pnpm run dev
   # ou
   npm run dev
   ```

5. Acesse no navegador:
   ```
   http://localhost:5173
   ```

### Build para Produção:
```bash
pnpm run build
# ou
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework JavaScript
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **React Router DOM** - Roteamento entre páginas
- **Lucide React** - Ícones modernos
- **shadcn/ui** - Componentes UI de alta qualidade

## 📁 Estrutura de Arquivos

```
src/
├── components/          # Componentes React
│   ├── Navigation.jsx   # Barra de navegação
│   └── Footer.jsx       # Rodapé
├── pages/              # Páginas do site
│   ├── Home.jsx        # Página inicial
│   ├── Cursos.jsx      # Página de cursos
│   ├── Premiacoes.jsx  # Página de premiações
│   └── FaleConosco.jsx # Página de contato
├── App.jsx             # Componente principal com roteamento
├── App.css             # Estilos globais e tema de cores
├── index.css           # Estilos base
└── main.jsx            # Ponto de entrada
```

## 🎯 Características Principais

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Tema de Cores Personalizado**: Baseado na paleta fornecida
- **Navegação Intuitiva**: Menu fixo com indicação da página ativa
- **Animações Suaves**: Transições e efeitos hover
- **Formulário de Contato**: Funcional com validação
- **Galeria de Imagens**: Layout em grid responsivo
- **Cards Informativos**: Para cursos, professores e premiações

## 🎨 Diferenças das Páginas

- **Home**: Possui sombreamento intenso na seção hero para destaque
- **Outras Páginas**: Sombreamento reduzido nas imagens hero para melhor legibilidade

## 📞 Informações de Contato

- **Endereço**: Rua das Artes, 123 - Vila da Penha, Rio de Janeiro - RJ
- **Telefone**: (21) 99999-9999
- **E-mail**: contato@paideiaartes.com.br
- **Horário**: Segunda a Sábado, 8h às 22h

## 📝 Licença

Este projeto foi desenvolvido especificamente para a Paideia Artes. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para a Paideia Artes**

