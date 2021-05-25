describe('GNB 메뉴 이동을 확인', () => {

    // 사전 조건
    beforeEach('사이트접속', () => {
        cy.visit('https://fastcampus.co.kr');
    })

    it('카테고리 서브 메뉴 확인', () => {

        // cy.get('.nav-menu__d1').contains('카테고리').click({force: true})
        cy.get('#nav > div:nth-child(1) > div > ul > li:nth-child(1) > a').click({force: true})

        cy.get('h5.container__title').should(($className) => {
            expect($className, '3 items').to.have.length(8)
            expect($className.eq(0), 'first item').to.contain('요즘 가장 사랑받는 프로그래밍 인기강의')
            expect($className.eq(1), 'second item').to.contain('오늘이 최저가! 이달의 신규 강의')
            expect($className.eq(2), 'third item').to.contain('하루 10분 온라인으로 배우는 현업 프로그래머들의 노하우')
            expect($className.eq(3), 'four item').to.contain('업계 Top-tier에게 직접 전수받는 경험적 인사이트')
          })


    })
})