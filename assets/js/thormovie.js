fetch("http://www.omdbapi.com/?i=tt0800369&apikey=5d92eb43")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
