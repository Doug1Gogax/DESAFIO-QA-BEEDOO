import "../support/commands";


const CADASTRO_LINK = "a:contains('CURSO CADASTRAR')";


const SUBMIT_BUTTON = "button:contains('CURSO CADASTRAR')";


const DADOS_BASE_VALIDOS = {
  nome: "Curso de Teste",
  descricao: "Descrição padrão para teste.",
  instrutor: "QA Automatizado",
  urlImagem: "https://exemplo.com/imagem.png",
  dataInicio: "01/01/2026", 
  dataFim: "31/12/2026",
  numeroVagas: "1", 
  tipoCurso: "Presencial",
};


function irParaCadastro() {
  cy.get(CADASTRO_LINK).click();
  cy.contains("Cadastro de curso").should("be.visible");
}


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


describe("Validações de Interface e Usabilidade", () => {
  beforeEach(() => {
    cy.visit("/");
    irParaCadastro(); 
  });

  it("Deve exibir mensagem de sucesso ao cadastrar curso válido", () => {
    
    preencherFormulario(DADOS_BASE_VALIDOS);

    cy.get(SUBMIT_BUTTON).click();

    
    cy.contains(DADOS_BASE_VALIDOS.nome).should("be.visible");
    
    
  });

  it("Deve validar formato do campo data (anteriormente 'Ano de conclusão')", () => {
    
    const dados = { ...DADOS_BASE_VALIDOS, dataInicio: "abc" }; 
    preencherFormulario(dados);

    cy.get(SUBMIT_BUTTON).click();

    cy.on("window:alert", (msg) => {
      
      expect(msg).to.contain("Data deve estar no formato dd/mm/aaaa");
    });
  });

  it("Deve limpar formulário após cadastro bem-sucedido", () => {
    preencherFormulario(DADOS_BASE_VALIDOS);
    cy.get(SUBMIT_BUTTON).click();

        
    irParaCadastro();

    
    cy.get("input[id*='f_text']").eq(0).should("have.value", "");
    cy.get("input[id*='f_date']").eq(0).should("have.value", "");
    cy.get("input[id*='f_number']").should("have.value", "");
    
  });

  it("Deve exibir lista de cursos cadastrados", () => {
    const curso = { ...DADOS_BASE_VALIDOS, nome: "Curso Novo na Lista" };

    
    preencherFormulario(curso);
    cy.get(SUBMIT_BUTTON).click();

    
    cy.contains(curso.nome).should("be.visible");
    cy.contains(curso.dataFim.substring(6)).should("be.visible"); // Verifica o ano
    cy.contains(curso.numeroVagas).should("be.visible");
    
    
  });
});
