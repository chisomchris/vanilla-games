import { Element } from '../utilities/element'
import styles from '../home/home.module'

const {create } = Element

const logo = create('a', {href: '/#'})
logo.textContent = 'Vanilla Games'
logo.classList = (`${styles.logo} ${styles.calign}`)

const wrapper = create('div', {class:  `${styles.calign} wrapper ${styles.flex}`})
wrapper.appendChild(logo)

const header = create('header', {class: `${styles.header}`})
header.appendChild(wrapper)

const h5 = create('h5', {class: `${styles.h5}`})

h5.innerHTML = 'Tic Tac Toe'

wrapper.appendChild(h5)

export { header as Header }