import Card from './Card'
import Form from './Form'

export default class App {
  constructor() {
    new Form({ onClick: () => this.createNewObj(event) })
    fetch('http://localhost:3333/cards').then(res =>
      res
        .json()
        .then(cards => cards.forEach(card => new Card(card)))
        .catch(err => console.log('--->', err))
    )
  }

  createNewObj(event) {
    event.preventDefault()

    const newCard = {
      title: title.value,
      question: question.value,
      answer: answer.value
    }
    title.value = ''
    question.value = ''
    answer.value = ''
    console.log(newCard)
    postCard(newCard).then(card => new Card(card))
  }
}

function postCard(card) {
  return fetch('http://localhost:3333/cards', {
    method: 'POST',
    body: JSON.stringify(card),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())
}
