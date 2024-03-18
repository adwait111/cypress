//test scenario ----> verify the contact us form
// testcase 1 -- validate with valid data 
// tastcase 2 -- validate the reset button funcyionlity 
//testcase 3 -- validate with invalid data 

describe("verify the contact us form",function(){
    it('verify the contact us form with valid data',function(){

        // arrangement
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        
        // Action
        cy.get('input[name="first_name"]').type('suvarna')
        cy.get('input[name="last_name"]').type('chaskar')
        cy.get('input[name="email"]').type("suvarnarahane111@gmai.com")
        cy.get('textarea[name="message"]').type('I am learning javascript')
        cy.get('input[type="submit"]').click()

        // Assertion 
        cy.get('h1').should('be.visible')

    })

    it('verify the functionality of reset button',function(){
        // Arrangement
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        // Action 
        cy.get('input[name="first_name"]').type('suvarna')
        cy.get('input[name="last_name"]').type('chaskar')
        cy.get('input[name="email"]').type('suvarnarahane111@gmai.com')
        cy.get('textarea[name="message"]').type('I am learning javascript')
        cy.get('input[type="reset"]').click()
        // Assertion
        cy.get('input[name="first_name"]').should('have.text',"")
    })
    it.only('verify the functionality of contact us form with invalid data',function(){
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
         // Arrangement
         cy.get('input[name="first_name"]').type('suvarna')
         cy.get('input[name="last_name"]').type('chaskar')
         cy.get('input[name="email"]').type("suvarnarahane111gmai.com")
         cy.get('textarea[name="message"]').type('I am learning javascript')
         cy.get('input[type="submit"]').click()
         cy.get('body').should('contain','Error: Invalid email address')
    })

})