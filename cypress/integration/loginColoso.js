describe('로그인 테스트',function(){

    it ('정상적인 아이디로 로그인', function() {
        // 사이트 접속
        // 환경과 서비스명을 이용해서 사이트 접속하도록 구현 필요

        cy.visit('https://qa.coloso.co.kr')

        //로그인 페이지로 이동하는 PATH
        cy.get('.nav-menu__item')
        .contains('로그인')
        .click()

    /*
    URL이 변경되어 에러 발생함 : auth.qa.fastcampus.co.kr/sign-in 이동되는 문제임..
    */

        // 이메일을 입력한다. 
        // DB에서 가져오는 구조로 구현 필요
        cy.get('input[name=email]')
        .type('jinhwan.choi@fastcampus.co.kr')
        
        // 비밀번호를 입력한다.
        // DB에서 가져오는 구조로 구현 필요
        cy.get('input[name=password]')
        .type('test1234')

        //로그인 버튼을 누른다.
        cy.get('.btn').click()
        cy.get('.nav-menu__links').should('be.visible') 
    

    

    })

})