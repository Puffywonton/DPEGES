import './styles/style.css'
import { dpe } from './dpe'
import { ges } from './ges'
import cepEges from './cepEges'
import { barBuilder } from './barBuilder'

document.querySelector('#app').innerHTML = `
    <div id="cepeges" class="cepeges"></div>
    <div id="dpe"></div>
    <div id="ges"></div>
`

// dpe('dpe', 92)
// ges('ges', 40)
cepEges("cepeges")
// barBuilder("dpe")