
before(() => {

  cy.visit('https://shino.de/parkcalc/')

})
describe('runs through the parking lot options', () => {
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
  })
    it('tests Short-Term Parking', () => {
    cy.get('#ParkingLot').select('Short-Term Parking')
    cy.get('#StartingDate').clear().type('12/01/2022')
    cy.get('#StartingTime').clear().type('1:00')
    cy.get(':nth-child(2) > :nth-child(2) > [value="PM"]').click()
    cy.get('#LeavingDate').clear().type('12/01/2022')
    cy.get('#LeavingTime').clear().type('2:00')
    cy.get(':nth-child(3) > :nth-child(2) > [value="PM"]').click()
    cy.get('[type="submit"]').click()
    cy.get('.SubHead > b').contains('$ 2.00')
    cy.get('.BodyCopy > b').contains('(0 Days, 1 Hours, 0 Minutes)')
  })
  it('tests Economy Parking', () => {
    cy.get('#ParkingLot').select('Economy Parking')
    cy.get('#StartingDate').clear().type('12/01/2022')
    cy.get('#StartingTime').clear().type('1:00')
    cy.get(':nth-child(2) > :nth-child(2) > [value="PM"]').click()
    cy.get('#LeavingDate').clear().type('12/01/2022')
    cy.get('#LeavingTime').clear().type('2:00')
    cy.get(':nth-child(3) > :nth-child(2) > [value="PM"]').click()
    cy.get('[type="submit"]').click()
    cy.get('.SubHead > b').contains('$ 2.00')
    cy.get('.BodyCopy > b').contains('(0 Days, 1 Hours, 0 Minutes)')
  })
    it('tests Long-Term Garage Parking', () => {
    cy.get('#ParkingLot').select('Long-Term Garage Parking')
    cy.get('#StartingDate').clear().type('12/01/2022')
    cy.get('#StartingTime').clear().type('1:00')
    cy.get(':nth-child(2) > :nth-child(2) > [value="PM"]').click()
    cy.get('#LeavingDate').clear().type('12/01/2022')
    cy.get('#LeavingTime').clear().type('2:00')
    cy.get(':nth-child(3) > :nth-child(2) > [value="PM"]').click()
    cy.get('[type="submit"]').click()
    cy.get('.SubHead > b').contains('$ 2.00')
    cy.get('.BodyCopy > b').contains('(0 Days, 1 Hours, 0 Minutes)')
  })
    it('tests Long-Term Surface Parking', () => {
    cy.get('#ParkingLot').select('Long-Term Surface Parking')
    cy.get('#StartingDate').clear().type('12/01/2022')
    cy.get('#StartingTime').clear().type('1:00')
    cy.get(':nth-child(2) > :nth-child(2) > [value="PM"]').click()
    cy.get('#LeavingDate').clear().type('12/01/2022')
    cy.get('#LeavingTime').clear().type('2:00')
    cy.get(':nth-child(3) > :nth-child(2) > [value="PM"]').click()
    cy.get('[type="submit"]').click()
    cy.get('.SubHead > b').contains('$ 2.00')
    cy.get('.BodyCopy > b').contains('(0 Days, 1 Hours, 0 Minutes)')
  })
})