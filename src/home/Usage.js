import { Element } from "../utilities/element";
import styles from './home.module'

const { create } = Element
const list = create('ul')

const usage = create('section', {class: `usage`}, {id: 'usage'})
const header = create('h2')
header.textContent = 'Usage'

const para = create('p')
para.textContent = `How to contribute to the projects`

usage.appendChild(header) 
usage.appendChild(para)
usage.appendChild(list)


const li1 = create('li')
li1.innerHTML = 'fork the the <a href="https://github.com/chisomchris/vanilla-games" target="_blank">Vanilla Games</a> repository.'
const li2 = create('li')
li2.innerText = 'clone this project from  github repository into your local machine.'
const li3 = create('li')
li3.innerText = 'open your terminal and change to your project root directory'
const li4 = create('li')
li4.innerHTML = `run the script <span class="${styles.code}">npm install</span> to add dependecies to the project`
const li5 = create('li')
li5.innerHTML = `run the script <span class="${styles.code}">npm start</span>, to test if webpack development server is working properly ( It should open localhost : port 8080 by default ).`
const li6 = create('li')
li6.innerHTML = `run the script <span class="${styles.code}"> npm run build </span> to bundle production build version.`

const li7 = create('li')
li7.innerHTML = `if you are satisfied with your work and want to showcase it, submit a pull request to <a href="https://github.com/chisomchris/vanilla-games" target="_blank">github.com/chisomchris/vanilla-games</a>`

list.append(li1, li2, li3, li4, li5, li6, li7)

// const li8 = create('li')
// const li9 = create('li')


export {usage as Usage}
