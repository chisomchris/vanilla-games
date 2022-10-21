import { Element } from "../utilities/element";
// import styles from './home.module'

const { create } = Element

const challenge = create('section', {class: `challenge`}, {id: 'challenge'})
const header = create('h2')
header.textContent = 'The Challenge'
const para = create('p')
para.textContent = `Do you have what it takes to be called a JavaScript developer? Are you part of the Vanilla folks? `

const para1 = create('p')
para1.textContent = `If yes, Then this is for you!!! Create JavaScript only pages and showcase your work here. You can contribute to existing page here or add you beautifully crafted webpage using JavaScript. `

const para2 = create('p')
para2.textContent = `Are you up to the tasks? Happy coding, viola!  `

challenge.appendChild(header) 
challenge.appendChild(para)
challenge.appendChild(para1)
challenge.appendChild(para2)

export {challenge as Challenge}
