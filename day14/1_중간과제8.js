/*
    실습 : 비회원제 게시판 구현하기 

    [요구사항]
        - 하나의 HTML에서 작업 
        1. 게시물 등록 : 비회원제 이므로 제목,내용,비밀번호 입력 받아 등록 처리  
        2. 게시물 전체 출력 : 날짜(작성일),제목,조회수 순으로 전체 게시물을 출력 해주세요.
        3. 게시물 (1개)상세 출력 : 전체출력화면에서 특정한 제목을 클릭시 클릭한 게시물의 상세 정보를 보여주세요.
            상세 정보 : 날짜,제목,조회수,내용    / 조회수 : 상세 정보 조회수 1증가 
        4. 게시물 삭제 : 상세 출력 화면에서 삭제 버튼 클릭시 비밀번호를 입력받아 일치하면 삭제 처리 
        5. 게시물 수정 : 상세 출력 화면에서 수정 버튼 클릭시 비밀번호를 입력받아 일치하면 새로운 내용를 입력받아 수정 처리 

    [ CRUD ] C(create) r(read) u(update) d(delete) : 기본 베이스 
        등록        , 출력 ,        수정                , 삭제 
        회원가입     마이페이지      회원수정              회원탈퇴
        제품등록     제품목록        제품수정               제품삭제
        게시물쓰기   게시물목록       게시물수정            게시물삭제
        쪽지보내기   받은쪽지보기     쪽지읽은상태수정       쪽지삭제

    [개발순서]
        1. HTML : 프론트엔드 와이어프레임/프로토타입 구성
        2. JS : 그 구성된 화면과 요구사항에서 필요한 메모리/데이터 구성
        3. JS : 요구사항에 따라 구현할 기능/함수 구성 , 함수별 비지니스로직 구성
        4. HTML/JS 연동 
        5. 테스트
        6. 유지보수

    [1] HTML 작성 
    [2] 구현할 페이지 메모리 구성 
        - 제목 , 내용 , 비밀번호 , 작성일 , 조회수 필드/속성 값을 기록/저장 
        방법1] 각 속성별 배열 선언한다.
        let 제목목록 = [ '첫번째 게시물 제목' , '두번째 게시물 제목' , '세번째 게시물 제목' ]
        let 내용목록 = [ '첫번째 게시물 내용' , '두번째 게시물 내용' , '세번째 게시물 내용' ]
        let 비밀번호목록 = [ '1234' , '4567' , '7891' ]
        let 작성일목록 = [ '2024-11-26' , '2024-11-27' , '2024-11-28' ]
        let 조회수목록 = [ '3' , '2' , '0' ]
        
        방법2] 각 속성별 하나의 문자열로 구성하여 구성된 문자열을 하나의 배열에서 관리 한다.
            [ CSV 란 ] : 여러개의 값들을 쉼표(,) 로 구분한 텍스트(문자열)
                - 주의할점 데이터 자체의 ,가 존재하면 문제가 발생할수 있다.
                - 배열의 요소 ,(쉼표) / csv의 ,(쉼표) 
                - 값을 다시 구분할때는 문자열 함수 , 문자열.split(',') 이용한 분해 가능
            첫번째게시물 : '첫번째 게시물 제목,첫번째 게시물 내용,1234,2024-11-26,3'
            두번째게시물 : '두번째 게시물 제목,두번째 게시물 내용,4567,2024-11-27,2'
            세번째게시물 : '세번째 게시물 제목,세번째 게시물 내용,7891,2024-11-28,0'

        (1) 하나의 문자열(게시물) 들을 여러개 구성하여 배열 저장 
        let 게시물목록 = [ '첫번째 게시물 제목,첫번째 게시물 내용,1234,2024-11-26,3' ,  
                          '두번째 게시물 제목,두번째 게시물 내용,4567,2024-11-27,2',
                          '세번째 게시물 제목,세번째 게시물 내용,7891,2024-11-28,0' ]

        (2) 하나의 문자열(게시물) 들을 \n 으로 구분하여 또 하나의 문자열에 구성 
        let 게시물목록 = '첫번째 게시물 제목,첫번째 게시물 내용,1234,2024-11-26,3\n
                        두번째 게시물 제목,두번째 게시물 내용,4567,2024-11-27,2\n
                        세번째 게시물 제목,세번째 게시물 내용,7891,2024-11-28,0'
    [3] 함수/기능 구성 
        1. 등록함수 : [등록] 버튼 클릭시 입력받은 3개값(제목,내용,비밀번호)를 JS 가져와서 배열에 저장 함수, . push 
        2. 출력함수 : 배열내 변화(최초실행1번/등록/삭제/수정) 있을경우 배열내 모든 정보(게시물)를 출력하는 함수,  . length
        3. 삭제함수 : [삭제] 버튼 클릭시 비밀번호를 입력받아서 현재 상세게시물의 비밀번호 와 일치하면 배열내 해당 게시물 삭제 함수, .splice
        4. 수정함수 : [수정] 버튼 클릭시 비밀번호를 입력받아서 현재 상세게시물의 비밀번호 와 일치하면 새로운 내용를 
                      입력받아 해당 게시물 내용 수정 함수 , 배열명[index]=새로운값
*/
// [1] 게시물들을 관리할 배열 선언 , 3개정도 샘플 데이터 초기화  , 전역변수o(JS가 실행될때 1번 선언) vs 지역변수X:{}가 실행될때마다 선언
let 게시물목록 = [ "첫번째 게시물 제목,첫번째 게시물 내용,1234,2024-11-26,3" ,  
    "두번째 게시물 제목,두번째 게시물 내용,4567,2024-11-27,2",
    "세번째 게시물 제목,세번째 게시물 내용,7891,2024-11-28,0" ]

