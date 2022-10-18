/// <reference types="Cypress" />

describe ('register test cases', () =>{
    it ('visit gallery page', () =>{
        cy.visit ('')
    })

    it ("go to register page", () => {
        cy.get ('a[href="/register"]').click ()
    })


  it ('register with valid credentials', () => {
    cy.get ('#first-name').type ('Dragan')
    cy.get ('#last-name').type ('Ralic')
    cy.get ('#email').type ('bora12@bora.com')
        cy.get ('#password').type ('bora1234')
        cy.get ('#password-confirmation').type ('bora1234')
        cy.get ('input[class="form-check-input"]').click()
        cy.get ('button[type="submit"]').click()




    })
})