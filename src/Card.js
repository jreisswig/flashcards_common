import Form from './Form'

export default class Card {
  constructor(card) {
    this.card = card
    this.createCard(this.card)
  }

  createCard(card) {
    const wrapper = document.querySelector('.wrapper')
    const el = document.createElement('section')

    el.classList = 'card'
    el.innerHTML = this.createHtml(card)
    wrapper.insertAdjacentElement('afterbegin', el)

    this.handleButtonclick(el)
  }

  createHtml(card) {
    return `<h2>${card.title}</h2>
    <div class=content>
      <p>${card.question}</p>
      <p>${card.answer}</p>
    </div>
    <button>Show</button>`
  }

  handleButtonclick(el) {
    const button = el.querySelector('button')
    const content = el.querySelector('.content')
    button.addEventListener('click', () => {
      content.classList.toggle('active')
      button.textContent = button.textContent === 'Show' ? 'Hide' : 'Show'
    })
  }
}
