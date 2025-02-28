const API_KEY = `57129f0ea2cf4bee82db8ac01e8e46fd`;
let newsList = [];
let category = '';
const alertMs = document.getElementById("alertMss");
let url = new URL(`https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?country=kr`);

const menus = document.querySelectorAll(".menus button");
menus.forEach(menu => menu.addEventListener("click", (event) => getNewsByCategory(event)));

const mySideNav = document.querySelectorAll(".sidenav a");
mySideNav.forEach(sidenav => sidenav.addEventListener("click", (event) => getNewsByCategory(event)));
console.log("nav", mySideNav);

const InputIn = document.getElementById("myInput");
const InputBt = document.getElementById("myInput2");

const getNews = async()=>{
    try{
        const response = await fetch(url);
        const data = await response.json();
        if(response.status === 200){
            if(data.articles.length===0){
                throw new Error("검색 결과가 없습니다.");
            }
            newsList = data.articles;
            render();
        }else{
            throw new Error(data.message);
        }
        
    }catch(error){
        console.log("error",error.message);
        errorRender(error.message);
    }
    
}
const getLatestNews = async () => {
    url = new URL(`https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?country=kr`);
    getNews();
    console.log("데이터", data);
    console.log("기사 배열", newsList);
}
console.log("myInput2:", InputBt);
getLatestNews();

const render = () => {
    const newsHTML = newsList.map(
        (news) => `<div class="row news">
                <div class="col-lg-4 news-img-area">
                    <img class="news-img-size" src="${news.urlToImage}" onerror="this.onerror=null; this.src='https://static.wikia.nocookie.net/high-strangeness/images/a/af/NoInfobox.png/revision/latest/scale-to-width-down/350?cb=20210630001131';" />
                </div>

                <div class="col-lg-8 news-small-text">
                    <h2 class="news-small-text1">${news.title}</h2>
                    <p>
                        ${
                            news.description == null || news.description == ""
                            ? "내용없음"
                            : news.description.length > 200
                            ? news.description.substring(0, 200) + "..."
                            : news.description
                        }
                    </p>
                    <div>
                        ${news.source.name || "no source"} ${moment(news.publishedAt).fromNow()}
                    </div>

                </div>
            </div>`).join('');
    console.log("기사배열", newsHTML);
    // if(newsList == ""){
    //     alertMs.style.display = "block";
    // }else{
    //     alertMs.style.display = "none";
    // }

    document.getElementById('news-board').innerHTML = newsHTML;
}

const getNewsByCategory = async (event) => {
    category = event.target.textContent.toLowerCase();
    url = new URL(`https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?country=kr&category=${category}`);

    getNews();
}

const errorRender = (errorMessage)=>{
    const errorHTML = `<div class="alert alert-secondary" role="alert">
    ${errorMessage}</div>`;

    document.getElementById("news-board").innerHTML=errorHTML;
}
// const getNewsByInput = async () => {
//     const inputValue = InputIn.value.toLowerCase();
//     if (!inputValue) return;
//     if (inputValue == "sports","technology","business","entertainment","science","general","health") {
//         const url = new URL(`https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?country=kr&category=${inputValue}`);
//         console.log("검색어: ", inputValue);

//         const response = await fetch(url);
//         const data = await response.json();
//         newsList = data.articles || [];
//         render();~
//     }
// }

// InputBt.addEventListener("click", getNewsByInput); //혼자 해본 방법(실행은 돼지만 검색어는 한정적)

const getNewsByInput = async () => {
    const inputValue = InputIn.value;
    url = new URL(
        `https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?country=kr&q=${inputValue}`);

    getNews();
    if(InputIn.value != ""){
        InputIn.value = "";
    }
}
InputBt.addEventListener("click", getNewsByInput);



function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function openInput() {
    const input = document.getElementById("myInput");
    const serch = document.getElementById("myInput2");
    if (input.style.display === "none") {
        input.style.display = "block";
        serch.style.display = "block";
    } else {
        input.style.display = "none";
        serch.style.display = "none";
    }
}

console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
