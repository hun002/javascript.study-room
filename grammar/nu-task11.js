let names = [
    "Steven Paul Jobs",
    "Bill Gates",
    "Mark Elliot Zuckerberg",
    "Elon Musk",
    "Jeff Bezos",
    "Warren Edward Buffett",
    "Larry Page",
    "Larry Ellison",
    "Tim Cook",
    "Lloyd Blankfein",
];

// 모든 이름을 대문자로 바꾸어서 출력하시오.
// 성을제외한 이름만 출력하시오. (예-[“Steven”,“Bill”,“Mark”,“Elon”…])
// 이름의 이니셜만 출력하시오. (예-[“SPU”,“BG”,“MEZ”,“EM”…])

// let data = names.map((item)=>{
//     let Upname = item.toUpperCase();
//     return Upname;
// })

// let data = names.map((item)=>item.toUpperCase())

// console.log(data);

// let data = names.map((item)=>{
//     let Upname = item.split(' ');
//     return Upname[0];
// })

// let data = names.map((item)=>item.split(' ')[0])

// console.log(data);

// let data = names.map((item) => {
//     let rename = item.split(" ");
//     let initial = "";
//     rename.forEach((nameItem)=> (initial +=nameItem[0]));
//     return initial;
//   })
// console.log(data)


// 이름에 a를 포함한 사람들을 출력하시오.
// 이름에 같은 글자가 연속해서 들어간 사람을 출력하시오. (예-tt,ff,ll 이런 글자들)

// let Ainclude = names.filter((item)=>{
//     if(item.includes("a")){
//         return item;
//     }
// })
// let Ainclude = names.filter((item)=>item.includes('a'))

// console.log(Ainclude);

// let Letter2 =  names.filter((item) => {
//     let splitArray = item.split("");
//     return splitArray.some((letter, index) => letter == splitArray[index + 1]);

//   })

// console.log(Letter2);

// 전체 이름의 길이가 20자 이상인 사람이 있는가?
// 성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no)

// let nameLength = names.some((item)=>{
//     return item.length >= 20;
// })//return, {} 생략가능

// console.log(`전체 이름의 길이가 20자 이상인 사람이 있는가? ${nameLength}`);

// let nameP = names.some((item)=>{
//     let Upname = item.split(' ');
//     Upname = Upname[0];
//     return Upname.includes("p") || Upname.includes("P");
// })

// console.log(`성을 제외한 이름에 p를 포함한 사람이 있는가?(대소문자 상관 no) ${nameP}`);

// console.log(names.some((item)=>{
//     let splitArray = item.split(' ')
//     splitArray.pop()
//     return splitArray.some(eachName => eachName.toLocaleLowerCase().includes("p"))
// })
// )

// 모두의 전체 이름의 길이가 20자 이상인가?
// 모두의 이름에 a 가 포함되어 있는가?

// let nameLength2 = names.every((item)=>{
//     return item.length >= 20;
// })

// console.log(`모두의 전체 이름의 길이가 20자 이상인가? ${nameLength2}`);

// console.log(names.every(item=>item.length>=20))//생략버전

// let nameA = names.every((item)=>{
//     return item.includes("a");
// })

// console.log(`모두의 이름에 a 가 포함되어 있는가? ${nameA}`);

// console.log(names.every(item=>item.includes('a')))//생략버전

// 전체 이름의 길이가 20자 이상인 사람을 찾으시오.
// 미들네임이 포함되어있는 첫번째 사람을 찾으시오.(예-Steven Paul Jobs)

// let nameLength3 = names.find((item)=>{
//     return item.length >= 20;
// })

// console.log(nameLength3);

// console.log(names.find(item=>item.length>=20))//생략버전

// let midName = names.find((item)=>{
//     let Upname = item.split(' ');
//     return Upname[1];
// })

// console.log(midName);

// console.log(names.find(item=>item.split(' ').length>=3))

// 전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
// 미들네임이 포함되어있는 사람의 인덱스 번호를 찾으시오.

// let nameLength4 = names.findIndex((item)=>{
//     return item.length >= 20;
// })

// console.log(nameLength4);

// console.log(names.findIndex(item=>item.length>=20))//생략버전


// let midName2 = names.findIndex((item)=>{
//     let Upname = item.split(' ');
//     return Upname[1];
// })

// console.log(midName2);

// console.log(names.findIndex(item=>item.split(' ').length>=3))