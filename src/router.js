const routes = {}
const templates = {}
const routesList = ['/', 'rock_paper_scissors', 'tic_tac_toe', 'crown_and_anchor']
const root = document.getElementById('root')
function template(name, templateFunction){
    return templates[name] = templateFunction
}
function route(route, template){
  if(typeof template == 'function'){
    return routes[route] = template
  } else if( typeof template == 'string'){
    return routes[route] = templates[template]
  } else {
    return
  }
}
function resolveRoute(route){
  try {
    return routes[route]
  } catch (error) {
    throw new Error(`${route} is not defined`)
  }
}
function router(evt){
  evt.preventDefault()
  const url = window.location.hash.slice(1) || '/' 
  if(routesList.indexOf(url) > -1){ /* if route was defined*/

    if(routes[url]){/*if path has been in route handler, resolve route*/
      const route = resolveRoute(url)
      route(root)
    }else{ /*import and define template, route*/
      if( url === '/'){/*if root route, import home template*/
        import(`./templates/home`).then(
          module => {
            const home = module.default
            template('home', ()=>{
              home(root)
            })
            route(url , 'home')
            const routeResolved = resolveRoute(url)
            routeResolved(root)
          }
        ).catch(err => console.error(err) )
      } else{
        import(`./templates/${url}`).then(
          module => {
            const templateFunc = module.default
            template(url, templateFunc)
            route(url , url)
            const routeResolved = resolveRoute(url)
            routeResolved(root)
          }
        ).catch(err => console.error(err) )
      }
    }
    } else{
      // display 404 not found page
      import(`./templates/404`).then(
        module => {
          const templateFunc = module.default
          template(url, templateFunc)
          route(url , url)
          const routeResolved = resolveRoute(url)
          routeResolved(root)
        }
      ).catch(err => console.error(err) )
  }
}

export {router}
