// 매개변수 : parameter , 매개( 중매 매 - 양쪽 관계 맺기 ) 
// 인자값/인수 : 들어갈 인 , 인자값 - 변수  
// 매개변수 ? 함수 호출시 인자값을 변수에 대입되는 변수 

// (1) 함수 만들기/정의 한다
// [1] 매개변수 x , 반환값 x 
function func1( ){ console.log('func1 execute '); }

// [2] 매개변수 o , 반환값 x , console.log( ) , document.write( ) 등등
function func2( x , y ){ console.log(`func2 execute ${x+y}` ) }

// [3] 매개변수 o , 반환값 o , prompt( ) 등등
function func3( x , y ){ 
    console.log(`func3 execute`); 
    let result = x+y; 
    return result; 
}
// [4] 매개변수 x , 반환값 o
function func4( ){ console.log('func4 execute'); return 10; }

// (2) 함수 호출 
func1() // 인자값도 없고 리턴값도 없는 함수 호출/사용 
func2( 1 , 2 ) // 인자값이 1과2 가 있고 리턴값은 없는 함수 호출/사용 
func3( 10 , 20 ) // 인자값이 1과2 가 있고 리턴값은 있는 함수 호출/사용 , 
let result = func3( 1 , 2 ) // 함수 결과를 다음코드에서 사용 할 예정이라면 변수에 대입
let result4 = func4( ) // 인자값이 없고 리턴값이 있는 함수  호출/사용 

/*

    - 변수  : 하나의 자료를 저장하는 메모리 공간 
        'a' 상자에 10를 저장하고 있다. 
        ----------------
        |               |
        |      10       |
        |               |
        |_______________|

    - 함수 : 미리 정의된 코드(명령어)들을 저장하는 메모리 공간 
        a =  , b =          <--------- 인자값 , 매개변수 
        ---    ----------
        |               |
        |     y=a+b     |   <----------- 실행문 
        |               |
        |_________   ___|
                  y =       <------------ 리턴값 , 결과값 
    
    - 자판기 함수 
        매개변수 : 돈 , 제품를클릭한버튼번호 ----> 어쩌구저쩌구 ----> 리턴값 : 제품 , 잔돈 

    간단한 과제
        1. 함수 표현 하는 시각화 
        2. 믹서기함수/자판기함수 빼고 생활속 함수 구조를 닮은 구조 시각화 ( 매개변수 / 리턴값 )
        
*/











