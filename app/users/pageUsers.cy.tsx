import React from 'react'
import Users from './page'

describe('<Users />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Users />)
  })
})