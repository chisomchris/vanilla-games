import { Element } from "../utilities/element";
import styles from './home.module'
const {create} = Element

const aside = create('aside',{class: `${styles.flex__aside}`})
const ul = create('ul',  {class: `${styles.ul}`})
const nav = create('nav')

// {'About': '#about'}, {'Challenge': '#challenge'}
const navLinks = [  {'crown and anchor': 'crown_and_anchor'},{'rock paper scissors': 'rock_paper_scissors'}, {'tic tac toe': 'tic_tac_toe'}]

navLinks.forEach(nav => {
  const li = create('li')
  const href =  `#${Object.values(nav) }`
  const a = create('a', { href }, {class: `${styles.lia}`})
  li.appendChild(a)
    li.addEventListener('click', ()=>{
      li.parentElement.parentElement.parentElement.classList.remove(`${styles.show__aside}`)
      document.querySelector('button.icon')?.classList.remove(`${styles.close__icon}`)
    })
  ul.appendChild(li)
  a.textContent = `${Object.keys(nav)}`

})

nav.appendChild(ul)

function setNavMinHeight(){
  const header = document.querySelector('header')
  const footer = document.querySelector('footer')
  const page = document.querySelector('#root')
  const pageWidth = page.getBoundingClientRect().width
  const heightHeader = header ? header.getBoundingClientRect().height : 40
  const heightFooter = footer ? footer.getBoundingClientRect().height : 40
  aside.style['minHeight'] = (pageWidth < 820) ? `calc(100vh - ${heightHeader - heightFooter}px) ` : '0px'
}
setNavMinHeight()
window.addEventListener('resize', setNavMinHeight)

aside.appendChild(nav)

export { aside as SideBar }