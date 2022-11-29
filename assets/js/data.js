// Marvel Info
let comiclist = document.getElementById("comiclist");
fetch(
  "https://gateway.marvel.com/v1/public/characters?ts=ClassProject&apikey=58cf9dccb6a433565258dd4185258cc5&hash=1fa6f8c84714c9295584be1b60c6f537"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //console.log(data.data.results);
    let comics = data.data.results;
    console.log(comics);
    for (let i = 0; i < comics.length; i++) {
      let image = document.createElement("img");
      image.src = comics[i].thumbnail.path + ".jpg";
      comiclist.appendChild(image);
    }
  });
