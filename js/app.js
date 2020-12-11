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

const printCard = (pokemon) => {
  const contain = window.contain
  const template = window['template-card'].content
  const clone = template.cloneNode(true)
  const fragment = document.createDocumentFragment()

  clone.querySelector('.card__image').setAttribute('src', pokemon.img)
  clone.querySelector('.card__title').innerHTML = `${pokemon.name} <span>${pokemon.hp} hp</span>`
  clone.querySelector('.card__exp').textContent = `${pokemon.experience} Exp`
  clone.querySelectorAll('.card__social--prop h3')[0].textContent = pokemon.attack
  clone.querySelectorAll('.card__social--prop h3')[1].textContent = pokemon.special
  clone.querySelectorAll('.card__social--prop h3')[2].textContent = pokemon.defense
  fragment.appendChild(clone)
  contain.appendChild(fragment)
}

