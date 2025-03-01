// 변수 선언 방식
//*변수 이름은 id 같은 것임.(중복x)

//let - 변수를 선언, 나중에 변수값을 덮어씌울수 있음.
//var - let의 옛날버전. let과 작동원리는 같으나 호이스팅과 같은 문제가 있음. (안쓰는게 좋음)
//const - 변수에 한번 값을 할당하면 다시 값을 바꿀 수 없음.

//# 수학과 달리 =는 오른쪽에 있는 값을 왼쪽 변수에 '넣는' 개념으로 이해하기 .

//배열

// pop() : 배열 끝에있는 아이템을 제거, 그 아이템값을 리턴
// push(‘아이템’): 배열 끝에 아이템 추가, 배열의 최종 길이 리턴
// includes(‘아이템’): 배열에 아이템이 포함되어있으면 true리턴 아니면 false 리턴
// indexOf(‘아이템’): 아이템의 인덱스 번호를 리턴
// slice(시작점, 끝점): 시작점~끝점(미포함) 까지 배열을 복사해서 리턴
// splice(시작점,개수): 시작점부터 개수만큼 실제 배열에서 아이템 제거
// length : 배열 함수는 아니지만 배열의 크기를 리턴해주는 속성

//함수

// 함수 생김새

// function 함수이름 (매개변수) {
//     내용입력
//     return 반환
// }

// 매개변수: 함수에 전달해야되는 내용이 있을때, 이 함수가 실행될때 알아야되는 내용이 있을 때 매개변수를 통해 전달한다
// return: 반환값, 함수 완료 후, 반환되야하는 값이 있을 때 사용한다

// 예시

// function greet(firstName,lastName){
//     console.log("hello",firstName,lastName,"Welcome to our website")
// }

// greet("Noona","Kim")
// 함수는 반드시 불러야 실행된다

// 함수의 또다른 이름들

// method: 메서드, 함수와 같은 뜻이다
// 익명함수 Anonymous function : 이름이 없는 함수. function (y) {console.log(y)}. 함수를 변수에 넣어줄때, 일시적으로 쓰이고 말 함수들에 대해선 익명함수로 만들어준다
// 람다식 함수: => 를 사용하여 함수를 정의하는 경우이다.(이건 곧 배울 예정이다.) let arrowFunc = (y) => { console.log(y); }
// 콜백함수 : 다른 함수의 매개변수로 전달된 함수.

// 예시

// button.addEventListenr("click",setCount)
// // 버튼에 클릭 이벤트가 발생했을때 setCount함수를 콜을 한다
// function setCount() {
//     count++
// }

// 콜백은 말그대로 부른다는 뜻이다. 주로 어떤 함수에 매개변수로 들어가 어떤 특정한 조건이 되었을때만 호출이된다 (클릭이벤트나 타이머이벤트 등등)

//Math 함수의 종류

// Math.random(): 0~1사이의값을 반환 (1에 근접한값까지지만 1은미포함이다)
// Math.floor():소수점 버림이다
// Math.ceil():소수점 올림이다
// Math.round():소수점 반올림
// Math.max():여러개의 값중 제일 큰값반환
// Math.min():여러개의 값중 제일 작은값 반환

// Element selectors

// 자바스크립트가 HTML을 가져와서 다루기 위해선 원하는 HTML태그를 선택해야하는데, document객체에서 다양하게 선택하는방식을 제공.

// document.getElementById : id로 선택
// document.getElementsByClassName: class로 선택, 같은class가 여러개 있을 경우엔 모두 다 선택이 되서 배열에 저장된다

// document.querySelector : id, class둘다 선택이 가능하고 좀더 디테일한 선택이 가능하다 참고로 선택가능한 값이 여러개가 있을경우 그중에 첫번째 태그 하나만 반환한다

// let userInput = document.querySelector("#user-input"); // id=user-input을 선택
// let resultAreaImg = document.querySelector(".main-img");// class=main-img를 선택
// let menus = document.querySelector("nav a")// nav태그밑에있는 a태그를 선택 
// document.querySelectorAll: 위에 document.querySelector와 같다 하지만 All에서 알수있듯이 선택된값 모두를 NodeList에 담아 반환한다

