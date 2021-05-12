describe('결제 테스트',function(){

    //로그인한다.
    it ('로그인하기', function() {
        // 사이트 접속
        // 환경과 서비스명을 이용해서 사이트 접속하도록 구현 필요

        cy.visit('/')

        //로그인 페이지로 이동하는 PATH
        cy.contains('로그인').click()
        cy.contains('이메일로 시작하기').click()

        // 이메일을 입력한다. 
        // DB에서 가져오는 구조로 구현 필요
        cy.get('input[name=email]')
        .type('jinhwan.choi@fastcampus.co.kr',{delay:100})
        .should('have.value','jinhwan.choi@fastcampus.co.kr')
        
        // 비밀번호를 입력한다.
        // DB에서 가져오는 구조로 구현 필요
        cy.get('input[name=password]')
        .type('test1234')

        //로그인 버튼을 누른다.
        cy.get('.btn').click()

        //홈화면으로 이동하였는지 확인
        //기대결과
        cy.get('.em').contains('최진환').should('be.visible') 
    
    })
    //마케팅 브랜치 페이지로 이동한다.
    it ('마케팅 페이지로 이동하기', function() {

        //브랜치 페이지로 이동
        cy.get('.nav-menu')
        .contains('카테고리', {force: true})
        .click()
        cy.contains('마케팅').click()

 
    
    })

})