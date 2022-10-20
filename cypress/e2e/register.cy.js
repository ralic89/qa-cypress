/// <reference types="Cypress" />

const locators = require ('../fixtures/locators.json')

describe('Register test cases', () => {
	beforeEach ('go to gallery page and click on register button',() => {
        cy.visit ('')
        cy.get(locators.header.registerButton).click();

    });
    
    // it('Go to gallery page', () => {
	// 	cy.visit('');
	// });

	// it('Go to register page', () => {
	// 	cy.get("a[href='/register']").click();
	// });

	it('Invalid First name', () => {
		cy.get(locators.register.firstNameInput).type('  ');
		cy.get(locators.register.lastNameInput).type('Test');
		cy.get(locators.register.emailInput).type('test@123456.com');
		cy.get(locators.register.passwordInput).type('aleksa1995');
		cy.get(locators.register.passwordConfirmInput).type('aleksa1995');
		cy.get(locators.register.checkBoxButton).check();
		cy.get(locators.register.submitButton).click();
	});
	
	it('Invalid Last name', () => {
		cy.get(locators.register.firstNameInput).type('Dragan');
		cy.get(locators.register.lastNameInput).type('  ');
		cy.get(locators.register.emailInput).type('test@123456.com');
		cy.get(locators.register.passwordInput).type('aleksa1995');
		cy.get(locators.register.passwordConfirmInput).type('aleksa1995');
		cy.get(locators.register.checkBoxButton).check();
		cy.get(locators.register.submitButton).click();
	});
	
	it('Invalid email', () => {
		cy.get(locators.register.firstNameInput).type('Dejvid');
		cy.get(locators.register.lastNameInput).type('Test');
		cy.get(locators.register.emailInput).type('test123456.com');
		cy.get(locators.register.passwordInput).type('aleksa1995');
		cy.get(locators.register.passwordConfirmInput).type('aleksa1995');
		cy.get(locators.register.checkBoxButton).check();
		cy.get(locators.register.submitButton).click();
	});
	
	it('Invalid password', () => {
		cy.get(locators.register.firstNameInput).type('Dejvic');
		cy.get(locators.register.lastNameInput).type('Test');
		cy.get(locators.register.emailInput).type('test@123456.com');
		cy.get(locators.register.passwordInput).type('dragan');
		cy.get(locators.register.passwordConfirmInput).type('dragan');
		cy.get(locators.register.checkBoxButton).check();
		cy.get(locators.register.submitButton).click();
	});
	
	it('box unchecked', () => {
		cy.get(locators.register.firstNameInput).type('Dragan');
		cy.get(locators.register.lastNameInput).type('Test');
		cy.get(locators.register.emailInput).type('test@123456.com');
		cy.get(locators.register.passwordInput).type('aleksa1995');
		cy.get(locators.register.passwordConfirmInput).type('aleksa1995');
		cy.get(locators.register.checkBoxButton).uncheck();
		cy.get(locators.register.submitButton).click();
	});
	
	it('Register successfully', () => {
		cy.get(locators.register.firstNameInput).type('Dejvic');
		cy.get(locators.register.lastNameInput).type('Test');
		cy.get(locators.register.emailInput).type('test@123456.com');
		cy.get(locators.register.passwordInput).type('aleksa1995');
		cy.get(locators.register.passwordConfirmInput).type('aleksa1995');
		cy.get(locators.register.checkBoxButton).check();
		cy.get(locators.register.submitButton).click();
	});
	
});