//다양한 노드의 속성값

// textContent : 노드의 text값을 반환(글자만)
// innterText: 노드의 text값을 반환(띄어쓰기 후 글자만) textContent랑 비슷하지만 textContent는 모든 요소를 반환하는 반면 innerText는 사람이 읽을 수 있는 요소만 가져옴 (글자사이에 스페이스가 많다면 textContent 있는 그대로 가져오는 반면 innerText는 스페이스를 한칸만 남기고 가져온다)
// innerHTML: html 요소를 반환한다(태그까지 그대로)

//ES6/ 템플릿 리터럴(Template literal)

// 새로운 문자열 표기법. 템플릿 리터럴은 일반 문자열과 비슷해 보이지만, ‘ 또는 “ 같은 통상적인 따옴표 문자 대신 백틱(backtick) 문자 `를 사용한다.

// 기존 ES5에서의 코드
// function introduce(name,age){
//     console.log("제 이름은"+name+"이고, 저는"+age+"살 입니다")
// }
// ES6에서의 새로운 방법
// function introduce(name,age){
//    console.log(`제 이름은${name}이고 ${age}살 입니다`)
// }

//이제 굳이 + 말고 ``쓰자~

// innerHTML과 textContent의 차이

// innerHTML: Element의 HTML, XML을 읽어오거나, 설정할 수 있습니다. 태그 안에있는 HTML 전체 내용을 들고옴
// textContent: 해상 노드가 가지고 있는 텍스트 값을 그대로 가져옴.(얘는 그대로 문자열로, 기능은 안가져옴)

//함수서 클릭 할때마다 true, false값이 달라지게(스위치) 하려면? 바꾸고 싶은 값 앞에 !를 붙여주면 누를 때마다 현재 상태의 반대 값을 가져오게됀다.

//ES6 문법

// let person = {name, age, cute}
// let person = {name:name,age:age,cute:cute}와 같다


// let {name, age, cute} =  person
// let name = person.name   let age = person.age   let cute = person.cute   와 같다 

// let array = [1,2,3]
// let [a,b,c] = array
// let a = array[0]   let b = array[1]   let c = array[2]   와 같다 

// let a = [1,2]
// let b = [3,4]
// let c = [5,6]

// let result = [...a,...b,...c] // [1,2,3,4,5,6]


// 배열함수 리스트(매개변수 무조건 함수로 받)

// forEach : 반환값이 없다, 단순 for문과 같이 작동한다.
// map : 반환값을 배열에 담아 반환한다.
// filter: 조건에 충족하는(true) 아이템만 배열에 담아 반환한다.
// some: 조건에 충족하는 아이템이 하나라도 있으면 true 반환, 아니면 flase.
// every: 모든 배열에 아이템이 조건을 충족하면 true 반환, 아니면 false.
// find : 조건에 충족하는 아이템 하나만 반환(여러개라면 첫번째것만 반환)
// findIndex : 조건에 충족하는 아이템의 인덱스값 반환 (여러개라면 첫번째아이템의 인덱스번호만 반환)
	

//json 파일 변환 예제(함수를 배열형식으로 해주는 확장자)
// let response = await fetch(url)
// let daa = await response.json()

//API 호출 예시
// const callAPI = async() =>{
//     let url = new URL(`url주소`)
//     let header = new Headers({헤더내용}) // 이건 필요한 경우만
//     let response = await fetch(url,{headers:header})
//     let data = await response.json()
// }

//try catch//오류 핸들링링

// try{
//     // 코드를 입력
// }catch(error){
//     // 에러핸들
// }

// try…catch는 오직 런타임 에러에만 동작한다. 즉, 실행가능한 코드에만 try catch가 가능하다 만약에 {}중괄호 짝이 안맞다던지 그런 문법적인 에러로 돌아갈수 없는 코드라면 try catch가 동작할 수 없다.

// 에러 객체 Error
// try 에서 에러가생기면 catch 블락에 error정보를 error객체안에 넣어서 매개변수로 전달해준다.
// Error객체를 살펴보면 안에 name, message등 여러 이용가능한 속성값이 있지만 에러를 보기위해선 Error.message만 기억해도 좋다

// Error 객체 설명 관련 링크
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error