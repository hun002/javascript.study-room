
let number = 0;

if(number>0){
    console.log("양수입니다.");
}else if(number<0){
    console.log("음수입니다.");
}else {
    console.log("0 입니다.");
}

let testscore = 10;
let score ="";

if(testscore<=100 && testscore>=90){
    score ="A";
}else if(testscore<=89 && testscore>=80){
    score ="B";
}else if(testscore<=79 && testscore>=70){
    score ="C";
}else if(testscore<=69 && testscore>=60){
    score ="D";
}else if(testscore<=59 && testscore>=0){
    score ="F";
}else{
    console.log("없음");
}
console.log(score);

let skills = ["HTML","CSS","Javascript","React"];

if(skills.includes("Javascript") && skills.includes("React")){
    console.log("합격");
}else if(skills.includes("Javascript") || skills.includes("React")){
    console.log("예비");
}else{
    console.log("탈락");
}
