describe('로그아웃 동작 확인', function () {
/*
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
    })
*/
    it('카테고리 이동', function () {
        cy.visit('/')
        //cy.get('#nav-flyout-ya-signin').invoke('show');
        //click on the hidden element
        cy.wait(2000)
        cy.get('#nav > div:nth-child(1) > div > ul > li:nth-child(1) > a').click({force: true})
        cy.contains('수강 신청하기').click()
    })

    it('한번 더 로그인', function () {
    cy.contains('이메일로 시작하기').click()

    // 이메일을 입력한다. 
    // DB에서 가져오는 구조로 구현 필요
    cy.get('input[name=email]')
        .type('jinhwan.choi@fastcampus.co.kr', { delay: 100 })
        .should('have.value', 'jinhwan.choi@fastcampus.co.kr')

    // 비밀번호를 입력한다.
    // DB에서 가져오는 구조로 구현 필요
    cy.get('input[name=password]')
        .type('test1234')

    //로그인 버튼을 누른다.
    cy.get('.btn').click()
    })


})