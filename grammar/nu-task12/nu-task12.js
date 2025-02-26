const API_KEY = `57129f0ea2cf4bee82db8ac01e8e46fd`;
let newsList = [];
const getLatestNews = async()=> {
    const url = new URL(`https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?country=kr`);
    const response = await fetch(url);
    const data = await response.json();
    newsList = data.articles;
    render();
    console.log("데이터",data);
    console.log("기사 배열",newsList);
}

getLatestNews();

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

const render = ()=> {
    const newsHTML = newsList.map(
        (news) => `<div class="row news">
                <div class="col-lg-4 news-img-area">
                    <img class="news-img-size" src="${news.urlToImage ? news.urlToImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU'}" />
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
    console.log("ddd",newsHTML);

    document.getElementById('news-board').innerHTML=newsHTML;
}

console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
