import { Element } from "../utilities/element";
import styles from '../home/home.module'

const { create } = Element

const footer = create('footer', {class: `${styles.footer}`})
const wrapper = create('div', {class: `wrapper`})
footer.appendChild(wrapper)

wrapper.innerHTML = `<p class=${styles.calign}>Copyrights of chisom<span class=${styles.span}>chris</span> &copy; ${ new Date().getFullYear()}</p>`

export {footer as Footer}
