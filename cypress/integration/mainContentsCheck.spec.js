describe('메인 컨텐츠 체크 테스트',function(){

    beforeEach(() => {
        // 사이트 접속
        // 환경과 서비스명을 이용해서 사이트 접속하도록 구현 필요
        cy.visit('https://qa.coloso.co.kr')
    })


    it ('메인 > 영상 디자인', function() {

        // 카테고리 선택
        //페이지 방식으로 구현 필요
        //페이지의 리스트를 불러온 후 있는 경우와 없는 경우를 구분해서 동작 필요..
        cy.get('.category-menu__caption')
            .contains('영상 디자인')
            .click({force: true})
            //click 에러가 발생하여 강제로 True로 만들었음.

        //Validation
        cy.get('.container').contains('MEDIA DESIGN').should('be.visible') 

    })
    it ('메인 > 일러스트', function() {
        cy.get('.category-menu__caption')
            .contains('일러스트')
            .click({force: true})
            //click 에러가 발생하여 강제로 True로 만들었음.

        //Validation
        cy.get('.container').contains('ILLUST').should('be.visible') 

    })
    it ('메인 > 쿠킹', function() {
        cy.get('.category-menu__caption')
            .contains('쿠킹')
            .click({force: true})
            //click 에러가 발생하여 강제로 True로 만들었음.

        //Validation
        cy.get('.container').contains('COOKING').should('be.visible') 

    })

})