import { Element } from "../utilities/element";
import styles from './home.module'
import { About } from "./About";
import { Challenge } from "./Challenge";
import image from '../assets/images/stephen-leonardi-Zn2McoYVU7k-unsplash.jpg'

const {create} = Element

const main = create('main' , {class: `${styles.flex__main}`})
const imageCont = create('div', {class: `${styles.img__cont}`})
const img = create('img', {src: `${image}`}, {alt: 'hero img'})
const fragment = document.createDocumentFragment()

const header = create('h2')
header.textContent = 'About Vanilla Games'
const para = create('p')
para.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatem fugiat perspiciatis reiciendis laboriosam nisi soluta ut explicabo magni esse vero eaque mollitia consequatur tempora, recusandae libero eligendi ad totam.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nihil eligendi ipsam maiores ullam quam vel consectetur quo, accusantium cum, iure voluptates veritatis quidem. Veniam quasi magni sequi repellendus `

const para1 = create('p')
para1.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatem fugiat perspiciatis reiciendis laboriosam nisi soluta ut explicabo magni esse vero eaque mollitia consequatur tempora, recusandae libero eligendi ad totam.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nihil eligendi ipsam maiores ullam quam vel consectetur quo, accusantium cum, iure voluptates veritatis quidem. Veniam quasi magni sequi repellendus `
const para2 = create('p')
para2.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatem fugiat perspiciatis reiciendis laboriosam nisi soluta ut explicabo magni esse vero eaque mollitia consequatur tempora, recusandae libero eligendi ad totam.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nihil eligendi ipsam maiores ullam quam vel consectetur quo, accusantium cum, iure voluptates veritatis quidem. Veniam quasi magni sequi repellendus `

fragment.append(para, para1, para2)
imageCont.appendChild(img)
imageCont.appendChild(fragment)

main.appendChild(imageCont)
main.appendChild(About)
main.appendChild(Challenge)


export { main as Main }