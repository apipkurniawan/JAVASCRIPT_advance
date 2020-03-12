// using ajax jquery
// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=9abae87a&s=avengers',
//     success: movies => console.log(movies)
// });


// using ajax modern javascript 
const movies = fetch('http://www.omdbapi.com/?apikey=9abae87a&s=avengers');
console.log(movies);

//todo -- blum selesai..........