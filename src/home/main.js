import { Element } from "../utilities/element";
import styles from './home.module'
import { About } from "./About";
import { Challenge } from "./Challenge";
import image from '../assets/images/stephen-leonardi-Zn2McoYVU7k-unsplash.jpg'
import { Usage } from "./Usage";

const {create} = Element

const main = create('main' , {class: `${styles.flex__main}`})
const hero = create('div', {class: `${styles.img__cont} ${styles.hero}`})
const imgCont = create('div', {class: `${styles.image__cont}`})
const img = create('img', {src: `${image}`}, {alt: 'hero img'}, {class: `${styles.hero__img}`})

imgCont.appendChild(img)
hero.appendChild(imgCont)

main.appendChild(hero)
main.appendChild(About)
main.appendChild(Challenge)
main.appendChild(Usage)

export { main as Main }