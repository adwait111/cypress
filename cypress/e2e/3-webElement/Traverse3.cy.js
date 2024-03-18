/// <reference types="cypress" />
describe('traverse day-3',function(){
    //filter()
    it('To get DOM elements that match a specific selector, use the .filter() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('button').filter('.btn-outline-info').should('have.length',2)
    })
    // not()
    it('To remove DOM element(s) from the set of elements, use the .not() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().not('.disabled').should('have.length',3)
    })
    //find()
    it('To get descendant DOM elements of the selector, use the .find() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.thumbnail').last().find('#coffee').should('have.text','Coffee')
    })
    //closest()
    it('To get the closest ancestor DOM element, use the .closest() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').closest('div').should('have.class','thumbnail')
    })
    //parentUntil()
    it.only('To get parents DOM element of elements until other element, use the .parentsUntil() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').parentsUntil('.thumbnail').should('have.length',1)
    })
})