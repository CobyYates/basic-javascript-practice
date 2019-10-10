import { films } from './assets/films.js'
import { people } from './assets/people.js'
import { planets } from './assets/planets.js'
import { species } from './assets/species.js'
import { starships } from './assets/starships.js'
import { vehicles } from './assets/vehicles.js'

let mainArea = document.querySelector('main')

films.forEach(function(film) {
    let filmDiv = document.createElement('div')
    let filmTitle = document.createElement('h1')
    let filmCrawl = document.createElement('p')
    let filmEpisode = document.createElement('p')

    filmTitle.textContent = film.title
    filmCrawl.textContent = film.opening_crawl

    filmDiv.appendChild(filmTitle)
    filmDiv.appendChild(filmCrawl)

    mainArea.appendChild(filmDiv)
  });

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

planets.forEach((planet) => {
  let planetDiv = document.createElement('div')
  let name = document.createElement('h1')
  let diameter = document.createElement('p')
  let terrain = document.createElement('p')
  let population = document.createElement('p')
  // let pic = document.createElement('img')

  // let charNum = getCharNumber(planet.url)
  // pic.setAttribute('class', 'photo')

  name.textContent = planet.name
  diameter.textContent = 'Diameter: ' + planet.diameter
  terrain.textContent = 'Terrain: ' + planet.terrain
  population.textContent = 'Population: ' + planet.population

  planetDiv.appendChild(name)
  // planetDiv.appendChild(pic)
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
  // let pic = document.createElement('img')

  // let charNum = getCharNumber(planet.url)
  // pic.setAttribute('class', 'photo')

  name.textContent = specy.name
  classification.textContent = 'Classification: ' + specy.classification
  language.textContent = 'Language: ' + specy.language

  specyDiv.appendChild(name)
  // planetDiv.appendChild(pic)
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
  // let pic = document.createElement('img')

  // let charNum = getCharNumber(planet.url)
  // pic.setAttribute('class', 'photo')

  name.textContent = starship.name
  model.textContent = 'Model: ' + starship.model
  cost.textContent = 'Cost: ' + starship.cost_in_credits + ' credits'
  hyperdrive.textContent = 'Hyperdrive Rating: ' + starship.hyperdrive_rating

  starshipDiv.appendChild(name)
  // planetDiv.appendChild(pic)
  starshipDiv.appendChild(model)
  starshipDiv.appendChild(cost)
  starshipDiv.appendChild(hyperdrive)
  

  mainArea.appendChild(starshipDiv)
});

vehicles.forEach((starship) => {
  let starshipDiv = document.createElement('div')
  let name = document.createElement('h1')
  let model = document.createElement('p')
  let cost = document.createElement('p')
  let speedMax = document.createElement('p')
  // let pic = document.createElement('img')

  // let charNum = getCharNumber(planet.url)
  // pic.setAttribute('class', 'photo')

  name.textContent = starship.name
  model.textContent = 'Model: ' + starship.model
  cost.textContent = 'Cost: ' + starship.cost_in_credits + ' credits'
  speedMax.textContent = 'Max Speed: ' + starship.max_atmosphering_speed

  starshipDiv.appendChild(name)
  // planetDiv.appendChild(pic)
  starshipDiv.appendChild(model)
  starshipDiv.appendChild(cost)
  starshipDiv.appendChild(speedMax)
  

  mainArea.appendChild(starshipDiv)
});

api(films, title, opening_crawl)

api((apiName, prop1, prop2, prop3, prop4, prop5) => {
  apiName.forEach(() => {
    let prop1Div = document.createElement('div')
    let prop2 = document.createElement('h1')
    let prop3 = document.createElement('p')
    let prop4 = document.createElement('p')
    let prop5 = document.createElement('p')
  
    prop2.textContent = prop1.prop2
    prop3.textContent = 'prop3: ' + prop1.prop3
    prop4.textContent = 'prop4: ' + prop1.prop4
    prop5.textContent = 'prop5: ' + prop1.prop5
  
    prop1Div.appendChild(prop2)
    prop1Div.appendChild(prop3)
    prop1Div.appendChild(prop4)
    prop1Div.appendChild(prop5)
  
    mainArea.appendChild(prop1Div)
  });
})