/// <reference types="cypress" />
describe('API testing for go rest API = E2E', function () {
    //client id secreate Id ---- API call -----token ----other calls
    let token = `945f1052d7c656f4bae69c1afda0ee7cc5e27bdaccf06191e6a17c3a2dc3e160`
    it('Create a user ,retrive,update,delete', function () {
        cy.request({
            url: 'https://gorest.co.in/public/v2/users',
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: {
                "name": "Tenali Ramakrishna",
                "gender": "male",
                "email": `suvarna${Math.floor(Math.random() * 1000)}@gmail.com`,
                "status": "active"
            }
        }).then(function (response) {
            //cy.log(response)
            expect(response.status).to.equal(201)
            return response.body.id
        })
            .then(function (id) {
                cy.request({
                    url: `https://gorest.co.in/public/v2/users/${id}`,
                    method: "PUT",
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    body: {
                        "name": "Allasani Peddana",
                        "email": `suvarna${Math.floor(Math.random() * 1000)}@gmail.com`,
                        "status": "active"
                    }
                }).then(function (response) {
                    //cy.log(response)
                    expect(response.status).to.equal(200)
                    expect(response.body).to.have.keys(["email", "name", "id", "status", "gender"])
                    return
                })
                    .then(function () {
                        cy.request({
                            url: `https://gorest.co.in/public/v2/users/${id}`,
                            method: 'DELETE',
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        }).then(function (response) {
                            expect(response.status).to.eq(204)
                        })
                    })


            })






    })



})