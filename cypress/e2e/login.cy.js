/// <reference types="Cypress" />

const locators = require ('../fixtures/locators.json')
import { Faker, faker } from '@faker-js/faker';

describe ('Login test cases',()  => {
   beforeEach('go to gallery page and click on login button', () =>{
    cy.visit ('')
    cy.get(locators.header.loginButton).click()
   })
    // it('Go to gallery page', () => {

    //     cy.visit('')
    // } )

    // it ('go to login page', () => {
    //     cy.get (locators.header.loginButton).click ()
    // })

    it ('login with valid credentials and logout', () =>{
        cy.get(locators.login.emailInput).type ('test@test.com')
        cy.get (locators.login.passwordInput).type('test1234')
        cy.get (locators.login.sybmitButton).click()
        cy.get(locators.header.logoutButton).click ()
    })

    // it ('logout', () => {
    //     cy.get(locators.header.logoutButton).click ()
    // })

    it('login with invalid email', () => {
        cy.get(locators.login.emailInput).clear().type (faker.internet.email())
        cy.get (locators.login.passwordInput).clear().type('test1234')
        cy.get (locators.login.sybmitButton).click()
    })
} )