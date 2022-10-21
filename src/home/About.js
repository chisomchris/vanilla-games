import { Element } from "../utilities/element";
import styles from './home.module'

const { create } = Element

const about = create('section', {class: `about`}, { id: 'about'})
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
about.appendChild(header) 
about.appendChild(para)
about.appendChild(para1)
about.appendChild(para2)

export {about as About}
