/*
    // 입력 : prompt() , 출력 : console.log()
    1. 3개의 점수를 각 입력받아 총점 계산 하여 총점이 90 이상이면 '성공' 아니면 '실패' 출력하시오.
*/
/*
// 1.[입력/저장]
let 점수1 = Number( prompt('[1] 점수1 : ') ) ;
let 점수2 = Number( prompt('[1] 점수2 : ') ) ;
let 점수3 = Number( prompt('[1] 점수3 : ') ) ;
// 2.[연산처리] , 총점 
let 총점 = 점수1 + 점수2 + 점수3 ; 
// let 논리결과 = 총점 >= 90 ? '성공' : '실패' // 삼항연산자 
if( 총점 >= 90 ){ // if start 
    console.log(`[1] 결과 : 성공 `) // 3.[출력]
} // if end 
else{ // else start 
    console.log(`[1] 결과 : 실패 `) // 3.[출력]
}  // else end 
*/
/*
    2. 2개의 정수를 각 입력받아 더 큰수를 출력 하시오. (단] 동일한수 제외)
*/
/*
// 1.[입력/저장]
let 정수1 = Number( prompt('[2] 정수1 : ') ) ;
let 정수2 = Number( prompt('[2] 정수2 : ') ) ;
// 2.[연산처리]
// 3.[출력]
if( 정수1 > 정수2 ){ // if s 
    // 만약에 정수1 이 정수2 보다 크면 
    console.log(`[2] 결과 : ${정수1}` )
} // if e 
else{ // else s // 아니면 
    console.log(`[2] 결과 : ${정수2}` )
} // else e
*/
/*
    3. 3개의 정수를 각 입력받아 가장 큰수를 출력 하시오.  (단] 동일한수 제외)
*/
/*
let 정수1 = Number( prompt( '[3] 정수1 : ') )
let 정수2 = Number( prompt( '[3] 정수2 : ') )
let 정수3 = Number( prompt( '[3] 정수3 : ') )
let max = 정수1 // 첫번째 값을 가장큰값(max) 으로 선정 , 
if( max < 정수2 ){ max = 정수2; } // 만약에 두번째 값이 가장큰값 보다 크면 가장큰값(max)을 두번째값으로 대입 
if( max < 정수3 ){ max = 정수3; } // 만약에 세번째 값이 가장큰값 보다 크면 가장큰값(max)을 세번째값으로 대입 
    // if vs if ~ else 
    // 조건이 다수일때 if(조건1) if(조건2) if(조건3)  vs  if(조건1) ~ else if(조건2) ~ else if(조건3)
    // - 다수 조건의 다수결과 vs 다수 조건의 1개결과 
    // if if if - 각 if별 여러개 조건문  vs if ~ else if ~ else if 하나의 조건문
*/
/*
    4. 3개의 정수를 각 입력받아 오름차순 또는 내림차순 하여 정렬해서 출력하시오.  (단] 동일한수 제외) 
        A   B   C
        7   5   10 --> 오름차순 : 5 7 10  , 내림차순 : 10 7 5
        [ 1.정렬/비교 ]                                                    A      B       C
            ( 오름차순 )                                                   10     7       9
            1. A와 B 비교 해서 B가 더 작으면 B를 A와B 값 교체 A<--->B        7      10      9  교환O
                if( a < b ){ } 
            2. A와 C 비교 해서 C가 더 작으면 C를 A와C 값 교체 A<--->C        7      10      9  교환X
                if( a < c ){  }
            3. B와 C 비교 해서 C가 더 작으면 C를 B와C 값 교제 B<--->C        7      9       10 교환O
                if( b < c ) { }
            ( 내림차순 ) : 부등호 반대 , 더 크면 
        [ 2.변수 값 교환/swap ]
            - 한번에 2개 연산을 동시에 처리할수 없다. 무조건 연산은 1개씩 처리한다.
            - 변수는 *무조건* 데이터/자료 1개만 저장 ....
            - 주의할점  A = B ; A변수에 B 값 를 대입하면 기존의 A값은 사라진다.
                        A = B; B = A; // - 컴퓨터 순차처리 이므로 A값은 이미 사라졌다.  
            - swap 방법 
                임시변수 temp 활용
                let temp = A; A = B; B = temp;
*/
/*
let 정수1 = Number( prompt( '[3] 정수1 : ') )
let 정수2 = Number( prompt( '[3] 정수2 : ') )
let 정수3 = Number( prompt( '[3] 정수3 : ') )
if( 정수1 > 정수2 ){    // > : 오름차순  , < : 내림차순 
    // 만약에 뒤에있는 값이 더 작으면 스왑/교체
    let temp = 정수1;// A값을 temp 대입 
    정수1 = 정수2; // B값을 A에 대입 
    정수2 = temp; // temp값을 B에 대입 
    // A 와 B 변수간의 값은 교체 되었다.
}
if( 정수1 > 정수3 ){  let temp = 정수1; 정수1 = 정수3;  정수3 = temp; }
if( 정수2 > 정수3 ){  let temp = 정수2; 정수2 = 정수3;  정수3 = temp; }
console.log( `[4] 결과 : ${ 정수1 } ${정수2 } ${ 정수3}`)
*/

