/* - 세션/쿠키 이용한 회원가입/로그인 구현 */


// [1] 회원가입 함수 정의 
    // - 함수를 언제 사용할껀지 ?   [회원가입]버튼 클릭했을때 
    // - 함수의 인자값(매개변수) ?  X
    // - 함수의 리턴값(반환) ?      X
function 회원가입함수( ){
    // 1. [입력]
    let id = document.querySelector('.signId').value; // 각 INPUT 의 value 가져오기 
    let pw = document.querySelector('.signPw').value; // 각 INPUT 의 value 가져오기 
    // 2. [처리]
    let member = { 'id' : id , 'pw' : pw }; // 입력받은 값으로 객체 생성     

        // * 회원목록정보를 전역변수에 선언하지 않고 세션/쿠키 호출 
        // 왜? JS외부 (브라우저)에 저장하면 JS가 새로고침/변화가 있어도 저장 상태 유지 
        // - (1) 현재 회원정보를 저장하기 위한 회원정보목록을 세션에서 가져오기.
        let memberList = sessionStorage.getItem( 'memberList' );
        console.log( memberList ); // 존재하지 않는 'key' 호출하면 null 반환된다.
        // - (2) 회원정보목록이 존재하면 존재하지 않으면 
        if( memberList == null ){
            //만약에 가져온세션데이터(memberList)가 null(없다면) 이면
            memberList = []; // 빈 배열 생성하여 변수에 대입한다. 
        }else{// 가져온세션데이터(memberList) 가 존재하면 
            // 문자열 ---> 객체(JSON) 으로 변환
            memberList = JSON.parse( memberList );
        }
        console.log( memberList );

        // 배열에 입력받은 객체 저장 
        memberList.push( member ); console.log( memberList );
        
        // - 변화가 있는 배열을 세션/쿠키 다시 저장( 새로고침 )
        // - (1) key와value 구성된 세션 정보를 저장하는데 value값을 ( 배열-> 문자열 ) 타입으로 변환하여 저장한다.
        sessionStorage.setItem( 'memberList' , JSON.stringify( memberList ) )
        
    // 3. [출력]

    return; // 함수 종료 // 값 없을때는 생략 가능.

} // f end 