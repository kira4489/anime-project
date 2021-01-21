let contenido = document.getElementById("contenido");

function traer() {
  fetch("https://api.jikan.moe/v3/genre/anime/2/1", {
    method: "get",
  })
    .then((res) => res.json())
    .then((data) => {
      data.anime.map((item, index) => {
        //  console.log(item)
        if (index > 8) {
          return;
        }
        contenido.innerHTML += `
     <div class="card">
     <img class="card__img" src=${item.image_url}>
     <div class="card-info">
         <div class="card-header">
             <h2 class="card-header__title">${item.title}</h2>
             <p class="card-header__pill">${item.type}</p>
         </div>
         <div class="card-footer">
             <button class="card-footer__btn"><a class= "card-footer__link" href="/public/views/details.html?id=${item.mal_id}">Read more >></a></button>
         </div>
         </div>
         </div>
     `;
      });
    });
}

traer();