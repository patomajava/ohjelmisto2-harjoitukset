"use strict";
apiForm.addEventListener("submit", apiquery());


async function apiquery() {

    const queryname = document.querySelector("input[name=q]").value;

    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=${queryname}`);
      const jsonData = await response.json();
      console.log(response);
      console.log(jsonData);

    } catch (error) {
      console.log(error.message);
    }
}