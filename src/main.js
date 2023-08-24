import { dpeGesDemoInit } from './dpeGesDemoInit'
document.querySelector('#app').innerHTML = `
    <div class="wrapper">
        <h1>Générateur d'étiquettes DPE/GES</h1>
        <div class="parameter-container">
            <div id="params" class="dpe-ges-params-container">
                <div class="params-input-container">
                    <span class="span-title">DPE - Performance énergétique</span>
                    <div class="form-box">
                        <label for="dpeInput">Valeur kWhep/m²/an</label>
                        <input type="text" value="12" id="dpeInput" size="5"></input>
                    </div>
                </div>
                <div class="params-input-container">
                    <span class="span-title">GES - Performance climatique</span>
                    <div class="form-box">
                        <label for="gesInput">Valeur Kg CO₂/m²/an</label>
                        <input type="text" value="50" id="gesInput" size="5"></input>
                    </div>
                </div>
                <div class="params-input-container">
                    <span class="span-title">Réglage</span>
                    <div class="form-box">
                        <label for="heightInput">Hauteur</label>
                        <input type="text" value="600" id="heightInput" size="5"></input>
                    </div>            
                </div>
            </div>
            <button id="createButton" class="button">générer</button> 
        </div>
        <div class="preview-container">
            <div id="dpeGesDemoContainer" class="dpeges-demo-container"></div>
            <button id="downloadButton" class="button download-button">télécharger</button>
        </div>
    </div>
`
dpeGesDemoInit()
// document.querySelector('#app').innerHTML = `<div id="dpeGesDemoContainer" class="dpeges-demo-container"></div>`
// dpeGesv2({ containerId: "dpeGesDemoContainer", dpeValue: 10, gesValue: 10, stickerHeight: 600})