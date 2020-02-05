
const section = document.querySelector('#section')
let starshipData

fetch('https://swapi.co/api/starships/')
  .then(function (response) {
    return response.json() // promise
  })
  .then(function (data) {
    starshipData = data.results
    renderProfile()
    // return data
  })

// function getPilotUrl () {
//   for( let starship of starshipData){

//   }
// }

function renderProfile () {
  for (const starship of starshipData) {
    const name = starship.name

    const profile = document.createElement('div')
    profile.classList.add('profile')

    const profilePic = document.createElement('img')
    profilePic.classList.add('pic')
    profilePic.src = shipImages[name]
    profile.appendChild(profilePic)

    const caption = document.createElement('h2')
    caption.classList.add('caption')
    caption.innerText = 'Model: ' + name
    profile.appendChild(caption)

    const manufacturer = document.createElement('p')
    manufacturer.classList.add('about')
    manufacturer.innerText = 'Make: ' + starship.manufacturer
    profile.appendChild(manufacturer)

    const shipClass = document.createElement('p')
    shipClass.classList.add('about')
    shipClass.innerText = 'Class: ' + starship.starship_class
    profile.appendChild(shipClass)

    const shipLength = document.createElement('p')
    shipLength.classList.add('about')
    shipLength.innerText = 'Size: ' + starship.length + ' meters'
    profile.appendChild(shipLength)

    const pilots = document.createElement('p')
    pilots.classList.add('about')
    const pilotUrlArray = starship.pilots
    pilots.innerText = "Pilot: " +getPilotNames(pilotUrlArray)
    profile.appendChild(pilots)

    section.appendChild(profile)
  }
}

function getPilotNames (array) {
  for (const url of array) {
    fetch(url)
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        const name = data.name
        return name
      })
  }
}
