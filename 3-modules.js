// Modules
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum

// To access them we do require // and when the data come from.
// every time we want to access the module we need to began with ./
const  names = require('./4-names')
const sayHi  = require('./utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade') // just remind it when you import module you actually invoque it
console.log(data)
console.log(names)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
