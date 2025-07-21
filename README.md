# 📘 Pokédex React

Uma Pokédex desenvolvida com React, integrando a PokéAPI, com alternância de tema claro/escuro estilizado, busca por nome e filtro por tipo. O projeto é responsivo, utiliza boas práticas de componentização e inclui testes automatizados com Jest e Testing Library.

> Criado com foco em aprendizado, qualidade de código e exibição em portfólio front-end.

---

## 🔍 Demonstração

<img src="../pokedex-project/src/images/pokedex-light.png" alt="layout no modo claro"/>
<img src="../pokedex-project/src/images/pokedex-dark.png" alt="layout no modo escuro"/>
---

## 🛠️ Tecnologias Utilizadas

- **ReactJS**
- **React Router DOM**
- **Styled-Components**
- **Axios**
- **Jest + Testing Library**
- **PokéAPI**
- **JavaScript ES6+**

---

## 📁 Estrutura de Pastas

```bash
src
├── __tests__                   # Testes automatizados
│   ├── Details.test.js
│   ├── Home.test.js
│   ├── HomeFilter.test.js
│   ├── HomeFilterType.test.js
│   └── HomeLoadMore.test.js
├── assets                      # Imagens e ícones
├── components
│   ├── Button-loading
│   │   └── button-load.jsx     # Botão "Carregar mais"
│   ├── Layout
│   │   ├── card.jsx            # Cards de Pokémon
│   │   ├── layout.jsx          # Container padrão
│   │   └── style-details.jsx   # Estilização da página de detalhes
│   ├── Theme-toggler
│   │   ├── theme-toggler.jsx   # Contexto do tema
│   │   └── theme-button.jsx    # Botão de troca de tema
│   ├── components-api.jsx      # Consumo da PokéAPI
│   └── filter.jsx              # Filtros por nome e tipo
├── Images
│   ├── pokedex-dark.jpg
│   ├── pokedex-light.jpg
├── Pages
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx

```

---

## 🌗 Tema Personalizado

O projeto conta com um **modo escuro exclusivo**, com fundo em `#0a192f` (azul escuro profundo) para dar personalidade e identidade visual à Pokédex. O `ThemeProvider` do `styled-components` alterna entre o tema claro e escuro com base no contexto global.

---

## ✅ Funcionalidades

- ✅ Listagem paginada de Pokémons
- ✅ Filtro por nome (busca diretamente na API)
- ✅ Filtro por tipo (dinâmico, com recarregamento)
- ✅ Página de detalhes com informações, habilidades e descrição
- ✅ Modo escuro estilizado manualmente
- ✅ Responsividade em múltiplos dispositivos
- ✅ Testes automatizados com cobertura de filtros, listagem e detalhes

---

## ⚙️ Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/pamella-binotto/Pokedex-React.git
cd pokedex-react
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute o projeto

```bash
npm run dev
```

> O projeto será iniciado em `http://localhost:5173` (via Vite).

---

## 🧪 Executar os Testes

```bash
npm test
```

---

## 📦 Dependências Essenciais

Instale os seguintes pacotes se necessário:

```bash
npm install react-router-dom styled-components axios
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom
```

> Atenção: a partir do Jest 28, o ambiente `jest-environment-jsdom` deve ser instalado separadamente.

---

## ✨ Desenvolvedora

**Pamella Binotto**  
👩‍💻 Desenvolvedora Front-End em formação e empreendedora  
📍 Florianópolis, SC  
