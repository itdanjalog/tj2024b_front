// - new Date() 현재 시스템(PC) 의 날짜/시간 반환 객체
// - new Date( 연도 , 월 , 일 ) 지정한 연도월일에 해당하는 날짜 객체 
console.log( new Date() ) // Wed Dec 04 2024 10:33:15 GMT+0900 (한국 표준시)
console.log( new Date().getFullYear() ) // 2024
console.log( new Date().getMonth() ) // 11 , 0:1월 11:12월
console.log( new Date().getDate() ) // 4 
console.log( new Date( 2023 , 4 , 20 ) ) // Sat May 20 2023 00:00:00 GMT+0900 (한국 표준시)

// 전역변수 : 특정한 { } 안에서 선언되지 않은 변수 , 선언이란? 만들기/정의 , let , const , function 
let today = new Date(); 
let year = today.getFullYear(); // 오늘의 연도 
let month = today.getMonth()+1; // 오늘의 월 , +1 하는이유 : 12월이 11로 반환이 되기 때문에 

// [1] 달력 출력함수  , 실행조건 : js가 실행될때 , 월변경될때마다
calPrint(); // js가 실행될때 최초 1번 함수 실행 
function calPrint(){ // 함수의 매개변수 : X , 리턴값 : X
    // (1) 상단의 달력 연도/월 표시 
        // - 어디에
        let h6 = document.querySelector('#calTop > h6 ') 
        // - 무엇을 
        let html = `${year}년 ${month}월`
        // - 출력 
        h6.innerHTML = html;
    // (2) 하단의 현재 연도/월의 일 표시 
    return; // [함수 종료] 함수가 종료 되면서 반환되는 값 , 값이 없을경우 return 생략이 가능 
} // f end 

// [2] 월 변경함수 ( 이전달 , 다음달 ) , 실행조건 : [◀]또는[▶] 버튼을 클릭했을때 
function monthChange( changeMonth ){  // 함수의 매개변수 : 이전달/다음달 식별데이터 , 리턴값 
    console.log( changeMonth );
    // 1. 매개변수에 따른 월 수정 
    month += changeMonth;
    // 2. 월은 최소 1월 부터 12월 까지 , 
    if( month < 1 ) { // 만약에 월이 1보다 미만이면 연도를 -1차감 , 월 12 
        year--; month = 12;
    }
    // 만약에 월이 12보다 초과이면 연도를 +1증가 , 월 1
    if( month > 12 ){
        year++; month = 1 
    }
    // - 날짜 변화에 따른 새로고침(출력함수 재실행 )
    calPrint();  
    return; // [함수 종료] 
} // f end 

