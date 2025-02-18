
import Quiz from '../../client/src/components/Quiz'

describe("<Quiz />", () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: "GET",
        url: "/api.questions/random",
      },
      {
        fixture: "questions.json",
        statusCode: 200,
      }
    );
  });

  it("renders", () => {
    cy.mount(<Quiz />);
  });
  /*it('mounts and shows "start quiz" button', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').should("be visible")
  });
  */
  it('should display the first question when "start quiz" is clicked', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
  })
});
