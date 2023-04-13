describe('Add Song form', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')

    cy.get('["title-input"]').type("Title")
    cy.get('["artist-input"]').type("Artist")
    cy.get('["album-input"]').type("Album")
    cy.get('[genre-input"]').type("Genre")
    cy.get('["release-date-input"]').type("Release Date")
    cy.get('["running-time-input"]').type("Running Time")
    cy.get('["submit-button"]').click()
    cy.url().should("include", "songs")
    cy.contains("Song - Artist")
  })
})
//     // cy.get('[data-ctest=title-input]').type('Title')
//     // cy.get('[data-cy=artist-input]').type('Artist')
//     // cy.get('[data-cy=album-input]').type('Album')
//     // cy.get('[data-cy=genre-input]').type('Genre')
//     // cy.get('[data-cy=release_date-input]').type('Release Date')
//     // cy.get('[data-cy=running_time-input]').type('Running Time')
//     // cy.get('[data-cy=submit-button]').click()
//     // cy.contains('type').click()

describe("Filter/Search functionality", () => {
  before(() => {
    cy.visit()
    cy.get("title-input").type("Title")
    cy.get("artist-input").type("Artist")
    cy.get("album-input").type("Album")
    cy.get("genre-input").type("Genre")
    cy.get("release-date-input").type("Release Date")
    cy.get("running-time-input").type("Running Time")
    cy.get("submit-button").click()
  })

  it("should display only the matching songs when filtering by title", () => {
    cy.get("search-input").type("Song")
      cy.get("search-button").click()
      cy.contains("Song - Artist")
    })

  it("should display only the matching songs when filtering by artist", () => {
    cy.get("search-input").clear().type("Artist")
    cy.get("search-button").click()
    cy.contains("Song - Artist")
  })

  it("should display only the matching songs when filtering by album", () => {
    cy.get("search-input").clear().type("Album")
    cy.get("search-button").click()
    cy.contains("Song - Artist")
  })

  it("should display only the matching songs when filtering by genre", () => {
    cy.get("search-input").clear().type("Trap")
    cy.get("search-button").click()
    cy.contains("Song - Artist")
  })

  it("should display only the matching songs when filtering by release_date", () => {
    cy.get("search-input").clear().type("Release_Date")
    cy.get("search-button").click()
    cy.contains("Song - Artist")
  })

  it("should display only the matching songs when filtering by running_time", () => {
    cy.get("search-input").clear().type("Running_Time")
    cy.get("search-button").click()
    cy.contains("Song - Artist")
  })
})

describe("Record deletion", () => {
  before(() => {
    cy.visit("songs")
    cy.contains("Song - Artist").click()
  })

  it("should delete the selected song", () => {
    cy.get("delete-button").click()
    cy.contains("Song - Artist").should("not.exist")
  })
})