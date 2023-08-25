import { dpeGesDemoInit } from './dpeGesDemoInit'
document.querySelector('#app').innerHTML = `
    <div class="wrapper">
        <h1>Démo du Générateur d'étiquettes DPE/GES</h1>
        <div class="intro">
            <span>Cette page est une démonstration d’un module npm générant des étiquettes énergétiques. Il a été conçu pour simplifier le processus de création d'étiquettes énergétiques réactives pour les applications Web. Ce module génère automatiquement des étiquettes énergétiques au chargement de la page. Grâce à sa conception réactive, les étiquettes s'adaptent sans effort à différentes tailles d'écran, garantissant ainsi que votre contenu s'affiche parfaitement sur desktop et mobile.
            </span>
            <br><br><br>
            <span>Page Github:</span>
            <a href="https://github.com/Puffywonton/DPEGES">https://github.com/Puffywonton/DPEGES</a>
            <br><br>
            <span>NPM package:</span> 
            <a href="https://www.npmjs.com/package/dpeges">https://www.npmjs.com/package/dpeges</a>
            </div>
        <div class="parameter-container">
            <div id="params" class="params-input-parent-container">
                <div class="params-input-container">
                    <span class="span-title">DPE - Performance énergétique</span>
                    <div>
                        <label for="dpeInput">Valeur kWhep/m²/an</label>
                        <input type="text" value="12" id="dpeInput" size="5"></input>
                    </div>
                </div>
                <div class="params-input-container">
                    <span class="span-title">GES - Performance climatique</span>
                    <div>
                        <label for="gesInput">Valeur Kg CO₂/m²/an</label>
                        <input type="text" value="50" id="gesInput" size="5"></input>
                    </div>
                </div>
                <div class="params-input-container">
                    <div class="reglage-box">
                        <span class="span-title">Réglage</span>
                        <span>(Optionnel)</span>
                    </div>
                    <div>
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