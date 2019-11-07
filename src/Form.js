export default class Form {
  constructor({ onClick }) {
    const templateElement = document.querySelector('#template-form')
    const template = templateElement.innerHTML
    document.body.insertAdjacentHTML('afterbegin', template)

    this.el = document.querySelector('.form')

    this.el.addEventListener('submit', () => onClick())
  }
}
