describe('verify the contact us form',function(){


    this.beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name = "first_name"]').type("suvarna")
        cy.get('[name = "last_name"]').type("chaskar")
        cy.get('[name = "email"]').type("suvarnarahane111@gmail.com")
        cy.get('[name = "message"]').type("i am learning javascript")
    })

    it('verify the submit form',function(){
        cy.get('input[type = "submit"]').click()
        cy.get('h1').should('have.text',"Thank You for your Message!")
    })

    it('verify the reset functionality',function(){
        cy.get('input[type = "reset"]').click()
        cy.get('[name = "first_name"]').should('have.text',"")
    })

    afterEach(function(){
        cy.clearAllCookies
    })

})