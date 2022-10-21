import '../home/home.scss'
import { Header } from "./header"
import { Footer } from "../components/footer"
import { Element } from "../utilities/element"

const Body = Element.create('div', {class: `wrapper`})
const h2 = Element.create('h2')
h2.textContent = 'Rock Paper Scissors'
Body.appendChild(h2)

export const template = (root) => {
  document.title = 'Vanilla Games | Rock Paper Scissors';
  root.innerHTML = ''
  root.appendChild(Header)
  root.appendChild(Body)
  root.appendChild(Footer)
}