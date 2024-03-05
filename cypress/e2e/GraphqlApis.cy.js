

describe('GraphQL API Testing', () => {
    it('should return list of todos', () => {
      cy.fixture('ListToDo.graphql').then((graphqlQuery) => {
        cy.fixture('ListToDo.json').then((variables) => {
          cy.request({
            method: 'POST',
            url: 'https://gmp5pbtmtvec3l5y6nzqmcs4vi.appsync-api.us-east-1.amazonaws.com/graphql',
            headers: {
              'X-Api-Key': 'da2-7etchdaxindphf3fv3jtv23une'
            },
            body: {
              query: graphqlQuery,
              variables: variables
            }
          }).then(response => {
            let body=JSON.parse(JSON.stringify(response.body));
            cy.log(response.body); 
            cy.writeFile('response.json', response.body);
            expect(response.status).to.eq(200);
            console.log(response.body); 
          });
        });
      });
    });

    it('Create todos', () => {
      cy.fixture('createToDo.graphql').then((graphqlQuery) => {
        cy.fixture('createToDo.json').then((variables) => {
          cy.request({
            method: 'POST',
            url: 'https://gmp5pbtmtvec3l5y6nzqmcs4vi.appsync-api.us-east-1.amazonaws.com/graphql',
            headers: {
              'X-Api-Key': 'da2-7etchdaxindphf3fv3jtv23une'
            },
            body: {
              query: graphqlQuery,
              variables: variables
            }
          }).then(response => {
            cy.log(response.body); 
            cy.writeFile('response.json', response.body);
            expect(response.status).to.eq(200);
            console.log(response); 
          });
        });
      });
    });

  });