/*  5. 1개의 점수를 입력받아 90점 이상이면 'A등급' 80점이상이면 'B등급' 70점이상 'C등급' 그외 '재시험' 출력하시오. */
/*
let 점수 = Number( prompt( '[5] 점수: ') )
if( 점수 >= 90 ){ console.log('[5] 결과 : A등급'); }
else if( 점수 >= 80 ){ console.log( '[5] 결과 : B등급 '); }
else if( 점수 >= 70 ){ console.log( '[5] 결과 : C등급 '); }
else{ console.log('[5] 결과 : 재시험 '); }
// - 주의할점 : if if if  vs if ~ else if ~ else if 
*/

/*  6. 아이디와 비밀번호 입력받아 아이디가 'admin' 이고 비밀번호가 '1234' 이면 '로그인 성공' 아니면 '로그인실패' 출력하시오. */
/*
let 아이디 = prompt('[6] 아이디 : ')
let 비밀번호 = prompt('[6] 비밀번호 : ')
if( 아이디 == 'admin' && 비밀번호 == '1234' ){console.log('[6] 결과 : 로그인 성공')}
else{  console.log('[6] 결과 : 로그인 실패') } 
*/

/*   7. 과일 배열 선언하고 let fruitList = [ '바나나' , '사과' ] 하나의 과일명을 입력받아 fruitList 에 존재하는 과일이면 
    '이미 존재하는 과일입니다' 출력  아니면 배열에 입력받은 과일명 저장 하고 현재 배열을 출력하시오. */
/*
let fruitList =  [ '바나나' , '사과' ]
let 과일명 = prompt('[7] 과일명 ')
let 존재여부 = fruitList.indexOf( 과일명 ) 
// .indexOf( '찾을값' ) : 지정한 찾을값이 배열내 존재하면 찾은인덱스반환 없으면 -1 반환 함수  
// .push( 새로운값 ) : 지정한 새로운값을 배열내 마지막 인덱스 요소의 추가 함수 

// 만약에 존재여부가 -1 이 아니면(존재하지않으면) 배열내 입력받은 과일명 추가 
if( 존재여부 != -1 ){  fruitList.push( 과일명 ); console.log( 과일명 ); }  
// 아니면(존재하면)
else{ console.log('[7] 이미 존재하는 과일입니다.'); }
*/

/*  8. 주민등록번호를 입력받아서 성별이 남자이면 색상변수에 'blue' 을 여자이면 'red' 을 대입 하고 색상변수 출력하시오. */
let 주민등록번호 = prompt('[8] 주민등록번호 : ')
let 색상변수 = 'black';
// 만약에 입력받은 데이터의 ( 800420-1234567 ) 성별의 자릿수 : 8번째 자리 , 인덱스 자릿수 : 7번재 자리 
// - 문자열은 " ", ' ' , ` ` 으로 감싼 자료 , 'a'=문자 'abc'=문자열 : 컴퓨터는 문자 여러개를 어떻게 구조화??
// - 문자를 여러개 저장하면 문자배열 ---> 문자열 , C언어은 문자열을 배열로 만들기 
// - 문자 = [ 'a' , 'b' , 'c' ] , 문자 = ['유' , '재' , '석' ]
// * JS는 문자열을 배열로 취급하기 때문에 배열 함수/인덱스 를 사용할수 있다.
console.log( 주민등록번호[7] ) // 800420-1234567 -> [0]8 [1]0 [2]0 [3]4 [4]2 [5]0 [6]- [7]1 [8]2 [9]3 [10]4 [11]5 [12]6 [13]7
if( 주민등록번호[7] == 1 || 주민등록번호[7] == 3 ){
    // 만약에 주민등록번호의 8번재자리(7인덱스) 값이 1 또는 3 이면 남자
    색상변수 = 'blue'
}else{ // 아니면 
    색상변수 = 'red'
}
console.log( `[8] 결과 : ${ 색상변수 }`)
// * 응용 *
let outHTML = `<h3 style = 'color : ${ 색상변수 } ' > ${ 주민등록번호 } </h3>`
document.write( outHTML )

/*
    9. 가위바위보 게임 
    조건1 : 가위 0 , 바위 1 , 보 2 입니다.
    조건2 : 플레이어 2 명 입니다.
    실행조건 : 각 플레이어가 가위바위보 중에 한번씩 입력받기 
    출력조건 : 
    플레이어1 이겼을때 '플레이어1 승리' 출력 하시오.
    플레이어2 이겼을때 '플레이어2 승리' 출력 하시오.
    비겼을경우 '무승부' 출력 하시오.

    10. 좌석 3개의 상태를 가지는 배열 선언하고 let sheetList = [ 'O' , 'X' , 'O' ]
        하나의 좌석 순서번호를 입력받아 빈좌석 이면 '예약성공' 아니면 '예약불가' 출력하시오.
        빈좌석 : 'X'  사용중인좌석 : 'O'

    11 : 주차장 차량 검색대
        조건1 : let carArray = [ '250어7142' , '142가7415' ]  : 차량번호
        조건2 : let locationArray = [ 'A1' , 'B3' ]           : 주차위치
        조건3 : carArray, locationArray 인덱스가 같은 정보의 차량
        조건4 : 차량번호 입력받아 내 차량 위치 찾기 
*/