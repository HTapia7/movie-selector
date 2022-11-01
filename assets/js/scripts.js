//API 1 for cards//
var myApiKey = '9b5395eaf05fdecc1777b99cac9a49d7'; 
var baseUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=' + myApiKey + '&language=en-US&sort_by=popularity.desc';

var pictureUrl = "https://image.tmdb.org/t/p/w500/";
var container = document.getElementById('container');

function movieData(){
    
    fetch(baseUrl)
        .then(function(response){
            if(response.ok){
                return response.json()
            }
        })
        .then(function(data){
            data.results.forEach(function(element){

                var movieCard = document.createElement('div')
                movieCard.classList.add('card')
                movieCard.innerHTML = `
                <div class="card-image waves-effect waves-block waves-light">
                  <img class="activator" src="${pictureUrl + element.poster_path}">
                </div>
            
                <div class="card-content">
                  <span class="card-title activator grey-text text-darken-4">${element.title}<i class="material-icons right">more_vert </i></span>

                </div>
  
                <div class="card-reveal">
                  <span class="card-title grey-text text-darken-4">Overview<i class="material-icons right">close</i></span>
                  <p>${element.overview}</p>
                </div>
                 
                `
                container.appendChild(movieCard)
        })     
    })
}

movieData()

  // -------------------------------------------------- // 

var form = document.querySelector('#search')

form.addEventListener('submit', function(e){
    e.preventDefault()

    var userInput = form.querySelector('#search-movie').value
    var secondApiKey = 'apikey=264a5361'
    var completeUrl = 'https://www.omdbapi.com/?s=' + userInput + '&' + secondApiKey

    fetch(completeUrl)
        .then(function(response){
            if(response.ok){
                return response.json()
            }
        })
        .then(function(data){
            var searchContainer = document.querySelector('.search-container')
            data.Search.forEach(function(element){

                var movieCard = document.createElement('div')
                movieCard.classList.add('card')
                movieCard.innerHTML = `
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="${element.Poster}">
                </div>

                <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">${element.Title}</span>
                    <p>${element.Type}</p>
                </div>
                `
                searchContainer.appendChild(movieCard)
            })
        })
})

// Modal Js from Materalize 
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});

 //Modal//
 document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});