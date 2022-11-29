let bio = document.getElementById("bio");
let comics = document.getElementById("comics");
let movies = document.getElementById("movies");
let blackwidow_image = document.getElementById("blackwidow_image");
let blackwidow_bio = document.getElementById("blackwidow_bio");

fetch(
  "https://gateway.marvel.com/v1/public/characters?name=Black%20Widow&ts=HelloWorld123&apikey=58cf9dccb6a433565258dd4185258cc5&hash=6a3f4d8c242a80ba92ccd1d638bc7c4f"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //start of thumbnail//
    console.log(data.data.results[0].thumbnail.path + ".jpg");
    let thumbnail = data.data.results[0].thumbnail.path + ".jpg";
    blackwidow_image.src = thumbnail;
    //end of thumbnail//

    //start of bio//
    console.log(data.data.results[0].description);
    let bio = data.data.results[0].description;
    blackwidow_bio.textContent += bio;
    //end of bio//

    //start of comic//
    console.log(data.data.results[0].comics);
    let comic = data.data.results[0].comics.items;

    fetch(
      "https://gateway.marvel.com/v1/public/comics/30090?ts=HelloWorld123&apikey=58cf9dccb6a433565258dd4185258cc5&hash=6a3f4d8c242a80ba92ccd1d638bc7c4f"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data.data.items);
        let comic;
      });
  });
