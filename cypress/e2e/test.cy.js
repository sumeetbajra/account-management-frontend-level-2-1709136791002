
describe('Interactive Quiz Game - Level 2', () => {
  it('Players can start a new game, answer questions, and see their score', () => {
    cy.visit('/')

    // Start a new game
    cy.get('[data-test="start-game"]').click()

    // Answer the first question correctly
    cy.get('[data-test="question"]').should('exist')
    cy.get('[data-test="option"]').then(options => {
      const correctOption = options.filter((i, el) => Cypress.$(el).data('correct'))
      if (correctOption.length > 0) {
        cy.wrap(correctOption).click({ multiple: true })
      } else {
        cy.get('[data-test="option"]').eq(0).click()
      }
    })
    cy.get('[data-test="next-question"]').click()

    // Answer the second question incorrectly
    cy.get('[data-test="option"]').then(options => {
      const incorrectOption = options.filter((i, el) => !Cypress.$(el).data('correct'))
      if (incorrectOption.length > 0) {
        cy.wrap(incorrectOption).click({ multiple: true })
      } else {
        cy.get('[data-test="option"]').eq(1).click()
      }
    })
    cy.get('[data-test="next-question"]').click()

    // Finish the game and check score
    cy.get('[data-test="finish-game"]').click()
    cy.get('[data-test="score"]').should('exist')
  })

  it('The game prevents proceeding without selecting an answer', () => {
    cy.visit('/')

    // Start a new game
    cy.get('[data-test="start-game"]').click()

    // Attempt to go to the next question without selecting an answer
    cy.get('[data-test="next-question"]').click()
    cy.get('[data-test="alert"]').should('contain', 'Please select an answer')

    // Select an answer and proceed
    cy.get('[data-test="option"]').eq(0).click()
    cy.get('[data-test="next-question"]').click()
    cy.get('[data-test="question"]').should('exist')
  })

  it('Players can retry the game after finishing', () => {
    cy.visit('/')

    // Start a new game
    cy.get('[data-test="start-game"]').click()
    cy.get('[data-test="option"]').eq(0).click()
    cy.get('[data-test="next-question"]').click()
    
    // Finish the game
    cy.get('[data-test="finish-game"]').click()
    
    // Retry the game
    cy.get('[data-test="retry-game"]').click()
    cy.get('[data-test="question"]').should('exist')
  })
})
