// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";
let navibar = document.getElementById("navbar");
navibar.innerHTML = navbar();

let data = JSON.parse(localStorage.getItem("details"));

let main = document.getElementById("detailed_news");

let u2i = document.createElement("img");
u2i.src = data.img;
let div = document.createElement("div");
div.style.padding = "0px 20px";
let headline = document.createElement("h3");
headline.innerText = data.headline;
let description = document.createElement("p");
description.innerText = data.description;
let content = document.createElement("p");
content.innerText = data.content;

div.append(headline, description, content);
main.append(u2i, div);
main.style.width = "80%";
main.style.margin = "auto";
main.style.padding = "20px";
u2i.style.width = "100%";

let qSearch = (e) => {
  if (e.key === "Enter") {
    console.log(querySearch.value);
    localStorage.setItem("news", querySearch.value);
    window.location.href = "../search.html";
  }
};

const querySearch = document.getElementById("search_input");
querySearch.addEventListener("keydown", qSearch);