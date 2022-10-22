import '../home/home.scss'
import { Element } from "../utilities/element"

const Body = Element.create('div', {class: `wrapper`})
const h2 = Element.create('h2')
h2.textContent = 'Page Not Found!'
const para = Element.create('p')
const link = Element.create('a', {href: '/vanilla-games/#'})
link.textContent = 'Go to Home Page...'
para.appendChild(link)
Body.appendChild(h2)
Body.appendChild(para)
export default (root) => {
  document.title = 'Vanilla Games | Not Found';
  root.innerHTML = ''
  root.appendChild(Body)
}