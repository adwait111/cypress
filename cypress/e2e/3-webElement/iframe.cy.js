/// <reference types="cypress" />

let iframeExist = function(id){
    return cy.get(`#${id}`).its('0.contentDocument').should('exist')
}
const bodyExist = function(id){
    return iframeExist(id).its('body').should('not.be.undefined').then(cy.wrap)
}

describe('learning to mange ifram in cypress',function(){
    it('learning to manage iframe - jquary',function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function($iframe){
           let document =  $iframe.contents()
           cy.wrap(document).find('body').as('iframbody')
        })
        cy.get('@iframebody').contains("Home").should('have.attr','href')
    })
    it('learning to manage iframe - javascript',function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function(iframe){
           let document =  iframe['0'].contentDocument
           cy.wrap(document).find('body').as('iframebody')
        })
        cy.get('@iframebody').contains("Home").should('have.attr','href')
    })

    
    it.only('learning to manage iframe - javascript',function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
       // cy.wrap(bodyExist('frame')).as('body')
       bodyExist('frame').contains('Home').should('have.attr','href')
    })

   
})