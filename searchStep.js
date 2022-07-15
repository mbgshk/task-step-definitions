/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given ('I click searchbox', () => {
    cy.visit('http://zero.webappsecurity.com/index.html')
    cy.get('#searchTerm').should('be.visible')
})

When ('I submit content i want to search', () => {
    cy.get('#searchTerm').type('Example {enter}')
})

Then ('I should see what i looking for', () => {
    cy.get('h2').should('contain.text', 'Search Results:')
})