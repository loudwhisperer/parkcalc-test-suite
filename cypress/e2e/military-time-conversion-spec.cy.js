// This will test if the values in starting time and leaving time are converted to military or 24 hour format after the calculation is run
before(() => {

  cy.visit('https://shino.de/parkcalc/')

})
describe('it checks that the times are converted to 24 hour format after the calculation is run', () => {
  it('tests Valet Parking', () => {
    cy.get('#ParkingLot').select('Valet Parking')
    cy.get('#StartingDate').clear().type('12/01/2022')
    cy.get('#StartingTime').clear().type('1:00')
    cy.get(':nth-child(2) > :nth-child(2) > [value="PM"]').click()
    cy.get('#LeavingDate').clear().type('12/01/2022')
    cy.get('#LeavingTime').clear().type('2:00')
    cy.get(':nth-child(3) > :nth-child(2) > [value="PM"]').click()
    cy.get('[type="submit"]').click()
    cy.get('.SubHead > b').contains('$ 12.00')
    cy.get('.BodyCopy > b').contains('(0 Days, 1 Hours, 0 Minutes)')
    cy.get("#StartingTime").should("have.value", "13:00");
    cy.get("#LeavingTime").should("have.value", "14:00");
  })
})