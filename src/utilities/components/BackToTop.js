import { Element } from "../element";
const unit = 2.5
const {create} = Element
const span = create('span')
const text = create('div')
const backToTop = create('button')
span.innerText = 'Top'
backToTop.appendChild(span)
backToTop.style.position = 'fixed'
backToTop.style.right = '1rem';
backToTop.style.bottom = `${'calc( -1.5rem + 0vh)'}`
backToTop.style.height = `calc( ${unit }rem )`
backToTop.style.width =  `calc( ${unit }rem )`
backToTop.style.borderRadius = '50%'
backToTop.style.border = 'none'
backToTop.style.color = 'white'
backToTop.style.outline = 'none'
backToTop.style.cursor = 'pointer'
backToTop.style.opacity = '1'
backToTop.style.zIndex = '100'
backToTop.style.display = 'flex'
backToTop.style.padding = '0'
backToTop.style.justifyContent = 'center'
backToTop.style.alignItems = 'center'
backToTop.style.transition = 'opacity .3s linear'
backToTop.style.transition = 'bottom .3s linear'
span.style.backgroundColor = 'white'
span.style.display = 'grid'
span.style.color = 'orangered'
span.style.height = `${unit - 0.5}rem`
span.style.width = `${unit - 0.5}rem`
span.style.placeItems = 'center'
span.style.borderRadius = '50%'
text.style.fontSize = `${unit - 1}rem`

backToTop.addEventListener('click', ()=>{
  document.documentElement.scrollTop = 0
})

window.addEventListener('scroll', calcScrollValue)
window.addEventListener('load', calcScrollValue)


function calcScrollValue(){
  const pos = document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrollValue = Math.round((pos * 100) / height) 
  backToTop.style.background = `conic-gradient( orangered ${scrollValue}%, #d7d7d7 ${scrollValue}%)`

  if((pos > document.documentElement.scrollHeight / 10) || (pos > 300)){
    backToTop.style.pointerEvents = 'all'
    backToTop.style.bottom = `${'calc( 2rem + 2vh)'}`
    backToTop.style.opacity = '1'
  } else{
    backToTop.style.pointerEvents = 'none'
    backToTop.style.bottom = `${'calc( -1.5rem + 0vh)'}`
    setTimeout(()=>{
      backToTop.style.opacity = '0'
    }, 200)
  }
}

export { backToTop as BTTButton }