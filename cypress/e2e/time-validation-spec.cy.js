//Here we validate that each option the dropdown menu reflects the prices given for every time period a price is marked, there is a test for the set of prices defined below the
//calculator and just to double check prices given in 7 day increments will be checked at day 1, day 3 and day 7 as it is listed as free for the seventh day
beforeEach(() => {

  cy.visit('https://shino.de/parkcalc/')

})
describe('validates times with the given prices for each dropdown option', () => {
  //Valet Parking 
  it('tests Valet Parking prices by time for 5 hours', () => {
    cy.get('#ParkingLot').select('Valet Parking')
    cy.get('#StartingDate').clear().type('12/01/2022')
    cy.get('#StartingTime').clear().type('1:00')
    cy.get(':nth-child(2) > :nth-child(2) > [value="PM"]').click()
    cy.get('#LeavingDate').clear().type('12/01/2022')
    cy.get('#LeavingTime').clear().type('6:00')
    cy.get(':nth-child(3) > :nth-child(2) > [value="PM"]').click()
    cy.get('[type="submit"]').click()
    cy.get('.SubHead > b').contains('$ 12.00')
    cy.get('.BodyCopy > b').contains('(0 Days, 5 Hours, 0 Minutes)')
  })
  it('tests Valet Parking prices by time for 1 day', () => {
    cy.get('#ParkingLot').select('Valet Parking')
    cy.get('#StartingDate').clear().type('12/01/2022')
    cy.get('#StartingTime').clear().type('1:00')
    cy.get(':nth-child(2) > :nth-child(2) > [value="PM"]').click()
    cy.get('#LeavingDate').clear().type('12/02/2022')
    cy.get('#LeavingTime').clear().type('1:00')
    cy.get(':nth-child(3) > :nth-child(2) > [value="PM"]').click()
    cy.get('[type="submit"]').click()
    cy.get('.SubHead > b').contains('$ 18.00')
    cy.get('.BodyCopy > b').contains('(1 Days, 0 Hours, 0 Minutes)')
  })
   it('tests Valet Parking prices by time for 2 days', () => {
    cy.get('#ParkingLot').select('Valet Parking')
    cy.get('#StartingDate').clear().type('12/01/2022')
    cy.get('#StartingTime').clear().type('1:00')
    cy.get(':nth-child(2) > :nth-child(2) > [value="PM"]').click()
    cy.get('#LeavingDate').clear().type('12/03/2022')
    cy.get('#LeavingTime').clear().type('1:00')
    cy.get(':nth-child(3) > :nth-child(2) > [value="PM"]').click()
    cy.get('[type="submit"]').click()
    cy.get('.SubHead > b').contains('$ 36.00')
    cy.get('.BodyCopy > b').contains('(2 Days, 0 Hours, 0 Minutes)')
  })
   it('tests Valet Parking prices by time for 3 days', () => {
    cy.get('#ParkingLot').select('Valet Parking')
    cy.get('#StartingDate').clear().type('12/01/2022')
    cy.get('#StartingTime').clear().type('1:00')
    cy.get(':nth-child(2) > :nth-child(2) > [value="PM"]').click()
    cy.get('#LeavingDate').clear().type('12/04/2022')
    cy.get('#LeavingTime').clear().type('1:00')
    cy.get(':nth-child(3) > :nth-child(2) > [value="PM"]').click()
    cy.get('[type="submit"]').click()
    cy.get('.SubHead > b').contains('$ 54.00')
    cy.get('.BodyCopy > b').contains('(3 Days, 0 Hours, 0 Minutes)')
  })
  //Short-Term Parking
    it('tests Short-Term Parking prices by time for an hour and a half', () => {
    cy.get('#ParkingLot').select('Short-Term Parking')
    cy.get('#StartingDate').clear().type('12/01/2022')
    cy.get('#StartingTime').clear().type('1:00')
    cy.get(':nth-child(2) > :nth-child(2) > [value="PM"]').click()
    cy.get('#LeavingDate').clear().type('12/01/2022')
    cy.get('#LeavingTime').clear().type('2:30')
    cy.get(':nth-child(3) > :nth-child(2) > [value="PM"]').click()
    cy.get('[type="submit"]').click()
    cy.get('.SubHead > b').contains('$ 3.00')
    cy.get('.BodyCopy > b').contains('(0 Days, 1 Hours, 30 Minutes)')
  })
    it('tests Short-Term Parking prices by time for one day', () => {
    cy.get('#ParkingLot').select('Short-Term Parking')
    cy.get('#StartingDate').clear().type('12/01/2022')
    cy.get('#StartingTime').clear().type('1:00')
    cy.get(':nth-child(2) > :nth-child(2) > [value="PM"]').click()
    cy.get('#LeavingDate').clear().type('12/02/2022')
    cy.get('#LeavingTime').clear().type('1:00')
    cy.get(':nth-child(3) > :nth-child(2) > [value="PM"]').click()
    cy.get('[type="submit"]').click()
    cy.get('.SubHead > b').contains('$ 24.00')
    cy.get('.BodyCopy > b').contains('(1 Days, 0 Hours, 0 Minutes)')
  })
    it('tests Short-Term Parking prices by time for two days', () => {
    cy.get('#ParkingLot').select('Short-Term Parking')
    cy.get('#StartingDate').clear().type('12/01/2022')
    cy.get('#StartingTime').clear().type('1:00')
    cy.get(':nth-child(2) > :nth-child(2) > [value="PM"]').click()
    cy.get('#LeavingDate').clear().type('12/03/2022')
    cy.get('#LeavingTime').clear().type('1:00')
    cy.get(':nth-child(3) > :nth-child(2) > [value="PM"]').click()
    cy.get('[type="submit"]').click()
    cy.get('.SubHead > b').contains('$ 48.00')
    cy.get('.BodyCopy > b').contains('(2 Days, 0 Hours, 0 Minutes)')
  })
    it('tests Short-Term Parking prices by time for three days', () => {
    cy.get('#ParkingLot').select('Short-Term Parking')
    cy.get('#StartingDate').clear().type('12/01/2022')
    cy.get('#StartingTime').clear().type('1:00')
    cy.get(':nth-child(2) > :nth-child(2) > [value="PM"]').click()
    cy.get('#LeavingDate').clear().type('12/04/2022')
    cy.get('#LeavingTime').clear().type('1:00')
    cy.get(':nth-child(3) > :nth-child(2) > [value="PM"]').click()
    cy.get('[type="submit"]').click()
    cy.get('.SubHead > b').contains('$ 72.00')
    cy.get('.BodyCopy > b').contains('(3 Days, 0 Hours, 0 Minutes)')
  })
  //Economy Parking
   it('tests Economy Parking prices by time for one day', () => {
    cy.get('#ParkingLot').select('Economy Parking')
    cy.get('#StartingDate').clear().type('12/01/2022')
    cy.get('#StartingTime').clear().type('1:00')
    cy.get(':nth-child(2) > :nth-child(2) > [value="PM"]').click()
    cy.get('#LeavingDate').clear().type('12/02/2022')
    cy.get('#LeavingTime').clear().type('1:00')
    cy.get(':nth-child(3) > :nth-child(2) > [value="PM"]').click()
    cy.get('[type="submit"]').click()
    cy.get('.SubHead > b').contains('$ 9.00')
    cy.get('.BodyCopy > b').contains('(1 Days, 0 Hours, 0 Minutes)')
  })
   it('tests Economy Parking prices by time for three days', () => {
    cy.get('#ParkingLot').select('Economy Parking')
    cy.get('#StartingDate').clear().type('12/01/2022')
    cy.get('#StartingTime').clear().type('1:00')
    cy.get(':nth-child(2) > :nth-child(2) > [value="PM"]').click()
    cy.get('#LeavingDate').clear().type('12/04/2022')
    cy.get('#LeavingTime').clear().type('1:00')
    cy.get(':nth-child(3) > :nth-child(2) > [value="PM"]').click()
    cy.get('[type="submit"]').click()
    cy.get('.SubHead > b').contains('$ 27.00')
    cy.get('.BodyCopy > b').contains('(3 Days, 0 Hours, 0 Minutes)')
  })
     it('tests Economy Parking prices by time for seven days', () => {
    cy.get('#ParkingLot').select('Economy Parking')
    cy.get('#StartingDate').clear().type('12/01/2022')
    cy.get('#StartingTime').clear().type('1:00')
    cy.get(':nth-child(2) > :nth-child(2) > [value="PM"]').click()
    cy.get('#LeavingDate').clear().type('12/08/2022')
    cy.get('#LeavingTime').clear().type('1:00')
    cy.get(':nth-child(3) > :nth-child(2) > [value="PM"]').click()
    cy.get('[type="submit"]').click()
    cy.get('.SubHead > b').contains('$ 54.00')
    cy.get('.BodyCopy > b').contains('(7 Days, 0 Hours, 0 Minutes)')
  })
  //Long-Term Garage Parking
    it('tests Long-Term Garage Parking prices by time for one day', () => {
    cy.get('#ParkingLot').select('Long-Term Garage Parking')
    cy.get('#StartingDate').clear().type('12/01/2022')
    cy.get('#StartingTime').clear().type('1:00')
    cy.get(':nth-child(2) > :nth-child(2) > [value="PM"]').click()
    cy.get('#LeavingDate').clear().type('12/02/2022')
    cy.get('#LeavingTime').clear().type('1:00')
    cy.get(':nth-child(3) > :nth-child(2) > [value="PM"]').click()
    cy.get('[type="submit"]').click()
    cy.get('.SubHead > b').contains('$ 12.00')
    cy.get('.BodyCopy > b').contains('(1 Days, 0 Hours, 0 Minutes)')
  })
    it('tests Long-Term Garage Parking prices by time for three days', () => {
    cy.get('#ParkingLot').select('Long-Term Garage Parking')
    cy.get('#StartingDate').clear().type('12/01/2022')
    cy.get('#StartingTime').clear().type('1:00')
    cy.get(':nth-child(2) > :nth-child(2) > [value="PM"]').click()
    cy.get('#LeavingDate').clear().type('12/04/2022')
    cy.get('#LeavingTime').clear().type('1:00')
    cy.get(':nth-child(3) > :nth-child(2) > [value="PM"]').click()
    cy.get('[type="submit"]').click()
    cy.get('.SubHead > b').contains('$ 36.00')
    cy.get('.BodyCopy > b').contains('(3 Days, 0 Hours, 0 Minutes)')
  })
    it('tests Long-Term Garage Parking prices by time for seven days', () => {
    cy.get('#ParkingLot').select('Long-Term Garage Parking')
    cy.get('#StartingDate').clear().type('12/01/2022')
    cy.get('#StartingTime').clear().type('1:00')
    cy.get(':nth-child(2) > :nth-child(2) > [value="PM"]').click()
    cy.get('#LeavingDate').clear().type('12/08/2022')
    cy.get('#LeavingTime').clear().type('1:00')
    cy.get(':nth-child(3) > :nth-child(2) > [value="PM"]').click()
    cy.get('[type="submit"]').click()
    cy.get('.SubHead > b').contains('$ 72.00')
    cy.get('.BodyCopy > b').contains('(7 Days, 0 Hours, 0 Minutes)')
  })
  //Long-Term Surface
    it('tests Long-Term Surface Parking prices by time for one day', () => {
    cy.get('#ParkingLot').select('Long-Term Surface Parking')
    cy.get('#StartingDate').clear().type('12/01/2022')
    cy.get('#StartingTime').clear().type('1:00')
    cy.get(':nth-child(2) > :nth-child(2) > [value="PM"]').click()
    cy.get('#LeavingDate').clear().type('12/02/2022')
    cy.get('#LeavingTime').clear().type('1:00')
    cy.get(':nth-child(3) > :nth-child(2) > [value="PM"]').click()
    cy.get('[type="submit"]').click()
    cy.get('.SubHead > b').contains('$ 10.00')
    cy.get('.BodyCopy > b').contains('(1 Days, 0 Hours, 0 Minutes)')
  })
    it('tests Long-Term Surface Parking prices by time for three days', () => {
    cy.get('#ParkingLot').select('Long-Term Surface Parking')
    cy.get('#StartingDate').clear().type('12/01/2022')
    cy.get('#StartingTime').clear().type('1:00')
    cy.get(':nth-child(2) > :nth-child(2) > [value="PM"]').click()
    cy.get('#LeavingDate').clear().type('12/04/2022')
    cy.get('#LeavingTime').clear().type('1:00')
    cy.get(':nth-child(3) > :nth-child(2) > [value="PM"]').click()
    cy.get('[type="submit"]').click()
    cy.get('.SubHead > b').contains('$ 30.00')
    cy.get('.BodyCopy > b').contains('(3 Days, 0 Hours, 0 Minutes)')
  })
    it('tests Long-Term Surface Parking prices by time for seven days', () => {
    cy.get('#ParkingLot').select('Long-Term Surface Parking')
    cy.get('#StartingDate').clear().type('12/01/2022')
    cy.get('#StartingTime').clear().type('1:00')
    cy.get(':nth-child(2) > :nth-child(2) > [value="PM"]').click()
    cy.get('#LeavingDate').clear().type('12/08/2022')
    cy.get('#LeavingTime').clear().type('1:00')
    cy.get(':nth-child(3) > :nth-child(2) > [value="PM"]').click()
    cy.get('[type="submit"]').click()
    cy.get('.SubHead > b').contains('$ 60.00')
    cy.get('.BodyCopy > b').contains('(7 Days, 0 Hours, 0 Minutes)')
  })
})