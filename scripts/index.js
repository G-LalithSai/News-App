// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";
let navibar = document.getElementById("navbar");
navibar.innerHTML = navbar();
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

// country wise news link :- https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}

// query base news link :- https://masai-mock-api.herokuapp.com/news?q={query}

import { countryNews, append } from "./country.js";

let search = (cc) => {
  countryNews(cc).then((data) => {
    let news = document.getElementById("results");
    news.innerHTML = null;
    append(data.articles, news);
  });
};

let countries = document.getElementById("countries").children;
function cSearch() {
  let cc = this.id;
  search(cc);
}

for (let el of countries) {
  el.addEventListener("click", cSearch);
}

let qSearch = (e) => {
  if (e.key === "Enter") {
    console.log(querySearch.value);
    localStorage.setItem("news", querySearch.value);
    window.location.href = "../search.html"
  }
};

const querySearch = document.getElementById("search_input");
querySearch.addEventListener("keydown", qSearch);