// [2] 등록함수  , 실행조건 : [등록]버튼 클릭시 
function 등록함수( ){  console.log('등록함수 실행');
    // 1. 입력/저장 , document.querySelector('선택자').value
        // 각 class별 input 마크업에 입력된 value 값 가져오기
    let title = document.querySelector('.title').value;     //console.log( title );
    let content = document.querySelector('.content').value;   //console.log( content );
    let password = document.querySelector('.password').value;  //console.log( password );
            // 오류 : Cannot read properties of null (reading 'value')
            // 이유 : HTML과 JS에 입력한 선택자가 일치하지 않을경우 , value속성이 없는 마크업 , 오타
    // 2. 처리 ,  입력받은값들과 날짜/조회수 하나의 문자열(CSV)구성 -> 배열 저장 .push
        // (1) 사용자에게 입력받지 않고 로직에서 초기화 해주는 변수
    // 원하는 날짜 또는 시간 구성하기 
        // - 현재 날짜/시간 기능를 제공하는 객체를 변수에 저장 
    let nowDate = new Date()  // 현재 날짜/시간 제공하는 객체 생성 
    let nowYear = nowDate.getFullYear() // 현재 연도 반환 함수
    let nowMonth = nowDate.getMonth()+1; // 현재 월 반환 함수 , +1 , 0(1월) 11(12월)
    let nowDay = nowDate.getDate() // 현재 일 반환 함수 
    let date = `${nowYear}-${nowMonth}-${nowDay}`;  // 작성일, 일반적으로 게시물 등록시 현재 시스템 날짜를 사용.
    //console.log( date );
    
    let view = 0; // 조회수 , 일반적으로 게시물 등록시 게시물 조회수는 0부터 시작 
    //console.log( view );
        // (2) 5개의 변수들을 하나의(CSV형식)문자열 로 구성
    let board = `${title},${content},${password},${date},${view}`; // `백틱 문자열 템플릿
    //console.log( board );    
        // (3) 구성된 CSV문자열을 배열 저장 , .push
    게시물목록.push( board ); // console.log( 게시물목록 );
    // 3. 출력 , 출력함수 실행 
    출력함수(); // 변수호출 : 변수명  , 함수호출 : 함수명()
} // f end 

// [3] 전체 출력 함수  , 실행조건 : js열렸을때최초1번 실행 , 등록/삭제/수정 처리 성공시 실행 
출력함수( );
function 출력함수( ){
    // (1) 어디에 , table > tbody ,  document.querySelector(선택자)
    let tbody = document.querySelector( 'table > tbody')
    // (2) 무엇을 , 배열 요소들의 정보를 html 구성해서 
    let html = ''
        // - 배열내 요소 순회( 배열내 모든 요소를 반복해서 하나씩 꺼내기 )
        for( let index = 0 ; index <= 게시물목록.length - 1 ; index++ ){
            // index는 0부터 마지막인덱스까지 1씩 증가 반복 
            let board = 게시물목록[index]; // 하나의 게시물 게시물목록[0] 게시물목록[1] 게시물목록[2]
            // 하나의 게시물을 csv 구성 했기 때문에 게시물정보 분해
            // 문자열.split('기준문자') : 문자열내 기준문자으로 분해해서 분해된 결과를 배열 반환 함수
            let info = board.split(',') // csv 형식은 ,(쉼표)로 구분했기 때문에 ,(쉼표) 다시 분해한다.
                // info[0] = 제목 , info[1] = 내용 , info[2] = 비밀번호 , info[3] = 날짜 , info[4] = 조회수 
            // 각 정보들을 HTML 과 연동해서 작성하기 
            html += `<tr>
                        <td> ${ info[3] } </td>
                        <td> <a href="#" onclick="상세출력함수( ${ index } )">${ info[0] }</a> </td>
                        <td> ${ info[4] } </td>
                    </tr>`; // 변수 += 값  vs 변수 = 변수 + 값  , 기존변수에 새로운 값을 누계/연결 
            //console.log( html );
        } // for end 
    // (3) 출력 ,.innerHTML
    tbody.innerHTML = html; // 변수 = 새로운값 ,  .변수 = 새로운값 
} // f end 

// [3] 상세 출력 함수 , 실행조건 : 전체출력화면에서 특정한 제목을 클릭했을때
function 상세출력함수( index ) { // index : 매개변수 , 상세 출력할 배열의 인덱스를 받기 
    console.log('상세출력함수 실행'); console.log( index );
    // 1. 어디에 , document.querySelector() 
    // 2. 무엇을 , 배열 정보를 HTML 로 구성 , 선택한 게시물 인덱스의 정보를 , index 
    let board = 게시물목록[ index ];    // (1) 선택한 인덱스의 게시물 호출 
    let info = board.split(',')                 // (2) 게시물 문자열 ,(쉼표) 기준으로 분해 
        // info[0] = 제목  info[1] 내용 info[2] 비밀번호 info[3] 작성일 info[4] 조회수 
    // 3. 출력  , innerHTML 
    document.querySelector('.titleBox').innerHTML = info[0]; // 제목 데이터를 .titileBox 마크업 사이에 에 대입 
    document.querySelector('.contentBox').innerHTML = info[1]; // 내용 데이터를 .contentBox 마크업 사이에 대입 
    document.querySelector('.dateBox').innerHTML = info[3]; // 작성일 데이터를 .dateBox 마크업 사이에 대입 
    document.querySelector('.viewBox').innerHTML = info[4]; // 조회수 데이터를 .viewBox 마크업 사이에 대입 
} // f end 

// [4] 삭제함수  , 실행조건 : [삭제]버튼 클릭시 
function 삭제함수( ){ }

// [5] 수정함수  , 실행조건 : [수정]버튼 클릭시 
function 수정함수( ){ }
