describe('메인화면 URL 링크 확인', function () {

    beforeEach(() => {
        cy.visit('/')
    })

    it('회사소개 페이지 이동', function () {
        cy.scrollTo('bottom')

        cy.contains('회사소개').click()
        cy.url().should('include', '/about')
    })

    it('이용약관 페이지 이동', function () {
        cy.scrollTo('bottom')

        cy.contains('이용약관').click()
        cy.url().should('include', '/service')
    })

    it('개인정보처리방침 페이지 이동', function () {
        cy.scrollTo('bottom')

        cy.contains('개인정보처리방침').click()
        cy.url().should('include', '/privacy')
    })
    it('취소/환불 정책 페이지 이동', function () {
        cy.scrollTo('bottom')

        cy.contains('취소/환불 정책').click()
        cy.url().should('include', '/refund')
    })

    it('자주 묻는 질문 페이지 이동', function () {
        cy.scrollTo('bottom')

        cy.contains('자주 묻는 질문').click()
        cy.url().should('include', '/faq')
    })

    it('공지사항 페이지 이동', function () {
        cy.scrollTo('bottom')

        cy.contains('공지사항').click()
        cy.url().should('include', '/notices')
    })
    

    it('강사지원 페이지 이동', function () {
        cy.scrollTo('bottom')

        cy.contains('강사지원').click()
        cy.url().should('include', '/instructor_apply')
    })
    

})