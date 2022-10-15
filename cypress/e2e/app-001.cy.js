//app-001 occurs when you click through the calculator once then once it resets to am
//you switch it back to pm and change no other values and the times will double almost in count
before(() => {

  cy.visit('https://shino.de/parkcalc/')

})
describe('app-001', () => {
  it('shows behaviour of app-001', () => {
    cy.get('#ParkingLot').select('Valet Parking')
    cy.get('#StartingDate').clear().type('12/01/2022')
    cy.get('#StartingTime').clear().type('1:00')
    cy.get(':nth-child(2) > :nth-child(2) > [value="PM"]').click()
    cy.get('#LeavingDate').clear().type('12/01/2022')
    cy.get('#LeavingTime').clear().type('2:00')
    cy.get(':nth-child(3) > :nth-child(2) > [value="PM"]').click()
    cy.get('[type="submit"]').click()
    cy.get(':nth-child(2) > :nth-child(2) > [value="PM"]').click()
    cy.get(':nth-child(3) > :nth-child(2) > [value="PM"]').click()
    cy.get('[type="submit"]').click()
    cy.get('#StartingTime').contains('13:00')
    cy.get('#LeavingTime').contains('14:00')
  })
})