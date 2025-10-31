# DESAFIO QA BEEDOO 2025 - Análise Full Stack de Qualidade

## Visão Geral do Projeto

Este projeto tem como objetivo principal a **validação da qualidade e confiabilidade** do módulo de cadastro e gerenciamento de cursos (AUT: [https://creative-sherbet-a51eac.netlify.app/](https://creative-sherbet-a51eac.netlify.app/)).

A estratégia foi dividida em três pilares, garantindo uma cobertura completa:

1.  **Documentação Manual/Funcional** (Casos de Teste, US e Relatórios de Bug) - _Foco da entrega do desafio._
2.  **Testes Automatizados (Cypress)** - _Prova de conceito e validação de regras de negócio._
3.  **Testes de Performance e Acessibilidade (K6/Lighthouse)** - _Análise técnica da qualidade._

---

## Documentação Requerida: Relatório Funcional e Decisões

### 1. Matriz de Casos de Teste e Rastreabilidade (Google Sheets)

Todos os cenários e Casos de Teste (sucesso e erro), escritos em **Passo-a-Passo** e abrangendo as USs de Cadastro, Listagem e Exclusão, estão documentados nesta planilha.

**PLANILHA COM CASOS DE TESTE (Google Sheets):**
(https://docs.google.com/spreadsheets/d/1YDmSwZC7jOng7RAb_5HaNtHrF9VIssliTbjN7NgMI0w/edit?usp=sharing)

### 2. Documentação e Decisões (Google Docs)

Este documento contém o detalhamento das User Stories (USs), o Plano de Teste Exploratório, **Relatórios de Bug (com sugestões de melhoria)** e a justificativa das decisões.

**RELATÓRIO COMPLETO E USER STORIES:**
(https://docs.google.com/document/d/1lFqjcxJv6mKFpXeEqrj5n0yJ09exC-2ge6gOjhncHfs/edit?tab=t.0)

**EVIDENCIA EM PDF RELATORIO Lighthouse/AXE:**
(https://drive.google.com/file/d/1QDOa4b5NjamIWYD3dICdRV9T0r1wbLVP/view?usp=sharing)

### 3. Justificativa das Decisões (Requisito: Como foram criadas as USs)

As USs foram definidas por **Engenharia Reversa** das funcionalidades, com foco na **Integridade de Dados e UX**. A decisão primária foi a criação de **CTs de Erro (Negativos)** para provar a hipótese de falha na aplicação. A alta incidência de bugs de validação forçou o foco em cenários que expõem:

- **Quebra de Regra de Negócio:** Permitir datas ilógicas ou cadastro sem campos essenciais (Status: FALHOU).
- **Problemas de UX:** Falta de confirmação na exclusão (CT-003.02) e feedback incorreto (mensagem de exclusão após cadastro).

---

## Testes Técnicos e Automação (Diferencial)

Para complementar a análise, foram utilizados os seguintes testes técnicos:

| Ferramenta     | Objetivo                                                            | Resultado                                                     |
| :------------- | :------------------------------------------------------------------ | :------------------------------------------------------------ |
| **Cypress**    | Validação funcional automatizada de campos e fluxos críticos.       | Identificou a falha de validação de campos obrigatórios.      |
| **Grafana K6** | Teste de carga com **10 VUs / 30s** para simular acesso simultâneo. | Tempo médio de resposta rápido, mas confirma a necessidade de |

otimização de ativos. |
| **Lighthouse/AXE** |Análise de Performance e Acessibilidade. |Pontuação de **89/100** em Acessibilidade (necessita ajuste de contraste e _meta viewport_). |

### Estrutura e Execução dos Testes Automatizados

O código dos testes automatizados e de performance está estruturado neste repositório.

**Como Executar:**

1.  `npm install`
2.  `npx cypress open` (Para testes funcionais)
3.  `k6 run k6/performance-test.js` (Para teste de carga)

---

## Evidências de Teste (MP4)

Todos os testes funcionais, incluindo a reprodução dos bugs documentados na planilha, foram gravados.

**PASTA COM EVIDÊNCIAS (Google Drive):**
(https://drive.google.com/file/d/1SYUdrpBOxLwV3sx9AvFkPpN7jj3l47Be/view?usp=sharing)

---

Autor
Douglas Willian
_Quality Assurance (QAjr) | Automação | Testes Exploratórios_
