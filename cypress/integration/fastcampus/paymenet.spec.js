describe('결제 테스트', function () {

    //마케팅 브랜치 페이지로 이동한다.
    it('상품페이지로 이동', function () {
        //Staging의 상품페이지로 이동 -> qa에는 없는 경우가 있음
        //TODO
        //상품 페이지를 테스트 데이터로 생성 필요
        //
        //TODO
        //GNB로 들어가는 방법을 현재 찾지 못해 직접 상품페이지로 이동했음.
        //
        cy.visit('https://staging.fastcampus.co.kr/mktg_online_digitmktg')

        //브랜치 페이지로 이동
        //수강신청 누르기
    })
    it('수강신청 누르기', function () {
        cy.get('.vn-purchase__btn').click()
        cy.url().should('include', 'auth')
    })

    it('로그인하기', function () {
        cy.contains('이메일로 시작하기').click()

        // 아아디 & 비밀번호
        //테스트 데이터에서 가져오도록 구현 필요
        //유지보수를 위해서는 별도 모듈에서 관리 필요 
        cy.get('form').within(($form) => {
            cy.get('input[name=email]')
                .type('jinhwan.choi@fastcampus.co.kr', { delay: 100 })
                .should('have.value', 'jinhwan.choi@fastcampus.co.kr')

            cy.get('input[name=password]')
                .type('test1234')

            cy.root().submit()

        })

    })


})
