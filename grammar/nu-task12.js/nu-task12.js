const API_KEY = `57129f0ea2cf4bee82db8ac01e8e46fd`;
let news = [];
const getLatestNews = async()=> {
    const url = new URL(`https://noona-times-be-5ca9402f90d9.herokuapp.com/top-headlines?country=kr`);
    const response = await fetch(url);
    const data = await response.json();
    news = data.articles;
    console.log("데이터",data);
    console.log("기사 배열",news);
}

getLatestNews();