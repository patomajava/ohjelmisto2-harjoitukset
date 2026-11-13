"use strict";

const apiForm = document.querySelector("#apiForm");
const results = document.querySelector("#results");

apiForm.addEventListener("submit", apiquery);

async function apiquery(event) {

    event.preventDefault();
    const queryname = document.querySelector("input[name=q]").value;

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${queryname}`);
        const jsonData = await response.json();

        // console.log(jsonData);
        results.innerHTML = "";

        for (const tvShow of jsonData) {

            const article = document.createElement("article");
            const name = tvShow.show.name;
            const url = tvShow.show.url;
            const image = tvShow.show.image?.medium;
            const summary = tvShow.show.summary;

            article.innerHTML = `
                <h2>${name}</h2>
                <a href="${url}" target="_blank">More information</a>
                <img src="${image || ""}" alt="${name}">
                <div>${summary || ""}</div>
            `;
            results.appendChild(article);
        }

    } catch (error) {
        console.log(error.message);
    }
}