import { nextTick } from 'process';
import { $, $$, browser, by, ExpectedConditions } from 'protractor';
import { fromEvent } from 'rxjs';
import { debounceTime} from 'rxjs/operators';
import * as request from 'request'; 
var request = require('request');
describe('When: Use the search feature', () => {
  beforeEach(() => {
    cy.startAt('/');
  });

  it('Then: I should be able to search books by title', () => {
    cy.get('input[type="search"]').type('javascript');

    cy.get('form').submit();

    cy.get('[data-testing="book-item"]').should('have.length.greaterThan', 1);
  });

  it('Then: I should see search results as I am typing', async () => {
    // TODO: Implement this test!
 
  });
});
