import { dpeGesDemoInit } from './dpeGesDemoInit'
import dpeGesv2 from "./dpeGesv2"
document.querySelector('#app').innerHTML = `
    <h1>Générateur d'étiquettes DPE/GES</h1>
    <div class="sticker-generator-container">
        <div id="params" class="params-container">
            <span class="instructions">Entrez les parametres:</span>
            <div class="params-form">
                <div>
                    <label for="dpeInput">DPE</label>
                    <input type="text" value="12" id="dpeInput"></input>
                </div>
                <div>
                    <label for="gesInput">GES</label>
                    <input type="text" value="50" id="gesInput"></input>
                </div>
                <div>
                    <label for="heightInput">Hauteur</label>
                    <input type="text" value="600" id="heightInput"></input>
                </div>
                <button id="createButton" class="button">générer</button>
                <button class="button" id="downloadButton">télécharger</button>
            </div>
        </div>
        <div class="preview-container">
            <div id="dpeGesDemoContainer" class="dpeges-demo-container"></div>
        </div>
    </div>
`
dpeGesDemoInit()
// document.querySelector('#app').innerHTML = `<div id="dpeGesDemoContainer" class="dpeges-demo-container"></div>`
// dpeGesv2({ containerId: "dpeGesDemoContainer", dpeValue: 10, gesValue: 10, stickerHeight: 600})