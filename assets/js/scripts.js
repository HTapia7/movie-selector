var myApiKey = '9b5395eaf05fdecc1777b99cac9a49d7'; 
var baseUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=' + myApiKey + '&language=en-US&sort_by=popularity.desc';

var form = document.querySelector('#search');
var pictureUrl = "https://image.tmdb.org/t/p/w500/";
var container = document.getElementById('container');

console.log(baseUrl)

function movieData(){
    
    fetch(baseUrl)
        .then(function(response){
            if(response.ok){
                return response.json()
            }
        })
        .then(function(data){
            // console.log(data.results[0].title)
            data.results.forEach(function(element){
                console.log(element.title)
                console.log(element.vote_average)
                console.log(element.overview)
                console.log(element.poster_path)

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

// Info I want from database is Title, poster , vote_average , overview 
movieData()


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });