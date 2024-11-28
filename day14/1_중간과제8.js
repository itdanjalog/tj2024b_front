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
*/