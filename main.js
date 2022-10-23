import './style.css'
import { dpe } from './dpe'
import { ges } from './ges'

document.querySelector('#app').innerHTML = `
    <div id="dpe"></div>
    <div id="ges"></div>
`

dpe('dpe', 92)
ges('ges', 40)
