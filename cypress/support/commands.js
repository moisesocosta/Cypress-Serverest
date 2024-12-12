Cypress.Commands.add('getAPI', (urlParam) => {
  cy.request({
    method: 'GET',
    url: Cypress.config('baseUrl') + urlParam,
  })
})

Cypress.Commands.add('postAPI', (urlParam, body, token = null) => {
  const options = {
    method: 'POST',
    url: Cypress.config('baseUrl') + urlParam,
    body: body,
  }
  
  if (token) {
    options.headers = { Authorization: token }
  }
  
  cy.request(options);
});

Cypress.Commands.add('putAPI', (urlParam, body, token) => {
  const options = { 
    method: 'PUT',
    url: Cypress.config('baseUrl') + urlParam,
    body: body,
  }

  if (token) {
    options.headers = { Authorization: token }
  }
  
  cy.request(options);
})

Cypress.Commands.add('deleteAPI', (urlParam, token) => {
  const options = {
    method: 'DELETE',
    url: Cypress.config('baseUrl') + urlParam,
  }

  if(token){
    options.headers = {Authorization: token}
  }

  cy.request(options);
})