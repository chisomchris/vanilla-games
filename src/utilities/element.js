export const  Element = (function(){
   const addClass = (element, classes) => {
    Array.isArray(classes) && classes.length ? 
    classes.forEach( className => {
      element.classList.add(className)
    }
    ) : 
    null 
  }
  const removeClass = (element, classes) => {
    Array.isArray(classes) && classes.length ? 
    classes.forEach( className => {
      element.classList.remove(className)
    }
    ) : 
   null
  }
  const create = (elementType = 'div', ...attributes) =>{
    const element = document.createElement(elementType)
    attributes.forEach(attribute => {
      element.setAttribute(Object.keys(attribute)[0], Object.values(attribute)[0])
    })
    return element
  }
  return { create , addClass, removeClass }
})()
