describe(' 로그인 테스트', () => {

    beforeEach( () => {
        // 1. 사이트 접속
        cy.visit('/')

        // 2. 로그인 버튼 선택
        cy.contains('로그인').click()
    })
    it('이메일 로그인 테스트', () => {

        // 3. 이메일로 시작하기
        cy.contains('이메일로 시작하기').click()    

        // 4. 내용입력
        // -이메일: smilesh0728 @gmail.com 
        cy.get('input[name=email]').type('smilesh0728 @gmail.com', { delay: 100 })    

        // -비밀번호: test1234
        cy.get('#user-password').type('test1234', { delay: 100 })

        // 5. 로그인 선택
        
        cy.get('.btn').click()

    })
    
    
    it('kakao 로그인 테스트', () => {



        // 3. 카카오로 1초 만에 시작하기 선택
        cy.contains('카카오로 1초 만에 시작하기').click()

        // 4. 내용 입력

        // - 카카오톡 아이디 입력
        // - 카카오톡 비밀번호 입력 
        // 5. 로그인 버튼 선택
        



    })
})