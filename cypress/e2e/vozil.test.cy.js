// Cypress test

describe('Vozni park', () => {
  beforeEach(() => {
    cy.visit('../../VozniPark1.html'); 
  });

  it('Dodavanje vozila', () => {
    // Unos podataka za novo vozilo
    cy.get('tbody#vozni-park').find("tr").should('have.length', 0);
    cy.get('#vehicle-make').select('Audi');
    cy.get('#vehicle-model').type('A4');
    cy.get('#vehicle-body').select('Limuzina');
    cy.get('#vehicle-fuel').select('Benzin');
    cy.get('#vehicle-year').select('2022');
    cy.get('#license-plate').type('AB-123-CD');

    // Klik na dugme "Dodaj vozilo"
    cy.get('.button').click();

    // Provera da li je novo vozilo dodato u tabelu
    cy.get('tbody#vozni-park').find("tr").should('have.length', 1);
  });

  it('Izmena vozila', () => {
    // Dodavanje vozila pre izmene
    cy.get('tbody#vozni-park').find("tr").should('have.length', 0);
    cy.get('#vehicle-make').select('Audi');
    cy.get('#vehicle-model').type('A4');
    cy.get('#vehicle-body').select('Limuzina');
    cy.get('#vehicle-fuel').select('Benzin');
    cy.get('#vehicle-year').select('2022');
    cy.get('#license-plate').type('AB-123-CD');
    cy.get('.button').click();
    cy.get('tbody#vozni-park').find("tr").should('have.length', 1);

    // Klik na dugme "Izmeni" za prvo vozilo u tabeli
    cy.get('#vozni-park tr:first-child .edit-button').click();

    // Izmena podataka vozila
    cy.get('#vehicle-make').select('BMW');
    cy.get('#vehicle-model').type('{selectall}{backspace}X5');
    cy.get('#vehicle-body').select('Dzip/SUV');
    cy.get('#vehicle-fuel').select('Dizel');
    cy.get('#vehicle-year').select('2020');
    cy.get('#license-plate').type('{selectall}{backspace}XY-789-ZW');

    // Klik na dugme "Sačuvaj izmene"
    cy.get('.button').click();

    // Provera da li su podaci vozila izmenjeni u tabeli
    cy.get('#vozni-park tr:first-child td').eq(0).should('contain', 'BMW');
    cy.get('#vozni-park tr:first-child td').eq(1).should('contain', 'X5');
    cy.get('#vozni-park tr:first-child td').eq(2).should('contain', 'Dzip/SUV');
    cy.get('#vozni-park tr:first-child td').eq(3).should('contain', 'Dizel');
    cy.get('#vozni-park tr:first-child td').eq(4).should('contain', '2020');
    cy.get('#vozni-park tr:first-child td').eq(5).should('contain', 'XY-789-ZW');
    cy.get('tbody#vozni-park').find("tr").should('have.length', 1);
  });

  it('Uklanjanje vozila', () => {
    // Dodavanje vozila pre uklanjanja
    cy.get('tbody#vozni-park').find("tr").should('have.length', 0);
    cy.get('#vehicle-make').select('Audi');
    cy.get('#vehicle-model').type('A4');
    cy.get('#vehicle-body').select('Limuzina');
    cy.get('#vehicle-fuel').select('Benzin');
    cy.get('#vehicle-year').select('2022');
    cy.get('#license-plate').type('AB-123-CD');
    cy.get('.button').click();
    cy.get('tbody#vozni-park').find("tr").should('have.length', 1);

    // Klik na dugme "Ukloni" za prvo vozilo u tabeli
    cy.get('#vozni-park tr:first-child .delete-button').click();

    // Provera da li je vozilo uklonjeno iz tabele
    cy.get('#vozni-park').find("tr").should('have.length', 0);
  });
});

