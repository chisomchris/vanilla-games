import { Element } from "../utilities/element";
import styles from './home.module'
import { About } from "./About";
import { Challenge } from "./Challenge";
import image from '../assets/images/pankaj-patel-1IW4HQuauSU-unsplash.jpg'
import { Usage } from "./Usage";

const {create} = Element

const main = create('main' , {class: `${styles.flex__main}`})
const hero = create('div', {class: `${styles.img__cont} ${styles.hero}`})
const imgCont = create('figure', {class: `${styles.figure}`})
const imgCaption = create('figcaption')
imgCaption.innerHTML = 'image from <a href="https://unsplash.com/photos/1IW4HQuauSU" target="_blank">Unsplash</a> by <a href="https://unsplash.com/@pankajpatel" target="_blank">Pankaj Patel</a>'
const img = create('img', {src: `${image}`}, {alt: 'hero img'}, {class: `${styles.hero__img}`})

imgCont.appendChild(img)
imgCont.appendChild(imgCaption)
hero.appendChild(imgCont)

main.appendChild(hero)
main.appendChild(About)
main.appendChild(Challenge)
main.appendChild(Usage)

export { main as Main }