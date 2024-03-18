/// <reference types="cypress" />
describe('verift the intercept',function(){
    it('verify the GET conmment',function(){
        cy.intercept({
            url:"https://jsonplaceholder.cypress.io/comments/1",
            method:"GET"
        },{
            body:{
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
              }
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function({response,request}){
            cy.log(request)
            cy.log(response)
            expect(request.method).to.eq("GET")
            cy.get('.network-comment').should('have.text',response.body.body)
        })
    })
    it('verify the POST comment',function(){
        cy.intercept({
            method:"POST",
            url:"https://jsonplaceholder.cypress.io/comments"
        }).as('PostComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains("Post Comment").click()
        cy.wait('@PostComment').then(function({response}){
            cy.log(response)
        })
    })
    it('verify the Update comment', function () {


        cy.intercept({
            method:"PUT",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('UpdateComment')

        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains("Update Comment").click()
        cy.wait('@UpdateComment').then(function({response}){
            //cy.log(response)
            expect(response.statusCode).to.eq(200)
            
        })
    })
})