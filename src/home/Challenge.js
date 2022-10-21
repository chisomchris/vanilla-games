import { Element } from "../utilities/element";
import styles from './home.module'

const { create } = Element

const challenge = create('section', {class: `challenge`}, {id: 'challenge'})
const header = create('h2')
header.textContent = 'The Challenge'
const para = create('p')
para.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatem fugiat perspiciatis reiciendis laboriosam nisi soluta ut explicabo magni esse vero eaque mollitia consequatur tempora, recusandae libero eligendi ad totam.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nihil eligendi ipsam maiores ullam quam vel consectetur quo, accusantium cum, iure voluptates veritatis quidem. Veniam quasi magni sequi repellendus `

const para1 = create('p')
para1.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatem fugiat perspiciatis reiciendis laboriosam nisi soluta ut explicabo magni esse vero eaque mollitia consequatur tempora, recusandae libero eligendi ad totam.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nihil eligendi ipsam maiores ullam quam vel consectetur quo, accusantium cum, iure voluptates veritatis quidem. Veniam quasi magni sequi repellendus `
const para2 = create('p')
para2.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatem fugiat perspiciatis reiciendis laboriosam nisi soluta ut explicabo magni esse vero eaque mollitia consequatur tempora, recusandae libero eligendi ad totam.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nihil eligendi ipsam maiores ullam quam vel consectetur quo, accusantium cum, iure voluptates veritatis quidem. Veniam quasi magni sequi repellendus `
challenge.appendChild(header) 
challenge.appendChild(para)
challenge.appendChild(para1)
challenge.appendChild(para2)

export {challenge as Challenge}
