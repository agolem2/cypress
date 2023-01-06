describe('HomeGain Value Test', () => {
  it('Visits the HomeGain Value Page', () => {
      cy.visit('http://www.homegain.com')

      cy.contains('Connect with top local real estate agents')
  })
})