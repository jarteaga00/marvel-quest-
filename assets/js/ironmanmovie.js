fetch("http://www.omdbapi.com/?i=tt0371746&apikey=5d92eb43")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    document.getElementById("");
  });
