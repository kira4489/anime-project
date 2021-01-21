let details = document.getElementById("details");

// console.log(id);
// recuperamos el querystring
const id = window.location.search.substr(1).replace("id=", "");
console.log(id); // '?q=pisos+en+barcelona&ciudad=Barcelona'

// usando el querystring, creamos un objeto del tipo URLSearchParams
const params = new URLSearchParams(window.location.search);
console.log(params);

function text() {
  return fetch(`https://api.jikan.moe/v3/anime/${id}`)
    .then((response) => response.json())
    .catch((error) => console.log(error.message));
}

async function lorem() {
  let response = await text();
  console.log(response);

  details.innerHTML = `
  <h1 class="title">${response.title}</h1>
  <div class="anime">
        <div class="anime__illustration">
          <figure class="anime__figure">
            <img class="anime__img" src=${response.image_url} alt="anime image">
          </figure>
        </div>
        <div class="anime__info">
          <div class="anime-pill">
              <p class="anime-pill__pill anime-pill__pill--top">#${response.rank}</p>
              <p class="anime-pill__pill anime-pill__pill--gender">${response.genres[0].name}</p>
              <p class="anime-pill__pill anime-pill__pill--season">${response.source}</p>

          </div>
          <p class="anime__details">${response.synopsis}</p>
        </div>
      </div>
  `;
}

lorem();