const URL = 'http://zero.webappsecurity.com/index.html'
const SEARCH = '#searchTerm'

class SearchPage {
    static visit() {
        cy.visit(URL)
    }

    static search() {
        cy.get(SEARCH).should('be.visible')
    }

    static fillSearch(search) {
        cy.get(SEARCH).type(search)
    }
}

export default SearchPage