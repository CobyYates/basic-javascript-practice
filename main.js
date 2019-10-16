import { films } from './assets/films.js'
import { people } from './assets/people.js'
import { planets } from './assets/planets.js'
import { species } from './assets/species.js'
import { starships } from './assets/starships.js'
import { vehicles } from './assets/vehicles.js'

let mainArea = document.querySelector('main')

//People images
function getCharNumber(charURL) {
  let end = charURL.lastIndexOf('/')
  let charID = charURL.substring(end -2, end)
  if(charID.indexOf('/') !== -1 ) {
    return charID.slice(1,2)
  } else {
      return charID
  }
}
/*

// if(navi === 'Films') {
// let navi = 'Films'
films.forEach(function(film) {
  let filmDiv = document.createElement('div')
  let filmTitle = document.createElement('h1')
  let filmCrawl = document.createElement('p')
  let filmEpisode = document.createElement('p')
  let pic = document.createElement('img')

  let charNum = getCharNumber(film.url)
  pic.setAttribute('class', 'photo')


  filmTitle.textContent = film.title
  filmCrawl.textContent = film.opening_crawl
  filmEpisode.textContent = 'Episode: ' + film.episode_id
  pic.src = `https://starwars-visualguide.com/assets/img/films/${charNum}.jpg`

  filmDiv.appendChild(filmTitle)
  filmDiv.appendChild(pic)
  filmDiv.appendChild(filmCrawl)
  filmDiv.appendChild(filmEpisode)

  mainArea.appendChild(filmDiv)
});
  // }
// else if(navi == 'People'){
people.forEach((person) => {
  let personDiv = document.createElement('div')
  let name = document.createElement('h1')
  let gender = document.createElement('p')
  let pic = document.createElement('img')

  let charNum = getCharNumber(person.url)
  pic.setAttribute('class', 'photo')

  name.textContent = person.name
  gender.textContent = 'Gender: ' + person.gender
  pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`

  personDiv.appendChild(name)
  personDiv.appendChild(pic)
  personDiv.appendChild(gender)
  

  mainArea.appendChild(personDiv)
});
// }

planets.forEach((planet) => {
  let planetDiv = document.createElement('div')
  let name = document.createElement('h1')
  let diameter = document.createElement('p')
  let terrain = document.createElement('p')
  let population = document.createElement('p')
  let pic = document.createElement('img')

  let charNum = getCharNumber(planet.url)
  pic.setAttribute('class', 'photo')

  name.textContent = planet.name
  diameter.textContent = 'Diameter: ' + planet.diameter
  terrain.textContent = 'Terrain: ' + planet.terrain
  population.textContent = 'Population: ' + planet.population
  pic.src = planet.url

  planetDiv.appendChild(name)
  planetDiv.appendChild(pic)
  planetDiv.appendChild(diameter)
  planetDiv.appendChild(terrain)
  planetDiv.appendChild(population)
  

  mainArea.appendChild(planetDiv)
});

species.forEach((specy) => {
  let specyDiv = document.createElement('div')
  let name = document.createElement('h1')
  let classification = document.createElement('p')
  let language = document.createElement('p')
  let pic = document.createElement('img')

  let charNum = getCharNumber(specy.url)
  pic.setAttribute('class', 'photo')

  name.textContent = specy.name
  classification.textContent = 'Classification: ' + specy.classification
  language.textContent = 'Language: ' + specy.language
  pic.src = `https://starwars-visualguide.com/assets/img/species/${charNum}.jpg`

  specyDiv.appendChild(name)
  specyDiv.appendChild(pic)
  specyDiv.appendChild(classification)
  specyDiv.appendChild(language)
  

  mainArea.appendChild(specyDiv)
});

starships.forEach((starship) => {
  let starshipDiv = document.createElement('div')
  let name = document.createElement('h1')
  let model = document.createElement('p')
  let cost = document.createElement('p')
  let hyperdrive = document.createElement('p')
  let pic = document.createElement('img')

  let charNum = getCharNumber(starship.url)
  pic.setAttribute('class', 'photo')

  name.textContent = starship.name
  model.textContent = 'Model: ' + starship.model
  cost.textContent = 'Cost: ' + starship.cost_in_credits + ' credits'
  hyperdrive.textContent = 'Hyperdrive Rating: ' + starship.hyperdrive_rating
  pic.src = `https://starwars-visualguide.com/assets/img/starships/${charNum}.jpg`

  starshipDiv.appendChild(name)
  starshipDiv.appendChild(pic)
  starshipDiv.appendChild(model)
  starshipDiv.appendChild(cost)
  starshipDiv.appendChild(hyperdrive)
  

  mainArea.appendChild(starshipDiv)
});

vehicles.forEach((vehicle) => {
  let vehicleDiv = document.createElement('div')
  let name = document.createElement('h1')
  let model = document.createElement('p')
  let cost = document.createElement('p')
  let speedMax = document.createElement('p')
  let pic = document.createElement('img')

  let charNum = getCharNumber(vehicle.url)
  pic.setAttribute('class', 'photo')

  name.textContent = vehicle.name
  model.textContent = 'Model: ' + vehicle.model
  cost.textContent = 'Cost: ' + vehicle.cost_in_credits + ' credits'
  speedMax.textContent = 'Max Speed: ' + vehicle.max_atmosphering_speed
  pic.src = `https://starwars-visualguide.com/assets/img/vehicles/${charNum}.jpg`

  vehicleDiv.appendChild(name)
  vehicleDiv.appendChild(pic)
  vehicleDiv.appendChild(model)
  vehicleDiv.appendChild(cost)
  vehicleDiv.appendChild(speedMax)
  

  mainArea.appendChild(vehicleDiv)
});
*/

// const maleCharacters = people.filter(person => person.gender === 'male')
// const femaleCharacters = people.filter(person => person.gender === 'female')
// const nuetralCharacters = people.filter(person => person.gender != 'male', 'female')
// console.log(nuetralCharacters)

call_me(films)


function call_me(api) {
  (api.forEach((apis) => {
    console.log(api)
  let apiDiv = document.createElement('div')
  let apiPar1 = document.createElement('h1')
  // let apiPar4 = document.createElement('img')
  let apiPar2 = document.createElement('p')
  let apiPar3 = document.createElement('p')

  // let charNum = getCharNumber(apis.url)
  // pic.setAttribute('class', 'photo')


  apiPar1.textContent = apis.title
  // apiPar4.textContent = api.pic
  apiPar2.textContent = apis.opening_crawl
  apiPar3.textContent = 'Episode: ' + apis.episode_id
  // pic.src = `https://starwars-visualguide.com/assets/img/films/${charNum}.jpg`

  apiDiv.appendChild(apiPar1)
  // apiDiv.appendChild(apiPar4)
  apiDiv.appendChild(apiPar2)
  apiDiv.appendChild(apiPar3)

  mainArea.appendChild(apiDiv)
  })
)}
