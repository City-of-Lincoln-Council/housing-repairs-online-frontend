describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('displays default text', () => {
    cy.contains('Learn React')

  })
})
