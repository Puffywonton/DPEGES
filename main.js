import './style.css'
import { gpedpe } from './gpedpe'

document.querySelector('#app').innerHTML = `
    <div id="dpe"></div>
    <div id="dpe2"></div>
    <div id="dpe3"></div>
`

gpedpe('dpe', 500)
gpedpe('dpe2', 92)
gpedpe('dpe3', 21)
