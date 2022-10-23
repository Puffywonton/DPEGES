import './style.css'
import { dpe } from './dpe'

document.querySelector('#app').innerHTML = `
    <div id="dpe"></div>
    <div id="dpe2"></div>
    <div id="dpe3"></div>
`

dpe('dpe', 500)
dpe('dpe2', 92)
dpe('dpe3', 21)
