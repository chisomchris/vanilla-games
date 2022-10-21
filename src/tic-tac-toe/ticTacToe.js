import '../home/home.scss'
import { Header, Div } from "./header"
import { Footer } from "../components/footer"
import { Element } from "../utilities/element"

const Body = Element.create('div', {class: `wrapper`})
const h2 = Element.create('h2')
h2.textContent = 'Tic Tac Toe'
Body.appendChild(h2)
Body.innerHTML += `<p>
Please contribute to this page!!!
</p>`

export const template = (root) => {
  document.title = 'Vanilla Games | Tic Tac Toe';
  root.innerHTML = ''
  root.appendChild(Header)
  root.appendChild(Body)
  root.appendChild(Footer)
}