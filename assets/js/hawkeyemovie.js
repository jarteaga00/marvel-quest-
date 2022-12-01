fetch('http://www.omdbapi.com/?i=tt10160804&apikey=5d92eb43')
.then(function (response) {
    return response.json();
})
.then(function (data){
    console.log(data);
    document.getElementById('');

});