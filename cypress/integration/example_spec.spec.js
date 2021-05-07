describe('My First Test',function(){
    it ('비정상 아이디로 로그인', function() {
        // 사이트 접속
        // 환경과 서비스명을 이용해서 사이트 접속하도록 구현 필요

        cy.visit('https://qa.fastcampus.co.kr')

        //로그인 페이지로 이동하는 PATH
        cy.contains('로그인').click()
        cy.contains('이메일로 시작하기').click()

        // 아아디 & 비밀번호
        //테스트 데이터에서 가져오도록 구현 필요
        //유지보수를 위해서는 별도 모듈에서 관리 필요 
        cy.get('form').within(($form) => {
            cy.get('input[name=email]')
            .type('fake@email.com', {delay: 100})
            .should('have.value','fake@email.com')

            cy.get('input[name=password]')
            .type('test1234')

            cy.root().submit()

        })
        cy.contains('로그인 정보가 일치하지 않습니다').should('be.visible') 

    })
    
})