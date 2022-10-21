import './home.scss'
import styles from '../home/home.module'
import { Element } from '../utilities/element'
const {create } = Element
const Div = create('div')
const button = create('button', {class : `icon ${styles.button}`})
const header = create('header', {class: `${styles.header}`})

button.addEventListener('click', ()=>{
  document.querySelector('aside').classList.toggle(`${styles.show__aside}`)
  button.classList.toggle(`${styles.close__icon}`)
})

const span = create('span',{class : `${styles.icon__span}`})
button.appendChild(span)

Div.appendChild(button)

const logo = create('a', {href: '/#'})
logo.textContent = 'Vanilla Games'
logo.classList = (`${styles.logo} ${styles.calign}`)

const wrapper = create('div', {class:  `${styles.calign} wrapper ${styles.flex}`})
wrapper.appendChild(logo)

header.appendChild(wrapper)

wrapper.appendChild(Div)

export { header as Header }