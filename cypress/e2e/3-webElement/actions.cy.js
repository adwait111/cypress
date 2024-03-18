/// <reference types="cypress" />

describe('action element',function(){
    it('double click',function(){
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('#double-click').dblclick().should('have.class',"div-double-click double")
    })
    // mousedown
    //mousemove
    //mouseup
    it('drag and drop',function(){
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('#draggable').trigger('mousedown',{button:1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
        cy.get('#droppable').should('contain','Dropped!')
    })
    it('move to element and click and hold',function(){
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('#click-box').trigger('mousedown').should('contain','Well done!')
        cy.get('#click-box').trigger('mouseup').should('contain','Dont release me!!!')
    
    })
    it.only('move to element and click and hold',function(){
        cy.visit('https://webdriveruniversity.com/Actions/index.html')
        cy.get('#div-hover > div.dropdown.hover > button').trigger('mouseover')
        cy.get('#div-hover > div.dropdown.hover > div > a').should('exist')
    })
  

})