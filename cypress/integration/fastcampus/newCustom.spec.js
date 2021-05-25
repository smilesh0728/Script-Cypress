
describe('회원가입 테스트', () => {

    it('이메일로 신규 회원 가입', () => {

        // 1. 사이트 접속
        cy.visit('https://fastcampus.co.kr');
        
        // 2. 회원가입 버튼 선택
        cy.contains('회원가입').click();
        
        // 3. 내용 입력
        // TO-DO
        //Test Data를 가져오도록 구현이 필요한 부분임...  
        //객체로 가져와서 하나씩 빼서 넣으면 될 듯함..

        // - 이름 : 홍길동
        cy.get('#user-name').type('홍길동');
        
        // - 이메일 : newcustom-001@gmail.com
        cy.get('#user-email').type('newcustom-001@gmail.com');
        
        // - 인증메일 발송
        cy.get('#btn-request-email-secret').contains('인증메일 발송').click();
        
        // - 인증번호 입력 (이메일가서 확인)
        /* 인증번호를 서버에서 가져오는 방법으로 구현 필요 
        //
        //
        //
        */
        // 값을 가져올 때까지 대기하도록 구현해야함.
        const verfityCode = 1234;
        cy.get('#email-verification').type(verfityCode);

        // - 인증하기 선택
        cy.get('#btn-confirm-email-secret').click();

        // - 휴대폰 번호 : 010-1234-5678
        cy.get('#user-phone').type('010-1234-5678');

        // - 비밀번호 : test1234!
        cy.get('#user-password').type('test1234!');

        // - 비밀번호 확인 : test1234!
        cy.get('#user-password-again').type('test1234!');
        
        // 4. 전체 동의 체크 
        cy.get('.vn-check__label').click();
       
        // 5. 회원 가입하기 버튼 선택
        cy.contains('회원가입하기').click()

    })
    it('카카오로 신규 회원 가입', () => {

        //TO-DO

    })
})