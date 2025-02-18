describe("Quiz test", () => {
   beforeEach(() => {
    cy.visit('http://127.0.0.1:3001')
   })
});

it('Should start quiz when "start quiz" is clicked', () => {
   cy.get('button').contains('Start Quiz').click();
   cy.get('button').contains('1').should("be.visible");
})