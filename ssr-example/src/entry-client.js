//import './index.css'

//import App from './main'

import Counter from "./main.js";

import hydrateIslands from "./clientHydrate.jsx";

console.log('hydrating...')
hydrateIslands({ Counter })
console.log('hydrated!')