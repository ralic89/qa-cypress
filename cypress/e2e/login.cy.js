/// <reference types="Cypress" />

describe ('Login test cases',()  => {
    it('Go to gallery page', () => {

        cy.visit('')
    } )

    it ('go to login page', () => {
        cy.get ("a[href='/login']").click ()
    })

    it ('login with valid credentials', () =>{
        cy.get('#email').type ('test@test.com')
        cy.get ('#password').type('test1234')
        cy.get ("button[type='submit']").click()
    })

    it ('logout', () => {
        cy.get('a[role="button "]').click ()
    })

    it('login with invalid email', () => {
        cy.get('#email').type ('testtest.com')
        cy.get ('#password').type('test1234')
        cy.get ("button[type='submit']").click()
    })
} )