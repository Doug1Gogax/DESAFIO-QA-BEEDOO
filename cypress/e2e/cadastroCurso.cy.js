import "../support/commands";

const CADASTRO_LINK = "a:contains('CURSO CADASTRAR')";

const SUBMIT_BUTTON = "button:contains('CURSO CADASTRAR')";

function irParaCadastro() {
  cy.get(CADASTRO_LINK).click();
  cy.contains("Cadastro de curso").should("be.visible");
}

const DADOS_VALIDOS = {
  nome: "QA Automação Profissional",
  descricao: "Curso completo de testes e automação.",
  instrutor: "Instrutor Teste",
  urlImagem: "https://exemplo.com/imagem.png",
  dataInicio: "01/01/2026",
  dataFim: "31/12/2026",
  numeroVagas: "1",
  tipoCurso: "Presencial",
};

function preencherFormulario(dados) {
  cy.get("input[id*='f_text']").eq(0).clear().type(dados.nome);

  cy.get("textarea[id*='f_text']").clear().type(dados.descricao);

  cy.get("input[id*='f_text']").eq(1).clear().type(dados.instrutor);

  cy.get("input[id*='f_text']").eq(2).clear().type(dados.urlImagem);

  cy.get("input[id*='f_date']").eq(0).clear().type(dados.dataInicio);

  cy.get("input[id*='f_date']").eq(1).clear().type(dados.dataFim);

  cy.get("input[id*='f_number']").clear().type(dados.numeroVagas);

  cy.get("select[id*='f_select']").select(dados.tipoCurso);
}

describe("Validação de Cadastro de Curso", () => {
  beforeEach(() => {
    cy.visit("/");
    irParaCadastro();
  });

  it("Não deve permitir cadastro com campos vazios", () => {
    cy.get(SUBMIT_BUTTON).click();

    cy.on("window:alert", (msg) => {
      expect(msg).to.contain("Preencha todos os campos");
    });
  });

  it("Deve cadastrar curso com dados válidos", () => {
    preencherFormulario(DADOS_VALIDOS);
    cy.get(SUBMIT_BUTTON).click();

    cy.contains("Lista de cursos").should("be.visible");
    cy.contains(DADOS_VALIDOS.nome).should("be.visible");
  });
});

describe("Validações de Usabilidade e Regras de Negócio", () => {
  beforeEach(() => {
    cy.visit("/");
    irParaCadastro();
  });

  it("Não deve permitir mais de 1 vaga por curso (Regra de Negócio)", () => {
    const dados = { ...DADOS_VALIDOS, numeroVagas: "2" };
    preencherFormulario(dados);

    cy.get(SUBMIT_BUTTON).click();

    cy.on("window:alert", (msg) => {
      expect(msg).to.contain("Somente 1 vaga por curso");
    });
  });

  it("Data de fim deve ser posterior à data de início (Validação de Datas)", () => {
    const dados = {
      ...DADOS_VALIDOS,
      dataInicio: "10/10/2026",
      dataFim: "10/10/2025",
    };
    preencherFormulario(dados);

    cy.get(SUBMIT_BUTTON).click();

    cy.on("window:alert", (msg) => {
      expect(msg).to.contain("Data de fim deve ser posterior à data de início");
    });
  });
});
