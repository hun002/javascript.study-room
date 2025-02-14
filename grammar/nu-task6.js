// function greet(){
//     console.log("안녕 내 이름은 제시카야");
// }

// greet();


// function greet(name){
//         console.log("안녕 내 이름은", name ,"야");
// }

// greet("할리");

// function greet(name){
//     console.log("안녕 내 이름은",name+"야");//이름이랑 뒤에 야를 붙이고싶어서 +사용용
//     return "매개변수는 "+name;
// }

// let yourName = greet("할리");
// console.log(yourName);

// function meetAt(year, month, day){
    
//     if(year>0 && month>0 && month<=12 && day<=31 && day>0 ){
//         return year + "/" +  month + "/" + day;
//     }else {
//         return "잘못된 날짜 입니다.";
//     }

//     if(year>0 && month>0 && month<=12 ){
//         return year + "년 " + month + "월";
//     }else{
//         return "잘못된 날짜 입니다.";
//     }
    
//     if(year>0){
//         return year + "년";
//     }else {
//         return "잘못된 날짜 입니다.";
//     }

// }

// let date = meetAt(2000, 12, 30);
// console.log(date);

// function meetAt(year, month, date) {

//     if (date) {
//       return `${year}/${month}/${date}`;
//     }
//     if (month) {
//       return `${year}년 ${month}월`;
//     }
//     if (year) {
//       return `${year}년`;
//     }
  
//   }
  
//   console.log(meetAt(2008, 4, 25))

// function findSmallestElement(arr) {
//     if(arr == null || arr.length === 0 ){
//         return 0;
//     }
//     return Math.min(...arr);
// }

// let answer = findSmallestElement([100, 200, 4, 7, 90]);
// console.log(answer);


// let unit = [50000,10000,5000,1000,500,100]
// function returnMoney(money) {
//   for(let i=0;i<unit.length;i++){
//       let num = Math.floor(money / unit[i]);
//       console.log(unit[i]+"X"+num);
//       money = money - (unit[i]*num);
//   }
// }

// returnMoney(500300);
