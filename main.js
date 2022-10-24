import './style.css'
import { dpe } from './dpe'
import { ges } from './ges'
import cepEges from './cepEges'

document.querySelector('#app').innerHTML = `
    <div id="cepeges"></div>
    <div id="dpe"></div>
    <div id="ges"></div>
`

// dpe('dpe', 92)
// ges('ges', 40)
cepEges("cepeges")