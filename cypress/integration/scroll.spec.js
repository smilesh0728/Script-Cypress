describe('scroll-Down', () => {
    
    it ('로그인 > 맨 하단으로 스크롤', function() {
        // 사이트 접속
        // 환경과 서비스명을 이용해서 사이트 접속하도록 구현 필요

        // cy.visit('https://qa.fastcampus.co.kr')
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
        cy.get('.em').contains('최진환').should('be.visible') 
    
        cy.scrollTo('bottom')

    })
 
})
//시나리오로 만들어야 할 것 같음..
describe('scroll-Up', () => {
    
    it ('로그인 > 상단으로 스크롤', function() {

        cy.scrollTo('top')

    })
 
})
