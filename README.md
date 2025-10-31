# Desafio QA Beedoo

Este projeto contém testes automatizados usando Cypress para testes E2E e K6 para testes de performance.

## 🛠️ Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM ou Yarn
- K6 instalado globalmente

## 📦 Instalação

1. Clone o repositório:
\`\`\`bash
git clone [URL_DO_REPOSITORIO]
cd desafio-beedoo-tests
\`\`\`

2. Instale as dependências:
\`\`\`bash
npm install
\`\`\`

## 🚀 Executando os Testes

### Testes E2E com Cypress

Para abrir o Cypress em modo interativo:
\`\`\`bash
npm run test:cypress
\`\`\`

Para executar os testes em modo headless:
\`\`\`bash
npm run test:cypress:headless
\`\`\`

### Testes de Performance com K6

Para executar os testes de performance:
\`\`\`bash
npm run test:k6
\`\`\`

## 📁 Estrutura do Projeto

\`\`\`
desafio-beedoo-tests/
│
├── cypress/
│ ├── e2e/
│ │ ├── cadastroCurso.cy.js      # Testes de cadastro de cursos
│ │ └── validacoesUsabilidade.cy.js # Testes de usabilidade
│ └── support/
│     └── commands.js            # Comandos customizados do Cypress
│
├── k6/
│ └── performance-test.js        # Testes de performance
│
├── cypress.config.js            # Configuração do Cypress
├── package.json
└── README.md
\`\`\`

## 📋 Casos de Teste

### Cypress (E2E)
- Validação de campos obrigatórios
- Cadastro de curso com dados válidos
- Validação de número de vagas
- Validação do ano de conclusão
- Testes de usabilidade e interface
- Validação de mensagens de sucesso e erro

### K6 (Performance)
- Teste de carga com rampa de usuários
- Validação de tempo de resposta
- Verificação de taxa de erro
- Teste de estresse da aplicação

## 📊 Métricas de Performance

Os testes de performance com K6 validam:
- 95% das requisições devem completar em menos de 500ms
- Taxa de erro menor que 1%
- Capacidade de lidar com até 20 usuários simultâneos