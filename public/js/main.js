let content= document.getElementById("content");

function Bring() {
  fetch("https://api.jikan.moe/v3/genre/anime/2/1", {
    method: "get",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.anime.map((item, index) => {
        if (index > 8) {
          return;
        }
        content.innerHTML += `
          <div class="card">
              <div class="card__header">
                  <figure class= "card__figure">
                      <img class="card__img" src=${item.image_url}>
                  </figure>    
              </div>
              <div class="card__body">
                <h2 class="card__title">${item.title}</h2>        
              </div>
              <div class="card__footer">
                <p class="card__pill">${item.genres[2].name}</p>
                <button class="card__btn"><a class= "card__link" href="/public/views/details.html?id=${item.mal_id}"> <i class="fas fa-plus card__icon"></i></a></button>
              </div>
          </div>
    `;
      });
    });
}

Bring();
