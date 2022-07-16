/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import SearchPage from "./searchPage";

Given ('I click searchbox', () => {
    SearchPage.visit()
    SearchPage.search()
})

When ('I submit content i want to search', () => {
    SearchPage.fillSearch('online {enter}')
})

Then ('I should see what i looking for', () => {
    cy.get('h2').should('contain.text', 'Search Results:')
})