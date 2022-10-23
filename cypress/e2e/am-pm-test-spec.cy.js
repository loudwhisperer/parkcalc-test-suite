//In function setAmPm() of the datetimepicker.js it specifies if you pick a time like 11 am it should automatically select PM for any time after 11:59 AM
//Here we expect when picking 11 am and 12 that the radio button selection for AM and PM should switch to PM at on (':nth-child(3) > :nth-child(2)')

before(() => {

  cy.visit('https://shino.de/parkcalc/')

})
describe('runs through the parking lot options', () => {
  it('tests Valet Parking', () => {
    cy.get('#ParkingLot').select('Valet Parking')
    cy.get('#StartingDate').clear().type('12/01/2022')
    cy.get('#StartingTime').clear().type('11:00')
    cy.get(':nth-child(2) > :nth-child(2) > [value="AM"]').click()
    cy.get('#LeavingDate').clear().type('12/01/2022')
    cy.get('#LeavingTime').clear().type('12:00')
    cy.get(':nth-child(3) > :nth-child(2) > [value="PM"]')
    cy.get('[type="submit"]').click()
    cy.get('.SubHead > b').contains('$ 12.00')
    cy.get('.BodyCopy > b').contains('(0 Days, 1 Hours, 0 Minutes)')
  })
})