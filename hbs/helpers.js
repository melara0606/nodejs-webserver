const hbs = require('hbs')

hbs.registerHelper('getAnio', function () {
  return new Date().getFullYear();
})

hbs.registerHelper('capitalize', (text) => {
  let partials = text.split(' ')
  partials.forEach((element, idx) => {
    partials[idx] = element[0].toUpperCase() + element.slice(1).toLowerCase()
  })
  return partials.join(' ')
})