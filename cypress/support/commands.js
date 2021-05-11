// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Test Data가 필요함..
//username, paswword를 가져와서 넣어주도록 구현 필요
//url도 환경 설정에 따라 설정되도록 해야함..
//token을 받아오는 방법 확인해 보아야함.
/*
Cypress.Commands.add('login', ({ username = 'jw3@jw.com', password = '12341234' }) => {
    cy.request({
      method: 'post',
      url: `https://api.qa.fastcampus.co.kr/auth/tokens`,
      body: {
        grant_type: 'password',
        client_id: 'fc:client:www',
        client_secret: undefined,
        scope: 'www',
        state: 'www:password',
        username,
        password,
      },
    }).as('token');
    cy.get('@token').then((res) => {
      const accessToken = res.body.access_token;
      console.info(accessToken);
      cy.visit(`/#access_token=${accessToken}`);
    });
  });
  */