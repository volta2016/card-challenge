import { printCard, getRandomInt } from './module.js'

document.addEventListener('DOMContentLoaded', () => {
  const random = getRandomInt(1, 150)
  fetchApi(random)
})



const fetchApi = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()//lo transformamos a json

    const pokemon = {
      img: data.sprites.other.dream_world.front_default,
      name: data.name,
      hp: data.stats[0].base_stat,
      experience: data.base_experience,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
      special: data.stats[3].base_stat,
    }
    printCard(pokemon)
  }
  catch (error) {
    console.log(error)
  }
}


