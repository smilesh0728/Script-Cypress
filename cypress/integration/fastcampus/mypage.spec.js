describe('마이페이지동작확인', function () {

    it('정상적인 아이디로 로그인', function () {
        // 사이트 접속
        // 환경과 서비스명을 이용해서 사이트 접속하도록 구현 필요

        cy.visit('/')

        //로그인 페이지로 이동하는 PATH
        cy.contains('로그인').click()
        cy.contains('이메일로 시작하기').click()

        // 이메일을 입력한다. 
        // DB에서 가져오는 구조로 구현 필요
        cy.get('input[name=email]')
            .type('jinhwan.choi@fastcampus.co.kr', {
                delay: 100
            })
            .should('have.value', 'jinhwan.choi@fastcampus.co.kr')

        // 비밀번호를 입력한다.
        // DB에서 가져오는 구조로 구현 필요
        cy.get('input[name=password]')
            .type('test1234')
            
        //로그인 버튼을 누른다.
        cy.get('.btn').click()

        //홈화면으로 이동하였는지 확인
        //기대결과
        cy.get('.em').contains('최진환').should('be.visible')
        cy.contains('배우면 바뀐다').click()
        cy.get(':nth-child(2) > .nav-utils__a').click()

        //목록을 가져와서 하나씩 누르는 기능을 만들어야 함.



    })
})