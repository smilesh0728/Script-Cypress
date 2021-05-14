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
        cy.visit('https://qa.fastcampus.co.kr/edu_career_mktg')

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

    //API로 수강신청상태인지 확인해서 수강신청 상태이면 분기를 통해 스킵되어야 함..
    //URL을 가져와서 Product ID를 알아야 함..
    it('수강신청서 제출 누르기', function () {
        cy.wait(3000)
        cy.get('.btn__flex').contains('수강신청서 제출').click({force: true})
    })
    it('수강신청취소하기 ', function() {
        cy.visit('/')

        //로그인 페이지로 이동하는 PATH
        cy.contains('로그인').click()
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

        //홈화면으로 이동하였는지 확인
        //기대결과
        cy.get('.em').contains('최진환').should('be.visible')
        cy.contains('배우면 바뀐다').click()
        cy.get(':nth-child(2) > .nav-utils__a').click()
        
        //수강신청 취소하기 선택
        cy.get('.vn-enrollment__payment__func > .vn-mypage__more').click({force: true})
        cy.get('.btn-group > .btn').click()
    })

})
