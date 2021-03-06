
const getRandomInt = (min, max) =>  {
  return Math.floor(Math.random() * (max - min)) + min;
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

export {
  printCard,
  getRandomInt
}