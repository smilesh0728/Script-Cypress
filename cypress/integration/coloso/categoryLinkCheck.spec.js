describe('카테고리 링크 테스트', function () {

    it('카테고리 > 헤어', function () {
        // 사이트 접속
        // 환경과 서비스명을 이용해서 사이트 접속하도록 구현 필요

        cy.visit('https://qa.coloso.co.kr')


        // 카테고리 선택
        //페이지 방식으'로 구현 필요
        cy.get('.nav-menu__item')
            .contains('카테고리')
            .click()
        cy.log('카테고리 클릭')

        cy.get('.nav-menu__a').contains('헤어').click()

        //Validation
        cy.get('h2.catalog-title').contains('헤어 클래스').should('be.visible')


    })
    it('카테고리 > 쿠킹', function () {
        // 사이트 접속
        // 환경과 서비스명을 이용해서 사이트 접속하도록 구현 필요

        cy.visit('https://qa.coloso.co.kr')

        // 카테고리 선택
        //페이지 방식으로 구현 필요
        cy.get('.nav-menu__item')
            .contains('카테고리')
            .click()

        cy.get('.nav-menu__a').contains('쿠킹').click()

        //Validation
        cy.get('h2.catalog-title').contains('쿠킹 클래스').should('be.visible')


    })
    it('카테고리 > 영상 디자인', function () {
        // 사이트 접속
        // 환경과 서비스명을 이용해서 사이트 접속하도록 구현 필요

        cy.visit('https://qa.coloso.co.kr')

        // 카테고리 선택
        //페이지 방식으로 구현 필요
        cy.get('.nav-menu__item')
            .contains('카테고리')
            .click()

        cy.get('.nav-menu__a').contains('영상 디자인').click()

        //Validation
        cy.get('h2.catalog-title').contains('디자인 클래스').should('be.visible')


    })
    it('카테고리 > 일러스트', function () {
        // 사이트 접속
        // 환경과 서비스명을 이용해서 사이트 접속하도록 구현 필요

        cy.visit('https://qa.coloso.co.kr')

        // 카테고리 선택
        //페이지 방식으로 구현 필요
        cy.get('.nav-menu__item')
            .contains('카테고리')
            .click()

        cy.get('.nav-menu__a').contains('일러스트').click()

        //Validation
        cy.get('h2.catalog-title').contains('일러스트 클래스').should('be.visible')


    })
    it('카테고리 > 크리에이티브', function () {
        // 사이트 접속
        // 환경과 서비스명을 이용해서 사이트 접속하도록 구현 필요

        cy.visit('https://qa.coloso.co.kr')

        // 카테고리 선택
        //페이지 방식으로 구현 필요
        cy.get('.nav-menu__item')
            .contains('카테고리')
            .click()

        cy.get('.nav-menu__a').contains('크리에이티브').click()

        //Validation
        cy.get('h2.catalog-title').contains('크리에이티브 클래스').should('be.visible')

    })
    it('카테고리 > 크리에이티브', function () {
        // 사이트 접속
        // 환경과 서비스명을 이용해서 사이트 접속하도록 구현 필요

        cy.visit('https://qa.coloso.co.kr')

        // 카테고리 선택
        //페이지 방식으로 구현 필요
        cy.get('.nav-menu__item')
            .contains('카테고리')
            .click()

        cy.get('.nav-menu__a').contains('라이프스타일').click()

        //Validation
        cy.get('h2.catalog-title').contains('라이프스타일 클래스').should('be.visible')

    })
})