// "https://pokeapi.co/api/v2/language/2
// fetch ("https://pokeapi.co/api/v2/pokemon")
//   .then(response  => response.json())
//   .then(data => {
//     data.names.forEach(element => console.log(element.name))
//   })
//   .catch(error => console.log(error))
// Aquí solamente estamos usando el GET
// fetch() por defecto si no le pasamos ninguna configuracion hace este
// consumo en GET


document.addEventListener('DOMContentLoaded', () => {
  const random = getRandomInt(1, 150)
  fetchApi(random)
})

const getRandomInt = (min, max) =>  {
  return Math.floor(Math.random() * (max - min)) + min;
}

const fetchApi = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()//lo transformamos a json
    printCard(data)
  }
  catch (error) {
    console.log(error)
  }
}

const printCard = (pokemon) => {
  console.log(pokemon)
  const contain = window.contain
  const template = window['template-card'].content
  const clone = template.cloneNode(true)
  const fragment = document.createDocumentFragment()
  // console.log(template)

  clone.querySelector('.card__image').setAttribute('src', 'estatico')
  fragment.appendChild(clone)
  contain.appendChild(fragment)
}

