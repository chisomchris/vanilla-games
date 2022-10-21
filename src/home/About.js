import { Element } from "../utilities/element";
import styles from './home.module'

const { create } = Element

const about = create('section', {class: `about`}, { id: 'about'})
const header = create('h2')
header.textContent = 'About Vanilla Games'
const para = create('p')
para.textContent = `This project is JavaScript centered. All the parts of the page(s) are to be generated solely using vanilla JavaScript, no use of framework or library (except personally developed library) is allowed. `

const para1 = create('p')
para1.textContent = `Development and Build packages shall be allowed, also any method of styling shall be allowed. However, the recommended approach is using the CSS module pattern to avoid collisions. `

const para2 = create('p')
para2.textContent = ` We encourage the use of proper naming convention, use of camalCase is the required style. Ensure use of clear and concise variable names, and also make proper choice of documentation.`

about.appendChild(header) 
about.appendChild(para)
about.appendChild(para1)
about.appendChild(para2)

export {about as About}
